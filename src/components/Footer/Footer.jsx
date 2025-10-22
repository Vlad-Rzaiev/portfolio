import { Container } from '../Container/Container';
import { Section } from '../Section/Section';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Section>
          <p>&copy; 2025 Created by Vlad Rzaiev. All rights reserved.</p>
        </Section>
      </Container>
    </footer>
  );
};
