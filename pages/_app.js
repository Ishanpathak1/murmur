import { useEffect } from 'react';
import { initTheme } from '@/lib/theme';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    initTheme(); // 👈 this ensures correct class on <html>
  }, []);

  return <Component {...pageProps} />;
}

