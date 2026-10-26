import {
  TrendingUp, Users, ShieldCheck, Smartphone,
  ArrowRight, CheckCircle2,
} from 'lucide-react';

const benefits = [
  {
    icon: TrendingUp,
    title: 'Reach More Customers',
    description: 'Get discovered by travelers searching for experiences in your area — beyond word-of-mouth and walk-ins.',
  },
  {
    icon: Smartphone,
    title: 'Effortless Booking Management',
    description: 'Manage availability, slots, pricing, and bookings from one dashboard. No more juggling phone calls and WhatsApp.',
  },
  {
    icon: Users,
    title: 'Build Your Reputation',
    description: 'Collect verified customer reviews and build trust that helps you stand out from the competition.',
  },
  {
    icon: ShieldCheck,
    title: 'Vetted & Verified',
    description: 'Being a TripTriva partner signals credibility. We verify every business so travelers book with confidence.',
  },
];

const partnerChecklist = [
  'Free to join during our launch phase',
  'No technical knowledge required',
  'List unlimited experiences',
  'Direct access to traveler bookings',
  'Transparent pricing — no hidden fees',
  'Dedicated partner support team',
];

export default function Partner() {
  return (
    <section id="partner" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 orb-glow" />
      <div className="absolute bottom-1/4 left-0 w-72 h-72 bg-accent/5 orb-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — text + checklist + CTA */}
          <div className="section-reveal">
            <div className="inline-flex items-center gap-2 mb-5">
              <div className="h-px w-8 bg-secondary" />
              <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">Partner With TripTriva</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] mb-6 text-balance">
              Grow your tourism business with TripTriva
            </h2>

            <p className="text-lg text-text-muted leading-relaxed mb-8">
              If you run a tourism experience — a houseboat, a trekking service, a local tour, a
              water sports outfit, or anything in between — join TripTriva and put your offerings
              in front of travelers looking for exactly what you offer.
            </p>

            {/* Checklist — creative 2-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
              {partnerChecklist.map((item, i) => (
                <div
                  key={i}
                  className="group flex items-center gap-3 rounded-xl bg-bg-alt/60 px-4 py-3 border border-gray-100/60 hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                >
                  <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary transition-colors flex-shrink-0">
                    <CheckCircle2 className="h-4 w-4 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-text-dark text-sm font-medium leading-tight">{item}</span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-magnetic group inline-flex items-center justify-center gap-2.5 rounded-2xl bg-gradient-brand px-8 py-4 text-base font-bold text-white shadow-glow-primary transition-all"
            >
              Become a Partner
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1.5" />
            </a>
          </div>

          {/* Right — benefits cards in creative staggered layout */}
          <div className="section-reveal grid grid-cols-1 sm:grid-cols-2 gap-5">
            {benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className={`group relative rounded-[1.75rem] bg-white p-7 card-hover border border-gray-100/60 shadow-card overflow-hidden ${
                  i % 2 === 1 ? 'sm:mt-8' : ''
                }`}
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Corner accent */}
                <div className="absolute -top-10 -right-10 w-20 h-20 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150 group-hover:bg-primary/8" />

                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-brand mb-5 shadow-glow-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
