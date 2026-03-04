import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-anim', {
        y: 40,
        opacity: 0,
        duration: 1.2,
        stagger: 0.08,
        ease: 'power3.out',
        delay: 0.2,
      });
    }, container);
    return () => ctx.revert();
  }, { scope: container });

  return (
    <section
      ref={container}
      aria-label="Hero — The Pool Clinic"
      className="relative h-[100dvh] w-full overflow-hidden flex items-end pb-24 md:pb-32 px-6 md:px-16"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        role="img"
        aria-label="Crystal clear turquoise swimming pool with sunlight reflections"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2000&auto=format&fit=crop")',
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-navy via-navy/60 to-transparent" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-white">
        <div className="hero-anim mb-4 flex items-center gap-3">
          <span className="bg-aqua/20 text-aqua border border-aqua/30 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">
            Davey Master Dealer
          </span>
          <span className="flex text-aqua" aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
          </span>
          <span className="text-sm font-bold text-cream">4.1 Star Rated</span>
        </div>

        <h1 className="flex flex-col gap-2 mt-4">
          <span className="hero-anim block font-sans font-bold text-3xl md:text-5xl tracking-tight text-aqua">
            The Pool Clinic
          </span>
          <span className="hero-anim block font-serif italic text-6xl md:text-8xl lg:text-9xl leading-[0.9] tracking-tight">
            Georges Hall.
          </span>
        </h1>

        <p className="hero-anim mt-8 max-w-xl text-lg md:text-xl text-cream/80 font-medium">
          Professional pool mobile service, expert pump repairs, and a fully stocked retail showroom <span className="text-white">right here in your local neighbourhood.</span>
        </p>

        <div className="hero-anim mt-10" id="quote">
          <a
            href="tel:0297919700"
            className="btn-magnetic bg-aqua text-navy px-8 py-4 text-lg"
            aria-label="Call us for a free pool care quote"
          >
            Call Us (02 9791 9700)
          </a>
        </div>
      </div>
    </section>
  );
}

