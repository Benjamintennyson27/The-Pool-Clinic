import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function BeforeAfter() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        gsap.from('.gallery-item', {
            scrollTrigger: {
                trigger: container.current,
                start: 'top 75%',
            },
            y: 40,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: 'power3.out',
        });
    }, { scope: container });

    const recoveries = [
        {
            suburb: 'Georges Hall',
            time: '48 Hours',
            image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=1200&auto=format&fit=crop', // Beautiful clean pool
        },
        {
            suburb: 'Bankstown',
            time: '3 Days',
            image: 'https://images.unsplash.com/photo-1562778612-e1e0cda9915c?q=80&w=1200&auto=format&fit=crop', // A beautiful pool image
        }
    ];

    return (
        <section id="recovery" ref={container} className="py-24 md:py-32 px-6 md:px-16 bg-white overflow-hidden" aria-label="Green Pool Recovery Gallery">
            <div className="max-w-7xl mx-auto">
                <div className="mb-16 md:mb-24 text-center max-w-2xl mx-auto">
                    <span className="bg-aqua/10 text-navy px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6 inline-block">
                        Visual Proof
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                        Green Pool Recovery
                    </h2>
                    <p className="text-lg text-charcoal/70">
                        We don't just maintain clean pools; we bring dead ones back to life. See our recent transformations across Sydney.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {recoveries.map((item, idx) => (
                        <div key={idx} className="gallery-item flex flex-col gap-6">
                            <div className="relative aspect-video rounded-3xl overflow-hidden bg-navy">
                                {/* UNDERLYING AFTER IMAGE */}
                                <img src={item.image} alt="Clean pool after recovery" className="absolute inset-0 w-full h-full object-cover" />

                                <div className="absolute top-4 right-4 bg-aqua text-navy px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-10 shadow-lg">
                                    After
                                </div>

                                {/* BEFORE MASK OVERLAY via clip-path */}
                                <img
                                    src={item.image}
                                    alt="Green pool before recovery"
                                    style={{ clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)' }}
                                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.7] sepia-[0.4] hue-rotate-[60deg] saturate-[1.8] blur-[1px] z-10"
                                />

                                <div className="absolute top-4 left-4 bg-navy/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg z-20">
                                    Before
                                </div>

                                {/* Divider Line */}
                                <div className="absolute top-0 bottom-0 left-1/2 w-1 -ml-[2px] bg-aqua z-20 shadow-[0_0_16px_rgba(0,0,0,0.5)]"></div>
                            </div>

                            <div className="flex justify-between items-center px-2">
                                <div className="font-bold text-navy text-xl">{item.suburb} Residence</div>
                                <div className="font-mono text-xs text-aqua bg-aqua/10 px-3 py-1 rounded-full tracking-widest uppercase">
                                    Time: {item.time}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center gallery-item">
                    <a href="tel:0297919700" className="btn-magnetic bg-navy text-white px-8 py-4 text-base hidden md:inline-flex">
                        Have a green pool? Call us now
                    </a>
                </div>
            </div>
        </section>
    );
}
