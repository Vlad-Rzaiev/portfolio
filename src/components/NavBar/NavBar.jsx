import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import styles from './NavBar.module.css';

const navLinkClass = ({ isActive }) => {
  return clsx(styles.navLink, isActive && styles.active);
};

export const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <NavLink className={navLinkClass} to="/">
        Home
      </NavLink>
      <NavLink className={navLinkClass} to="/projects">
        Projects
      </NavLink>
    </nav>
  );
};
