import { useEffect, useRef, useState } from 'react';
import { Lorem } from '../Lorem/Lorem';
import { Section } from '../Section/Section';
import { InPageNav } from '../InPageNav/InPageNav';
import styles from './Hero.module.css';

export const Hero = () => {
  const [navOpen, setNavOpen] = useState(false);

  const pageNavRef = useRef(null);

  useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') setNavOpen(false);
    };

    const onPointerDown = e => {
      if (!pageNavRef.current) return;

      if (pageNavRef.current.contains(e.target)) return;

      if (e.target.closest('[data-nav-toggle]')) return;

      setNavOpen(false);
    };

    if (navOpen) {
      document.addEventListener('keydown', onKey);
      document.addEventListener('mousedown', onPointerDown);
      document.addEventListener('touchstart', onPointerDown, { passive: true });

      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      document.body.style.overflow = '';
    };
  }, [navOpen]);

  return (
    <Section>
      <div
        className={styles.decorMenu}
        type="button"
        data-nav-toggle
        aria-label="Page Nav"
        onClick={() => setNavOpen(prev => !prev)}
      >
        <InPageNav />
      </div>

      <div className={styles.content}>
        <h1>Hero section</h1>
        <Lorem />
      </div>
    </Section>
  );
};
