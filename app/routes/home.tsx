import { Header } from '~/components/Header';
import { HeroSection } from '~/components/HeroSection';
import { Container } from '~/components/ui/container';

export default function Home() {
  return (
    <Container>
      <Header />
      <HeroSection />
    </Container>
  );
}
