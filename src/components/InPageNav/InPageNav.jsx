import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { inPageNavItems } from '../../constants';
import styles from './InPageNav.module.css';

export const InPageNav = ({ isOpen, onClose, pageNavRef }) => {
  const { t } = useTranslation();
  const firstLinkRef = useRef(null);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth' });
    onClose?.();
  };

  return (
    <div
      className={`${styles.pageNav} ${isOpen ? styles.open : ''}`}
      ref={pageNavRef}
    >
      <nav className={styles.nav}>
        <ul className={styles.list}>
          {inPageNavItems.map(({ id, href, label }, idx) => (
            <li key={id}>
              <a
                className={styles.link}
                href={href}
                ref={idx === 0 ? firstLinkRef : null}
                onClick={e => handleLinkClick(e, href)}
              >
                {t(label)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
