import { FiSun } from 'react-icons/fi';
import { FaMoon } from 'react-icons/fa';
import styles from './ToggleThemeBtn.module.css';

export const ToggleThemeBtn = () => {
  return (
    <button className={styles.btn}>
      <FiSun className={styles.sun} />
      <FaMoon className={styles.moon} />
    </button>
  );
};
