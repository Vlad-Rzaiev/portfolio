import { Container } from '../../components/Container/Container';
import { About } from '../../components/About/About';
import { Skills } from '../../components/Skills/Skills';
import { Experience } from '../../components/Experience/Experience';
import { Projects } from '../../components/Projects/Projects';
import { Contacts } from '../../components/Contacts/Contacts';
import { Hero } from '../../components/Hero/Hero';

export const HomePage = () => {
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
