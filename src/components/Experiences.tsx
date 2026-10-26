import {
  Sailboat, Waves, Mountain, Sparkles, Trees, Camera,
  Compass, BedDouble, MapPin, CheckCircle2, Clock, ArrowUpRight,
} from 'lucide-react';
import { experienceCategories } from '@/data/content';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Sailboat, Waves, Mountain, Sparkles, Trees, Camera,
  Compass, BedDouble, MapPin,
};

export default function Experiences() {
  const available = experienceCategories.filter((c) => c.status === 'available');
  const planned = experienceCategories.filter((c) => c.status === 'planned');

  return (
    <section id="experiences" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 orb-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="section-reveal max-w-3xl mx-auto mb-20 text-center">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">What We Offer</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] text-balance">
            Experiences for every kind of traveler
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed text-balance">
            From serene backwater cruises to thrilling mountain treks, TripTriva covers a wide range
            of tourism experiences. We're launching with our first set of categories and expanding rapidly.
          </p>
        </div>

        {/* Available Now */}
        <div className="section-reveal mb-20">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-brand shadow-glow-primary">
              <CheckCircle2 className="h-5 w-5 text-white" />
            </span>
            <h3 className="font-display text-2xl font-bold text-primary">Available Now</h3>
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{available.length} live</span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {available.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <div
                  key={cat.name}
                  className="group relative overflow-hidden rounded-[1.75rem] bg-white shadow-card border border-gray-100/60 card-hover"
                  style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.name} — [PLACEHOLDER IMAGE]`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                    {/* Icon badge */}
                    <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl glass shadow-xl">
                      {Icon && <Icon className="h-5 w-5 text-white" />}
                    </div>

                    {/* Status badge */}
                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-ping" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                      Live
                    </span>

                    {/* Category name on image */}
                    <h4 className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white drop-shadow-lg">
                      {cat.name}
                    </h4>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-sm text-text-muted leading-relaxed">{cat.description}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      Explore experiences
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Planned Expansion */}
        <div className="section-reveal">
          <div className="flex items-center gap-3 mb-8">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary shadow-lg shadow-secondary/30">
              <Clock className="h-5 w-5 text-white" />
            </span>
            <h3 className="font-display text-2xl font-bold text-secondary">Planned Expansion</h3>
            <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-bold text-secondary">{planned.length} upcoming</span>
            <div className="h-px flex-1 bg-gradient-to-r from-secondary/20 to-transparent" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {planned.map((cat, i) => {
              const Icon = iconMap[cat.icon];
              return (
                <div
                  key={cat.name}
                  className="group relative overflow-hidden rounded-[1.75rem] bg-white shadow-card border border-gray-100/60 card-hover"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={cat.image}
                      alt={`${cat.name} — [PLACEHOLDER IMAGE]`}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[40%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/15 to-transparent" />

                    <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl glass shadow-xl">
                      {Icon && <Icon className="h-5 w-5 text-white" />}
                    </div>

                    <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                      <Clock className="h-3 w-3" />
                      Coming Soon
                    </span>

                    <h4 className="absolute bottom-4 left-4 font-display text-2xl font-bold text-white drop-shadow-lg">
                      {cat.name}
                    </h4>
                  </div>

                  <div className="p-6">
                    <p className="text-sm text-text-muted leading-relaxed">{cat.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footnote */}
        <div className="section-reveal mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-text-muted/20" />
          <p className="text-text-muted text-sm text-center font-medium">
            Not every category is live yet — we're rolling out experiences in phases, starting with Kerala.
          </p>
          <div className="h-px w-12 bg-text-muted/20" />
        </div>
      </div>
    </section>
  );
}
