import { useState, useEffect } from 'react';
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  doc,
  updateDoc,
  serverTimestamp,
  Timestamp
} from 'firebase/firestore';
import { db } from '@/lib/firebase';

export default function ReplyModal({ message, onClose }) {
  const [replyText, setReplyText] = useState('');
  const [sending, setSending] = useState(false);

  const authorId = typeof window !== 'undefined'
    ? localStorage.getItem('murmur_id')
    : null;

  const handleSubmit = async () => {
    if (!replyText.trim() || !authorId) return;
    setSending(true);

    try {
      // 🔒 Rate limit check: 5 per 5 hours
      const fiveHoursAgo = Timestamp.fromMillis(
        Date.now() - 5 * 60 * 60 * 1000
      );

      const q = query(
        collection(db, 'replies'),
        where('authorId', '==', authorId),
        where('createdAt', '>=', fiveHoursAgo)
      );

      const recentReplies = await getDocs(q);

      if (recentReplies.size >= 5) {
        alert("You've reached the 5 replies limit for the last 5 hours 😅");
        setSending(false);
        return;
      }

      // ✅ Add reply
      const replyRef = await addDoc(collection(db, 'replies'), {
        messageId: message.id,
        replyText,
        authorId,
        createdAt: serverTimestamp(),
        readAt: null
      });

      // 🔗 Update message with replyId + hasReply
      const msgRef = doc(db, 'messages', message.id);
      await updateDoc(msgRef, {
        hasReply: true,
        replyId: replyRef.id
      });

      alert("Kindness sent 💙");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    }

    setSending(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-900 rounded-lg p-6 w-full max-w-md">
        <h2 className="text-lg font-semibold mb-3">You're sending kindness to:</h2>
        <p className="text-sm text-gray-500 mb-4 italic">"{message.text}"</p>

        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          onContextMenu={(e) => e.preventDefault()}
          placeholder="Type your reply (no copy-paste allowed)"
          className="w-full p-3 rounded bg-gray-100 dark:bg-gray-800 mb-4"
          rows={4}
        />

        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="text-gray-600">Cancel</button>
          <button
            onClick={handleSubmit}
            disabled={sending}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg disabled:opacity-50"
          >
            {sending ? "Sending..." : "Send Kindness"}
          </button>
        </div>
      </div>
    </div>
  );
}

