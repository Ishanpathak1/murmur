import Link from 'next/link';
import ThemeToggle from '@/components/ThemeToggle';
import { useEffect, useState } from 'react';
import { db } from '@/lib/firebase';
import { collection, getDocs, where, query } from 'firebase/firestore';

export default function LandingPage() {
  const [totalReplies, setTotalReplies] = useState(0);

  useEffect(() => {
    const fetchHelpCount = async () => {
      try {
        const q = query(collection(db, 'messages'), where('hasReply', '==', true));
        const snapshot = await getDocs(q);
        setTotalReplies(snapshot.size);
      } catch (error) {
        console.error('[FETCH REPLIES COUNT ERROR]', error);
      }
    };

    fetchHelpCount();
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center p-6">
      <div className="absolute top-4 right-4">
       
      </div>

      <h1 className="text-4xl md:text-6xl font-bold text-center mb-6">Welcome to Murmur</h1>
      <p className="text-lg md:text-xl max-w-2xl text-center mb-6">
        A peaceful place to drop your thoughts anonymously and receive kindness from strangers. One reply per murmur. No conversations. Just support.
      </p>

      <div className="bg-gray-100 dark:bg-gray-800 px-6 py-4 rounded-lg text-center mb-8">
        <p className="text-xl font-semibold">💙 {totalReplies} acts of kindness sent</p>
      </div>

      <Link href="/murmur">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg transition">
          Start Murmuring →
        </button>
      </Link>
    </div>
  );
}
















