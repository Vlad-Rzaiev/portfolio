import { Lorem } from '../Lorem/Lorem';
import { Section } from '../Section/Section';
import { InPageNav } from '../InPageNav/InPageNav';
import styles from './Hero.module.css';

export const Hero = () => {
  return (
    <Section>
      <div className={styles.heroWrap}>
        <div className={styles.sideNav}>
          <InPageNav />
        </div>

        <div className={styles.content}>
          <h1>Hero section</h1>
          <Lorem />
        </div>
      </div>
    </Section>
  );
};
