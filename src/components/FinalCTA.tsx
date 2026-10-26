import { ArrowRight, Handshake } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 bg-bg-alt relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-30" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="section-reveal relative rounded-[2.5rem] overflow-hidden noise-overlay">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="https://images.pexels.com/photos/36998153/pexels-photo-36998153.jpeg?auto=compress&cs=tinysrgb&h=600&w=1400"
              alt="Kerala backwaters landscape — [PLACEHOLDER IMAGE]"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-brand-deep opacity-92" />
          </div>

          {/* Ambient orbs */}
          <div className="absolute top-10 right-10 w-60 h-60 bg-accent/15 orb-glow" />
          <div className="absolute bottom-10 left-10 w-72 h-72 bg-white/5 orb-glow" />

          {/* Content */}
          <div className="relative z-10 px-6 py-20 sm:px-12 sm:py-24 lg:px-20 lg:py-28 text-center">
            {/* Decorative top bar */}
            <div className="inline-flex items-center gap-2 mb-8">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent font-bold text-xs uppercase tracking-[0.18em]">Start Your Journey</span>
              <div className="h-px w-8 bg-accent" />
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] mb-6 text-balance">
              Ready to experience Kerala differently?
            </h2>
            <p className="text-lg text-white/85 leading-relaxed max-w-2xl mx-auto mb-12 text-balance">
              Discover authentic local experiences or list your tourism business on TripTriva.
              The journey starts here.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#experiences"
                className="btn-magnetic group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-accent px-8 py-4 text-base font-bold text-text-dark shadow-2xl shadow-accent/30 transition-all"
              >
                Explore Experiences
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
              </a>
              <a
                href="#partner"
                className="btn-magnetic group inline-flex items-center justify-center gap-2.5 rounded-2xl glass border-white/25 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/15"
              >
                <Handshake className="h-5 w-5" />
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
