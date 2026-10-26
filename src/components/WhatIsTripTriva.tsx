import { Compass, Users, MapPin, Calendar, ArrowUpRight } from 'lucide-react';

export default function WhatIsTripTriva() {
  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative grid background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 orb-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Text content */}
          <div className="section-reveal order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">
                What is TripTriva?
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] mb-6 text-balance">
              One platform for local tourism experiences
            </h2>

            <p className="text-lg text-text-muted leading-relaxed mb-5">
              TripTriva is an online marketplace where travelers can discover and book local tourism
              experiences, activities, adventures, and stays — all in one place. We partner with
              small and local tourism businesses across Kerala and India to bring their offerings online.
            </p>
            <p className="text-text-muted leading-relaxed mb-10">
              From a houseboat cruise in the Kerala backwaters to a guided trek through Munnar's tea
              hills, from a Theyyam performance to a wildlife safari — TripTriva makes it easy to find,
              compare, and book authentic experiences directly from the people who run them.
            </p>

            {/* Stats — creative layout */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {[
                { icon: MapPin, value: 'Kerala', label: 'Launch Region' },
                { icon: Compass, value: '9', label: 'Experience Types' },
                { icon: Users, value: 'Local', label: 'Tourism Partners' },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="group relative rounded-2xl bg-bg-alt/80 p-5 text-center border border-gray-100/80 card-hover overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-white/20 transition-colors mx-auto mb-2.5">
                      <stat.icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <div className="font-display text-xl font-extrabold text-primary group-hover:text-white transition-colors">{stat.value}</div>
                    <div className="text-[11px] text-text-muted group-hover:text-white/80 transition-colors mt-0.5 font-medium">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="section-reveal order-1 lg:order-2 relative">
            <div className="relative grid grid-cols-2 gap-4">
              {/* Main image */}
              <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/20 group">
                <img
                  src="https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=800&w=1000"
                  alt="Kerala houseboat on backwaters — [PLACEHOLDER IMAGE]"
                  className="w-full h-[340px] lg:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                {/* Image label badge */}
                <div className="absolute top-4 right-4 glass rounded-full px-3 py-1.5">
                  <span className="text-white text-xs font-semibold">Kerala Backwaters</span>
                </div>
              </div>

              {/* Secondary images */}
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/15 group">
                <img
                  src="https://images.pexels.com/photos/37633371/pexels-photo-37633371.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Munnar tea gardens — [PLACEHOLDER IMAGE]"
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-primary/15 group">
                <img
                  src="https://images.pexels.com/photos/39335260/pexels-photo-39335260.jpeg?auto=compress&cs=tinysrgb&h=400&w=400"
                  alt="Local cultural experience — [PLACEHOLDER IMAGE]"
                  className="w-full h-44 object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating booking card */}
            <div className="absolute -bottom-8 -left-4 sm:-left-8 hidden sm:block float-slow z-20">
              <div className="rounded-2xl bg-white p-5 shadow-2xl shadow-primary/20 border border-gray-100/50 max-w-[260px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow-primary">
                    <Calendar className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <span className="font-display text-sm font-bold text-primary block leading-tight">Instant Booking</span>
                    <span className="text-xs text-text-muted">Confirmed in seconds</span>
                  </div>
                </div>
                <p className="text-xs text-text-muted leading-relaxed">
                  Pick your date, time, and slot — confirmed in seconds.
                </p>
              </div>
            </div>

            {/* Floating arrow decoration */}
            <div className="absolute -top-6 -right-4 hidden sm:flex h-14 w-14 items-center justify-center rounded-2xl bg-accent shadow-glow-accent float-slow" style={{ animationDelay: '1.5s' }}>
              <ArrowUpRight className="h-6 w-6 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
