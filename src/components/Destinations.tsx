import { MapPin, ArrowRight } from 'lucide-react';
import { featuredDestinations } from '@/data/content';

export default function Destinations() {
  return (
    <section id="destinations" className="py-24 lg:py-32 bg-bg-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 orb-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">Featured Destinations</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] text-balance">
            Start with Kerala, explore beyond
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed text-balance">
            We're launching across Kerala's most beloved destinations, with plans to expand to major
            tourist spots across India. Here's where TripTriva begins.
          </p>
        </div>

        {/* Destinations grid — creative asymmetric layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:auto-rows-[280px]">
          {featuredDestinations.map((dest, i) => {
            // Create a masonry-like effect with varying row spans
            const spanClass = i === 0 || i === 3 ? 'lg:row-span-2' : '';
            const heightClass = spanClass ? 'h-full' : 'h-64 lg:h-full';

            return (
              <div
                key={dest.name}
                className={`section-reveal group relative overflow-hidden rounded-[1.75rem] shadow-card card-hover cursor-pointer ${spanClass}`}
                style={{ transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className={`relative ${heightClass} overflow-hidden`}>
                  <img
                    src={dest.image}
                    alt={`${dest.name} — [PLACEHOLDER IMAGE]`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-all duration-500 group-hover:from-primary/95 group-hover:via-primary/50" />

                  {/* Top badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full glass px-3 py-1.5 text-xs font-semibold text-white">
                      <MapPin className="h-3 w-3 text-accent" />
                      {dest.subtitle}
                    </span>
                  </div>

                  {/* Bottom content — always visible, expands on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-display text-2xl font-bold text-white mb-1 drop-shadow-lg">
                      {dest.name}
                    </h3>
                    <p className="text-white/80 text-sm leading-relaxed max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100 group-hover:mb-3">
                      {dest.description}
                    </p>
                    <div className="inline-flex items-center gap-1.5 text-accent text-sm font-bold opacity-0 transition-all duration-300 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0">
                      Explore
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="section-reveal mt-16 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-text-muted/20" />
          <p className="text-text-muted text-sm text-center font-medium">
            More destinations across India coming soon. [DESTINATION IMAGES ARE PLACEHOLDERS]
          </p>
          <div className="h-px w-12 bg-text-muted/20" />
        </div>
      </div>
    </section>
  );
}
