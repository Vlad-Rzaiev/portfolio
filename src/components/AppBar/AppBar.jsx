import { Container } from '../Container/Container';
import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';
import { ToggleThemeBtn } from '../ToggleThemeBtn/ToggleThemeBtn';
import { LangSwitch } from '../LangSwitch/LangSwitch';
import styles from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header id="home">
      <Container>
        <div className={styles.headerWrap}>
          <Logo />
          <NavBar />
          <ToggleThemeBtn />
          <LangSwitch />
        </div>
      </Container>
    </header>
  );
};
