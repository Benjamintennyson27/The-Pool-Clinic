import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  { name: 'Nick Begetis', suburb: 'Georges Hall', text: 'My clients & I couldn’t be happier with the service from the guys at The Pool Clinic. Highly recommend & always available, his quality of work is top notch & you will not be disappointed.' },
  { name: 'Matthew Cragg', suburb: 'Bankstown', text: 'You will never go past The Pool Clinic for their professionalism, courtesy and quality of service. I would never use another pool tech. Support your local businesses that are doing the right thing by consumers.' },
  { name: 'Roger Alam', suburb: 'Yagoona', text: 'We couldn\'t be happier with the service from The Pool Clinic. They look after our pool regularly and have been absolutely fantastic. They have provided us with great advice on how to keep our pool in top shape...' },
  { name: 'Mona Fahmy', suburb: 'Condell Park', text: 'I have been dealing with them for a couple of years now. Always does an excellent job. Very responsive and very knowledgeable with all things pool related. They are very honest and reliable.' },
  { name: 'Rashed Barakat', suburb: 'Bass Hill', text: 'I’ve had bad experiences with pool service companies in the past, but The Pool Clinic completely changed my mind. They show up on time, communicate clearly, and always do a fantastic job.' },
  { name: 'Venetia Maher', suburb: 'Chullora', text: 'The team at The Pool Clinic is trustworthy, reliable, and does a fantastic job maintaining our pool. We’re on a monthly service plan and it’s such a relief to leave everything in their capable hands.' },
];

export default function Reviews() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const scrollWidth = scrollRef.current?.scrollWidth || 0;
    const clientWidth = scrollRef.current?.clientWidth || 0;

    gsap.to(scrollRef.current, {
      x: -(scrollWidth - clientWidth),
      ease: 'none',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: containerRef });

  return (
    <section id="reviews" ref={containerRef} aria-label="Client reviews and testimonials" className="py-32 bg-navy text-white overflow-hidden">
      <div className="px-6 md:px-16 mb-16 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <h2 className="text-4xl md:text-6xl font-serif italic mb-4">Client Feedback.</h2>
          <p className="text-cream/60 font-sans max-w-md">
            Don't just take our word for it. Read what families across Sydney have to say about our premium care.
          </p>
        </div>
        <div className="flex items-center gap-2" aria-label="5 out of 5 stars Google rating">
          <div className="flex text-aqua" aria-hidden="true">
            <Star key={0} size={24} fill="currentColor" />
            <Star key={1} size={24} fill="currentColor" />
            <Star key={2} size={24} fill="currentColor" />
            <Star key={3} size={24} fill="currentColor" />
            <Star key={4} size={24} stroke="currentColor" fill="none" />
          </div>
          <span className="font-mono text-sm tracking-widest ml-2">4.1 GOOGLE RATING</span>
        </div>
      </div>

      <div className="pl-6 md:pl-16">
        <div ref={scrollRef} className="flex gap-6 w-max pr-16 pb-12">
          {reviews.map((review, i) => (
            <article
              key={i}
              className="w-[350px] md:w-[450px] bg-white/5 border border-white/10 rounded-[2rem] p-8 flex flex-col gap-6 backdrop-blur-sm"
              aria-label={`Review by ${review.name} from ${review.suburb}`}
            >
              <div className="flex text-aqua" aria-hidden="true">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
              </div>
              <p className="text-lg text-cream/90 leading-relaxed flex-grow">
                "{review.text}"
              </p>
              <div className="mt-auto pt-6 border-t border-white/10 flex justify-between items-center">
                <span className="font-bold font-sans">{review.name}</span>
                <span className="font-mono text-xs text-aqua uppercase tracking-widest">{review.suburb}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
