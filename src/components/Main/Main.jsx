import { Container } from '../Container/Container';
import { About } from '../About/About';
import { Skills } from '../Skills/Skills';
import { Experience } from '../Experience/Experience';
import { Projects } from '../Projects/Projects';
import { Contacts } from '../Contacts/Contacts';
import { Hero } from '../Hero/Hero';

export const Main = () => {
  return (
    <main>
      <Container>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Contacts />
      </Container>
    </main>
  );
};
