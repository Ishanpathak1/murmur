import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import {
  collection,
  query,
  where,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  serverTimestamp
} from 'firebase/firestore';
import { getOrCreateUserId } from '@/lib/getUserId';
import Link from 'next/link';

export default function Inbox() {
  const [userId, setUserId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = getOrCreateUserId();
    setUserId(id);
  }, []);

  useEffect(() => {
    if (!userId) return;

    const fetchReplies = async () => {
      setLoading(true);
      const q = query(
        collection(db, 'messages'),
        where('authorId', '==', userId),
        where('hasReply', '==', true)
      );

      const snapshot = await getDocs(q);
      const messageData = [];

      for (const docSnap of snapshot.docs) {
        const message = { id: docSnap.id, ...docSnap.data() };

        if (!message.replyId) continue;

        const replyRef = doc(db, 'replies', message.replyId);
        const replyDoc = await getDoc(replyRef);

        if (!replyDoc.exists()) continue;

        const reply = replyDoc.data();

        // ✅ Auto-mark as read if not already
        if (!reply.readAt) {
          await updateDoc(replyRef, {
            readAt: serverTimestamp(),
          });
        }

        messageData.push({
          message,
          replyId: message.replyId,
          reply,
        });
      }

      setMessages(messageData);
      setLoading(false);
    };

    fetchReplies();
  }, [userId]);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Inbox</h1>
        <Link href="/">
          <span className="text-blue-600 underline">← Back</span>
        </Link>
      </div>

      {loading && <p>Loading replies...</p>}

      {!loading && messages.length === 0 && (
        <p className="text-gray-500 dark:text-gray-400">No replies available at the moment.</p>
      )}

      <div className="grid gap-4">
        {messages.map(({ message, reply, replyId }) => (
          <div key={replyId} className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
            <p className="text-sm text-gray-500 dark:text-gray-400">Your murmur:</p>
            <p className="text-lg mb-3 italic">&quot;{message.text}&quot;</p>

            <p className="text-sm text-gray-500 dark:text-gray-400">Their reply:</p>
            <p className="text-base">{reply.replyText}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


