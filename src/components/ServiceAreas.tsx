import { MapPin } from 'lucide-react';

export default function ServiceAreas() {
    const areas = [
        'Georges Hall', 'Bankstown', 'Bass Hill', 'Yagoona', 'Condell Park', 'Chullora',
        'Greenacre', 'Revesby', 'Padstow', 'Panania', 'Milperra'
    ];

    return (
        <section aria-label="Areas We Serve" className="py-24 bg-cream border-t border-navy/5">
            <div className="max-w-5xl mx-auto px-6 md:px-16 text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-aqua/10 text-aqua mb-6">
                    <MapPin size={24} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight">
                    Sydney Service Areas
                </h2>
                <p className="text-lg text-charcoal/70 max-w-2xl mx-auto mb-12">
                    We bring pool care to you anywhere in Sydney. From the Hills to the Shire and everywhere in between, we've got Sydney covered.
                </p>

                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                    {areas.map((suburb, idx) => (
                        <div
                            key={idx}
                            className="bg-white px-4 py-2 rounded-full text-sm font-medium text-navy border border-navy/5 shadow-sm hover:border-aqua transition-colors cursor-default"
                        >
                            {suburb}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
