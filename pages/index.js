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
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-4 right-4 z-10">
        
      </div>

      <div className="z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">Welcome to Murmur</h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6 opacity-90">
          A digital campfire for your thoughts. Share what&apos;s on your mind — anonymously. Someone out there might send you kindness.
        </p>

        <div className="bg-white/10 border border-white/20 px-6 py-4 rounded-lg backdrop-blur-sm mb-8">
          <p className="text-xl font-semibold">💙 {totalReplies} kindness replies whispered</p>
        </div>

        <Link href="/murmur">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg text-lg transition font-medium shadow-lg">
            Start Murmuring &rarr;
          </button>
        </Link>
      </div>

      {/* Glow effect */}
    </div>
  );
}

















