import styles from './Section.module.css';

export const Section = ({ children, id }) => {
  return (
    <section className={styles.section} id={id}>
      {children}
    </section>
  );
};
