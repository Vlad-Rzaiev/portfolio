import { useTranslation } from 'react-i18next';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <a className={styles.link} href="#home">
        {t('nav.home')}
      </a>

      <a className={styles.link} href="#about">
        {t('nav.about')}
      </a>

      <a className={styles.link} href="#skills">
        {t('nav.skills')}
      </a>

      <a className={styles.link} href="#experience">
        {t('nav.experience')}
      </a>

      <a className={styles.link} href="#projects">
        {t('nav.projects')}
      </a>

      <a className={styles.link} href="#contacts">
        {t('nav.contacts')}
      </a>
    </nav>
  );
};
