import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavBar.module.css';

const navLinkClass = ({ isActive }) => {
  return clsx(styles.navLink, isActive && styles.active);
};

export const NavBar = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClass} to="/">
        {t('navBar.home')}
      </NavLink>
      <NavLink className={navLinkClass} to="/projects">
        {t('navBar.projects')}
      </NavLink>
    </nav>
  );
};
