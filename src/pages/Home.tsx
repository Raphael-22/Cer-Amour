import Hero from '../components/Hero';
import StatsBar from '../components/StatsBar';
import Story from '../components/Story';
import Collection from '../components/Collection';
import Process from '../components/Process';
import Philosophy from '../components/Philosophy';
import InstagramWall from '../components/InstagramWall';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <StatsBar />
      <Story />
      <Collection />
      <Process />
      <Philosophy />
      <InstagramWall />
      <Contact />
    </main>
  );
}
