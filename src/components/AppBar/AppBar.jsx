import { Container } from '../Container/Container';
import { Navigation } from '../Navigation/Navigation';
import { ToggleThemeBtn } from '../ToggleThemeBtn/ToggleThemeBtn';
import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header id="home">
      <Container>
        <div className={styles.headerWrap}>
          <Navigation />
          <ToggleThemeBtn />
        </div>
      </Container>
    </header>
  );
};
