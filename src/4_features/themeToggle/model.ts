import { $theme } from 'shared/theme';

document.documentElement.classList.toggle('dark', $theme.get() === 'dark');

$theme.subscribe((theme) => {
  document.documentElement.classList.toggle('dark', theme === 'dark');
});

export function toggleTheme() {
  $theme.set($theme.get() === 'light' ? 'dark' : 'light');
}
