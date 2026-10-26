import { ArrowRight, Handshake, Sparkles, MapPin, Star, Waves } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/34588372/pexels-photo-34588372.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1920"
          alt="Kerala backwaters with houseboat — [HERO IMAGE PLACEHOLDER]"
          className="h-full w-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-brand opacity-88" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />
        {/* Decorative orbs */}
        <div className="absolute top-1/4 right-10 w-80 h-80 bg-accent/25 orb-glow" />
        <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/20 orb-glow" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-28 right-[8%] hidden xl:block float-slow z-10">
        <div className="glass rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/30">
              <Star className="h-5 w-5 text-accent" fill="currentColor" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">4.9 Rating</div>
              <div className="text-white/60 text-xs">Verified reviews</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-32 right-[12%] hidden xl:block z-10" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '1s' }}>
        <div className="glass rounded-2xl p-4 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/30">
              <Waves className="h-5 w-5 text-secondary" />
            </div>
            <div>
              <div className="text-white font-bold text-sm">9 Categories</div>
              <div className="text-white/60 text-xs">Live & expanding</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full pt-24 pb-20">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2.5 mb-8 animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <Sparkles className="h-4 w-4 text-accent" />
            <span className="text-white text-sm font-medium">Launching in Kerala, expanding across India</span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.05] tracking-tight animate-fade-in-up">
            Discover. Book.
            <br />
            <span className="relative inline-block">
              <span className="text-accent">Experience.</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 300 12" fill="none">
                <path d="M2 8C50 3 150 3 298 8" stroke="#F2994A" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-8 text-lg sm:text-xl text-white/85 leading-relaxed max-w-2xl animate-fade-in-up text-balance" style={{ animationDelay: '0.15s' }}>
            Discover and book authentic travel experiences, activities, adventures and stays
            in one place. TripTriva connects you with local tourism businesses across Kerala and India.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
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

          {/* Feature pills */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 animate-fade-in" style={{ animationDelay: '0.5s' }}>
            {[
              { icon: MapPin, label: '9 Experience Categories' },
              { icon: Sparkles, label: 'Verified Local Providers' },
              { icon: ArrowRight, label: 'Instant Booking' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2.5 text-white/75 text-sm">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10">
                  <item.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="scroll-indicator flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs font-medium uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/50 to-transparent" />
    </section>
  );
}
