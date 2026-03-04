import { CheckCircle2, ShieldCheck, BadgeCheck, ThumbsUp } from 'lucide-react';

export default function TrustBanner() {
    const trustSignals = [
        { icon: ShieldCheck, text: 'Davey Master Dealer' },
        { icon: BadgeCheck, text: 'Physical Showroom' },
        { icon: ThumbsUp, text: 'Expert Mobile Service' },
        { icon: CheckCircle2, text: 'Local Professionals' },
    ];

    return (
        <section aria-label="Trust Signals" className="bg-white border-y border-navy/5 py-6">
            <div className="max-w-7xl mx-auto px-6 md:px-16 flex flex-wrap justify-center md:justify-between items-center gap-6 md:gap-4">
                {trustSignals.map((signal, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-navy">
                        <signal.icon className="w-5 h-5 text-aqua" aria-hidden="true" />
                        <span className="font-sans font-medium text-sm tracking-tight">{signal.text}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}
