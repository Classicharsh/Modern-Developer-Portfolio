import { useEffect } from 'react';
import Lenis from 'lenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import FeaturedProjects from './components/FeaturedProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden">
      <CustomCursor />
      <Background3D />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Education />
      <FeaturedProjects />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
