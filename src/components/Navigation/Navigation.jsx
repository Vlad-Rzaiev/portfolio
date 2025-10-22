import styles from './Navigation.module.css';

export const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <a className={styles.link} href="#home">
        Home
      </a>

      <a className={styles.link} href="#about">
        About
      </a>

      <a className={styles.link} href="#skills">
        Skills
      </a>

      <a className={styles.link} href="#experience">
        Experience
      </a>

      <a className={styles.link} href="#projects">
        Projects
      </a>

      <a className={styles.link} href="#contacts">
        Contacts
      </a>
    </nav>
  );
};
