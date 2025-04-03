import { v4 as uuidv4 } from 'uuid';

export function getOrCreateUserId() {
  if (typeof window === 'undefined') return null;

  const urlId = new URLSearchParams(window.location.search).get('id');
  const storedId = localStorage.getItem('murmur_id');

  if (urlId && urlId !== storedId) {
    localStorage.setItem('murmur_id', urlId);
    // Optional: clean up the URL
    window.history.replaceState({}, '', '/');
    return urlId;
  }

  if (!storedId) {
    const newId = uuidv4();
    localStorage.setItem('murmur_id', newId);
    return newId;
  }

  return storedId;
}
