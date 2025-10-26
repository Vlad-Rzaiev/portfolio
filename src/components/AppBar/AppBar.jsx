import { Container } from '../Container/Container';
import { LangSwitch } from '../LangSwitch/LangSwitch';
import { Logo } from '../Logo/Logo';
import { Navigation } from '../Navigation/Navigation';
import { ToggleThemeBtn } from '../ToggleThemeBtn/ToggleThemeBtn';
import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header id="home">
      <Container>
        <div className={styles.headerWrap}>
          <Logo />
          <Navigation />
          <ToggleThemeBtn />
          <LangSwitch />
        </div>
      </Container>
    </header>
  );
};
