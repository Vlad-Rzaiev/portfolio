import { useEffect, useState } from 'react';
import clsx from 'clsx';
import Sun from '../../assets/themePng/sun.png';
import Moon from '../../assets/themePng/moon.png';
import styles from './ToggleThemeBtn.module.css';

export const ToggleThemeBtn = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    const initialTheme = theme ? theme === 'dark' : false;

    const root = document.documentElement;
    root.classList.toggle('dark', initialTheme);
    root.classList.toggle('light', !initialTheme);
    setIsDark(initialTheme);

    root.classList.add('theme-ready');
  }, []);

  const handleToggleClick = () => {
    const next = !isDark;
    const root = document.documentElement;

    root.classList.toggle('dark', next);
    root.classList.toggle('light', !next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button
      className={clsx(styles.btn, isDark ? styles.nightSky : styles.daySky)}
      onClick={handleToggleClick}
      aria-pressed={isDark}
    >
      <span className={styles.iconWrap}>
        <img src={Sun} alt="sun" className={clsx(styles.icon, styles.sun)} />
        <img src={Moon} alt="moon" className={clsx(styles.icon, styles.moon)} />
      </span>
    </button>
  );
};
