import { useState, useEffect } from 'react';
import Link from 'next/link';
import { db } from '@/lib/firebase';
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp
} from 'firebase/firestore';

import { getOrCreateUserId } from '@/lib/getUserId';
import ReplyModal from '@/components/ReplyModal';
import { QRCodeCanvas } from 'qrcode.react';
import ThemeToggle from '@/components/ThemeToggle';

export default function Home() {
  const [mode, setMode] = useState('need');
  const [text, setText] = useState('');
  const [mood, setMood] = useState('sad');
  const [messages, setMessages] = useState([]);
  const [selectedMood, setSelectedMood] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [userId, setUserId] = useState(null);
  const [hasReplies, setHasReplies] = useState(false);

  const moodColors = {
    sad: 'bg-blue-50 dark:bg-blue-900',
    angry: 'bg-red-50 dark:bg-red-900',
    lonely: 'bg-purple-50 dark:bg-purple-900',
    grateful: 'bg-green-50 dark:bg-green-900',
    empty: 'bg-gray-50 dark:bg-gray-700',
    mixed: 'bg-yellow-50 dark:bg-yellow-900',
  };

  useEffect(() => {
    const id = getOrCreateUserId();
    
    setUserId(id);
  }, []);

  useEffect(() => {
    if (!userId || mode !== 'need') return;

    const q = query(
      collection(db, 'messages'),
      where('authorId', '==', userId),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const myMsgs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
     
      setMessages(myMsgs);

      const anyReplied = myMsgs.some((msg) => msg.hasReply);
      setHasReplies(anyReplied);
    });

    return () => unsubscribe();
  }, [userId, mode]);

  useEffect(() => {
    if (mode !== 'help') return;

    const q = query(
      collection(db, 'messages'),
      where('hasReply', '==', false),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const needReplies = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      
      setMessages(needReplies);
    });

    return () => unsubscribe();
  }, [mode]);

  const submitMessage = async () => {
    if (!text.trim()) return;
    setLoading(true);
    try {
      const ref = await addDoc(collection(db, 'messages'), {
        text,
        mood,
        authorId: userId,
        createdAt: serverTimestamp(),
        hasReply: false,
        replyId: null,
      });
      
      setText('');
      
    } catch (err) {
      console.error('[ERROR ADDING MESSAGE]', err);
      alert('Something went wrong');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6 transition-colors">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Murmur</h1>
        <div className="flex items-center gap-3">
          
          {hasReplies && (
            <Link href="/inbox" className="relative">
              <span className="text-2xl">💌</span>
              <span className="absolute -top-1 -right-2 bg-red-600 text-white text-xs px-1.5 py-0.5 rounded-full">1</span>
            </Link>
          )}
          <button onClick={() => setMode('need')} className={`px-4 py-2 rounded-lg ${mode === 'need' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}>Need Help</button>
          <button onClick={() => setMode('help')} className={`px-4 py-2 rounded-lg ${mode === 'help' ? 'bg-green-600 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}>Will Help</button>
        </div>
      </div>

      {mode === 'need' && (
        <div>
          <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="Type your thoughts..." className="w-full p-3 rounded-lg bg-gray-100 dark:bg-gray-800 mb-4" rows={4} />
          <select value={mood} onChange={(e) => setMood(e.target.value)} className="mb-4 p-2 rounded bg-gray-200 dark:bg-gray-700">
            <option value="sad">😢 Sad</option>
            <option value="angry">😠 Angry</option>
            <option value="lonely">😶 Lonely</option>
            <option value="grateful">😇 Grateful</option>
            <option value="empty">😔 Empty</option>
            <option value="mixed">🎭 Mixed</option>
          </select>
          <br />
          <button onClick={submitMessage} disabled={loading} className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg disabled:opacity-50">{loading ? 'Sending...' : 'Send Murmur'}</button>
          {userId && (
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mt-6 text-center">
              <p className="mb-2 text-sm">Scan on your phone to sync:</p>
              <QRCodeCanvas value={`https://murmur-eight.vercel.app/?id=${userId}`} size={160} />
              <p className="mt-2 text-xs text-gray-500 break-all">https://murmur-eight.vercel.app/?id={userId}</p>
            </div>
          )}
          <div className="grid gap-4 mt-6">
            {messages.map((msg) => (
              <div key={msg.id} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <p className="text-sm text-gray-500 mb-2">Mood: {msg.mood} | Has Reply: {msg.hasReply ? 'Yes' : 'No'}</p>
                <p className="text-lg">{msg.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {mode === 'help' && (
        <>
          <div className="flex gap-2 my-6 flex-wrap">
            {['sad', 'angry', 'lonely', 'grateful', 'empty', 'mixed'].map((m) => (
              <button key={m} onClick={() => setSelectedMood(selectedMood === m ? null : m)} className={`px-3 py-1 rounded-full border text-sm ${selectedMood === m ? 'bg-blue-500 text-white' : 'bg-gray-200 dark:bg-gray-700 dark:text-white'}`}>{m}</button>
            ))}
          </div>
          <div className="grid gap-4">
            {messages.filter((msg) => !selectedMood || msg.mood === selectedMood).map((msg) => {
              const cardColor = moodColors[msg.mood] || 'bg-gray-100 dark:bg-gray-800';
              return (
                <div key={msg.id} className={`p-4 ${cardColor} rounded-lg`}>
                  <p className="text-sm text-gray-500 mb-2">Mood: {msg.mood}</p>
                  <p className="text-lg">{msg.text}</p>
                  <button onClick={() => setSelectedMessage(msg)} className="mt-3 text-blue-600 underline">Send Kindness</button>
                </div>
              );
            })}
          </div>
        </>
      )}

      {selectedMessage && <ReplyModal message={selectedMessage} onClose={() => setSelectedMessage(null)} />}
    </div>
  );
}