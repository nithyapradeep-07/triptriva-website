import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import WhatIsTripTriva from '@/components/WhatIsTripTriva';
import About from '@/components/About';
import Experiences from '@/components/Experiences';
import HowItWorks from '@/components/HowItWorks';
import WhyChoose from '@/components/WhyChoose';
import Destinations from '@/components/Destinations';
import Partner from '@/components/Partner';
import DownloadApp from '@/components/DownloadApp';
import Contact from '@/components/Contact';
import FinalCTA from '@/components/FinalCTA';
import { useReveal } from '@/hooks/useReveal';

function App() {
  const containerRef = useReveal<HTMLDivElement>();

  return (
    <div ref={containerRef} className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatIsTripTriva />
        <About />
        <Experiences />
        <HowItWorks />
        <WhyChoose />
        <Destinations />
        <Partner />
        <DownloadApp />
        <FinalCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
