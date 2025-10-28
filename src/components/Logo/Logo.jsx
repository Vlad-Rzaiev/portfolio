import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import styles from './Logo.module.css';

export const Logo = ({ size = 32, showName = true }) => {
  const reduce = useReducedMotion();

  const draw = (delay = 0) => ({
    hidden: { pathLength: reduce ? 1 : 0, opacity: 1 },
    show: {
      pathLength: 1,
      opacity: 1,
      transition: reduce
        ? { duration: 0 }
        : {
            duration: 3,
            ease: 'linear',
            delay,
            times: [1, 1, 1],
            repeat: Infinity,
            repeatType: 'reverse',
          },
    },
  });

  const fade = {
    hidden: { opacity: 0, y: reduce ? 0 : -6 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: reduce ? 0 : 0.5,
        ease: 'linear',
        delay: reduce ? 0 : 0.1,
      },
    },
  };

  return (
    <div className={styles.wrap} style={{ '--logoSize': `${size}px` }}>
      <Link to="/" className={styles.link} aria-label="Go to home page">
        <motion.svg
          className={styles.svg}
          viewBox="0 0 300 120"
          initial="hidden"
          animate="show"
          aria-label="VR — Vlad Rzaiev"
          role="img"
        >
          <motion.path
            d="M20 15 L70 100 L120 15"
            className={styles.stroke}
            variants={draw(0)}
          />

          <motion.path
            d="M160 15 L160 100"
            className={styles.stroke}
            variants={draw(0.15)}
          />

          <motion.path
            d="M160 15 H210 Q240 15 240 45 Q240 75 210 75 H160"
            className={styles.stroke}
            variants={draw(0.3)}
          />

          <motion.path
            d="M200 75 L245 100"
            className={styles.stroke}
            variants={draw(0.45)}
          />
        </motion.svg>

        {showName && (
          <motion.span
            className={styles.name}
            initial="hidden"
            animate="show"
            variants={fade}
          >
            Vlad Rzaiev
            <span className={styles.tag}>web developer</span>
          </motion.span>
        )}
      </Link>
    </div>
  );
};
