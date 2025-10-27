import { useTranslation } from 'react-i18next';
import { inPageNavItems } from '../../constants';
import styles from './InPageNav.module.css';

export const InPageNav = () => {
  const { t } = useTranslation();

  return (
    <nav className={styles.nav}>
      <ul className={styles.list}>
        {inPageNavItems.map(({ id, href, label }) => (
          <li key={id}>
            <a className={styles.link} href={href}>
              {t(label)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
