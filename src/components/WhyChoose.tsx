import {
  Search, ShieldCheck, CalendarCheck, Users, Star, Smartphone,
} from 'lucide-react';
import { whyChooseTripTriva } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, ShieldCheck, CalendarCheck, Users, Star, Smartphone,
};

export default function WhyChoose() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 orb-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">Why TripTriva</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] text-balance">
            Built for trust, designed for simplicity
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed text-balance">
            We obsess over making every step — from discovery to experience — smooth, transparent,
            and genuinely local.
          </p>
        </div>

        {/* Bento grid — asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseTripTriva.map((item, i) => {
            const Icon = iconMap[item.icon];
            // Make the first card span 2 columns on large screens for bento effect
            const isFeatured = i === 0;
            return (
              <div
                key={item.title}
                className={`section-reveal group relative rounded-[1.75rem] p-8 card-hover overflow-hidden ${
                  isFeatured
                    ? 'lg:col-span-2 bg-gradient-brand text-white shadow-glow-primary'
                    : 'bg-white border border-gray-100/60 shadow-card'
                }`}
                style={{ transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Decorative blob on featured card */}
                {isFeatured && (
                  <div className="absolute -bottom-16 -right-16 w-56 h-56 bg-white/8 blob" />
                )}

                <div className="relative">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 ${
                      isFeatured
                        ? 'glass'
                        : 'bg-gradient-brand shadow-glow-primary'
                    }`}
                  >
                    {Icon && <Icon className="h-7 w-7 text-white" />}
                  </div>
                  <h3 className={`font-display text-xl font-bold mb-3 ${isFeatured ? 'text-white' : 'text-primary'}`}>
                    {item.title}
                  </h3>
                  <p className={`leading-relaxed text-base ${isFeatured ? 'text-white/85' : 'text-text-muted'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Corner accent on non-featured cards */}
                {!isFeatured && (
                  <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/8" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
