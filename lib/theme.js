export function applyTheme(theme) {
    if (typeof window === 'undefined') return;
  
    const root = document.documentElement;
  
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }
  
  export function getSavedTheme() {
    if (typeof window === 'undefined') return null;
    return localStorage.getItem('theme');
  }
  
  export function initTheme() {
    if (typeof window === 'undefined') return;
  
    const saved = getSavedTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
    const theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);
  }
  
  