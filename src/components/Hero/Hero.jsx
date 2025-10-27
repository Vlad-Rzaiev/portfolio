import { Lorem } from '../Lorem/Lorem';
import { Section } from '../Section/Section';
import { InPageNav } from '../InPageNav/InPageNav';

export const Hero = () => {
  return (
    <Section>
      <InPageNav />
      <h1>Hero section</h1>
      <Lorem />
    </Section>
  );
};
