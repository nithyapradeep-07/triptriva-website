import { Smartphone, Apple, Play, Bell, CalendarCheck, MapPin } from 'lucide-react';

export default function DownloadApp() {
  return (
    <section id="download-app" className="py-24 lg:py-32 relative overflow-hidden bg-gradient-brand-deep">
      {/* Ambient glows */}
      <div className="absolute inset-0">
        <div className="absolute top-16 right-16 w-80 h-80 bg-accent/15 orb-glow animate-pulse-soft" />
        <div className="absolute bottom-16 left-16 w-96 h-96 bg-secondary/15 orb-glow animate-pulse-soft" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/5 orb-glow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — content */}
          <div className="section-reveal text-white">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full glass px-4 py-2.5 mb-8">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <Smartphone className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">Mobile App — Coming Soon</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.15] mb-6 text-balance">
              Carry TripTriva in your pocket
            </h2>
            <p className="text-lg text-white/85 leading-relaxed mb-10">
              The TripTriva mobile app will make it even easier to discover, book, and manage your
              travel experiences on the go. We're building it now — be the first to know when it launches.
            </p>

            {/* Feature list */}
            <div className="space-y-5 mb-10">
              {[
                { icon: MapPin, text: 'Discover experiences near you, wherever you travel' },
                { icon: CalendarCheck, text: 'Book and manage your trips with a few taps' },
                { icon: Bell, text: 'Get booking confirmations and reminders instantly' },
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl glass shadow-lg transition-transform duration-300 group-hover:scale-110 flex-shrink-0">
                    <feature.icon className="h-5 w-5 text-accent" />
                  </div>
                  <span className="text-white/90 text-base font-medium">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* App store buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                disabled
                className="group inline-flex items-center justify-center gap-3 rounded-2xl glass border-white/15 px-6 py-4 text-white font-semibold cursor-not-allowed opacity-70 transition-all hover:opacity-90"
              >
                <Apple className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-xs text-white/60">Download on the</div>
                  <div className="text-sm font-bold">App Store</div>
                </div>
                <span className="ml-2 text-xs text-white/50 rounded-full bg-white/10 px-2 py-0.5">Soon</span>
              </button>
              <button
                disabled
                className="group inline-flex items-center justify-center gap-3 rounded-2xl glass border-white/15 px-6 py-4 text-white font-semibold cursor-not-allowed opacity-70 transition-all hover:opacity-90"
              >
                <Play className="h-7 w-7" />
                <div className="text-left">
                  <div className="text-xs text-white/60">Get it on</div>
                  <div className="text-sm font-bold">Google Play</div>
                </div>
                <span className="ml-2 text-xs text-white/50 rounded-full bg-white/10 px-2 py-0.5">Soon</span>
              </button>
            </div>
          </div>

          {/* Right — phone mockup */}
          <div className="section-reveal flex justify-center lg:justify-end">
            <div className="relative">
              {/* Glow behind phone */}
              <div className="absolute -inset-12 bg-accent/15 orb-glow animate-pulse-soft" />

              {/* Phone frame */}
              <div className="relative w-72 h-[560px] rounded-[3.5rem] glass-dark border-2 border-white/15 shadow-2xl p-3.5 float-slow">
                {/* Notch */}
                <div className="absolute top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 rounded-full bg-black/40 z-10" />

                {/* Screen */}
                <div className="w-full h-full rounded-[3rem] bg-gradient-to-b from-bg-alt via-white to-bg-alt overflow-hidden flex flex-col">
                  {/* Status bar */}
                  <div className="h-9 flex items-end justify-center pb-1">
                    <div className="w-20 h-1 rounded-full bg-text-dark/15" />
                  </div>

                  {/* App content */}
                  <div className="flex-1 px-4 py-2 space-y-3 overflow-hidden">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-[10px] text-text-muted">Welcome to</div>
                        <div className="font-display text-lg font-extrabold text-primary">TripTriva</div>
                      </div>
                      <div className="h-8 w-8 rounded-xl bg-gradient-brand" />
                    </div>

                    {/* Search bar */}
                    <div className="rounded-2xl bg-bg-alt p-3">
                      <div className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-text-muted/30" />
                        <div className="h-2 flex-1 rounded bg-text-muted/15" />
                      </div>
                    </div>

                    {/* Hero card */}
                    <div className="rounded-2xl bg-gradient-brand p-3 relative overflow-hidden">
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full" />
                      <div className="relative">
                        <div className="text-[10px] text-white/70">Featured</div>
                        <div className="text-sm font-bold text-white">Kerala Houseboats</div>
                        <div className="mt-2 inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-[10px] font-bold text-text-dark">
                          Book Now
                        </div>
                      </div>
                    </div>

                    {/* Grid items */}
                    <div className="grid grid-cols-2 gap-2">
                      <div className="rounded-xl bg-primary/10 p-2.5 h-16 flex flex-col justify-between">
                        <MapPin className="h-4 w-4 text-primary" />
                        <div className="h-1.5 w-2/3 rounded bg-text-muted/20" />
                      </div>
                      <div className="rounded-xl bg-secondary/10 p-2.5 h-16 flex flex-col justify-between">
                        <CalendarCheck className="h-4 w-4 text-secondary" />
                        <div className="h-1.5 w-2/3 rounded bg-text-muted/20" />
                      </div>
                    </div>

                    {/* List item */}
                    <div className="rounded-xl bg-bg-alt p-2.5 flex items-center gap-2">
                      <div className="h-8 w-8 rounded-lg bg-accent/20 flex items-center justify-center">
                        <Bell className="h-4 w-4 text-accent" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="h-1.5 rounded bg-text-muted/20" />
                        <div className="h-1.5 w-2/3 rounded bg-text-muted/15" />
                      </div>
                    </div>

                    {/* CTA button */}
                    <div className="rounded-xl bg-accent p-2.5 flex items-center justify-center">
                      <div className="text-xs font-bold text-text-dark">Explore Experiences</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div
                className="absolute -left-8 top-1/3 hidden sm:block"
                style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                <div className="glass-dark rounded-2xl p-3 shadow-2xl w-44">
                  <div className="flex items-center gap-2 mb-1.5">
                    <div className="h-7 w-7 rounded-lg bg-accent/30 flex items-center justify-center">
                      <CalendarCheck className="h-4 w-4 text-accent" />
                    </div>
                    <span className="text-white text-xs font-bold">Booking Confirmed</span>
                  </div>
                  <p className="text-white/70 text-[10px] leading-relaxed">Houseboat cruise — Alappuzha</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
