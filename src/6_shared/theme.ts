import { atom } from 'nanostores';

const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
export const $theme = atom<'light' | 'dark'>(stored || 'light');

$theme.listen((theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  localStorage.setItem('theme', theme);
});
