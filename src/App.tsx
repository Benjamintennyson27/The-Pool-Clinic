import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBanner from './components/TrustBanner';
import Features from './components/Features';
import BeforeAfter from './components/BeforeAfter';
import Philosophy from './components/Philosophy';
import Protocol from './components/Protocol';
import Reviews from './components/Reviews';
import ServiceAreas from './components/ServiceAreas';
import Footer from './components/Footer';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>
      <main id="main-content" className="relative bg-cream min-h-screen font-sans text-charcoal selection:bg-aqua selection:text-navy">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <Hero />
        <TrustBanner />
        <Features />
        <BeforeAfter />
        <Philosophy />
        <Protocol />
        <Reviews />
        <ServiceAreas />
        <Contact />
        <Footer />
      </main>
    </>
  );
}


