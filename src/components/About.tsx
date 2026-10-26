import { Target, Eye, AlertCircle, CheckCircle2, ArrowRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 lg:py-32 bg-bg-alt relative overflow-hidden">
      {/* Decorative dotted line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px dotted-line opacity-30 hidden lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="section-reveal text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">About TripTriva</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] text-balance">
            Bringing local tourism into the digital world
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed text-balance">
            TripTriva is a tourism technology company based in Kerala, India. We build the digital
            bridge between travelers and the incredible local tourism experiences that have
            traditionally lived offline.
          </p>
        </div>

        {/* Mission & Vision — overlapping cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Mission card — gradient */}
          <div className="section-reveal relative rounded-[2rem] bg-gradient-brand p-8 lg:p-12 text-white card-hover overflow-hidden group">
            {/* Decorative blob */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-white/10 blob" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl glass mb-6">
                <Target className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/90 text-lg leading-relaxed">
                Make discovering and booking authentic travel experiences simple and accessible.
              </p>
              <div className="mt-6 flex items-center gap-2 text-white/60 text-sm font-medium">
                <span>What drives us</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {/* Vision card — clean white */}
          <div className="section-reveal relative rounded-[2rem] bg-white p-8 lg:p-12 card-hover border border-gray-100 shadow-card overflow-hidden group" style={{ transitionDelay: '0.1s' }}>
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-secondary/5 blob" />
            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary/10 mb-6">
                <Eye className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="font-display text-2xl font-bold text-primary mb-3">Our Vision</h3>
              <p className="text-text-muted text-lg leading-relaxed">
                Build India's largest marketplace for local tourism experiences, connecting travelers
                with small and local tourism businesses.
              </p>
              <div className="mt-6 flex items-center gap-2 text-secondary/60 text-sm font-medium">
                <span>Where we're heading</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Problem & Solution — split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Problem */}
          <div className="section-reveal relative rounded-[2rem] border border-red-100/60 bg-white p-8 lg:p-10 overflow-hidden group card-hover">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50">
                  <AlertCircle className="h-6 w-6 text-red-500" />
                  <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-[10px] font-bold">!</div>
                </div>
                <h3 className="font-display text-xl font-bold text-text-dark">The Problem</h3>
              </div>
              <p className="text-text-muted leading-relaxed text-base">
                Local tourism and activity providers still rely heavily on offline bookings, phone calls,
                travel agents, and fragmented availability. Travelers struggle to discover and compare
                authentic experiences, while small tourism businesses miss out on customers they can't
                reach online.
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="section-reveal relative rounded-[2rem] border border-primary/15 bg-white p-8 lg:p-10 overflow-hidden group card-hover">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-4 mb-5">
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                  <div className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-white text-[10px] font-bold">✓</div>
                </div>
                <h3 className="font-display text-xl font-bold text-primary">Our Solution</h3>
              </div>
              <p className="text-text-muted leading-relaxed text-base">
                TripTriva brings these experiences onto one digital platform for easier discovery and
                booking. Travelers can browse, compare, and book in a few taps, while local providers
                get a simple way to reach more customers and manage their bookings — all in one place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
