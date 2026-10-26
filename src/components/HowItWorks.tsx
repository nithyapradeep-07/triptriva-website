import {
  Search, Scale, CalendarCheck, Smile,
  UserPlus, FileText, TrendingUp, CircleDollarSign,
} from 'lucide-react';
import { travelerSteps, partnerSteps } from '@/data/content';

const travelerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  Search, Scale, CalendarCheck, Smile,
};

const partnerIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  UserPlus, FileText, TrendingUp, CircleDollarSign,
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-bg-alt relative overflow-hidden">
      {/* Background mesh */}
      <div className="absolute inset-0 bg-gradient-mesh" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">How It Works</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] text-balance">
            Simple for travelers, powerful for partners
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed text-balance">
            Whether you're planning your next adventure or growing your tourism business,
            TripTriva makes the journey effortless.
          </p>
        </div>

        {/* Traveler Steps */}
        <div className="section-reveal mb-20">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow-primary">
              <Smile className="h-5.5 w-5.5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-primary leading-tight">For Travelers</h3>
              <p className="text-sm text-text-muted">From discovery to experience in 4 steps</p>
            </div>
          </div>

          {/* Steps with connector line */}
          <div className="relative">
            {/* Horizontal connector line */}
            <div className="hidden lg:block absolute top-[3.25rem] left-[3.5rem] right-[3.5rem] h-0.5 bg-gradient-to-r from-primary/10 via-primary/30 to-primary/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {travelerSteps.map((step, i) => {
                const Icon = travelerIcons[step.icon];
                return (
                  <div key={step.step} className="relative group">
                    <div className="rounded-[1.75rem] bg-white p-7 card-hover border border-gray-100/60 shadow-card h-full relative overflow-hidden">
                      {/* Large step number watermark */}
                      <span className="absolute -top-2 -right-2 font-display text-7xl font-extrabold text-primary/5 select-none">
                        {step.step}
                      </span>

                      <div className="relative">
                        {/* Icon with step number badge */}
                        <div className="relative mb-6">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand shadow-glow-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            {Icon && <Icon className="h-7 w-7 text-white" />}
                          </div>
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-xs font-bold text-primary">
                            {step.step}
                          </span>
                        </div>

                        <h4 className="font-display text-lg font-bold text-primary mb-2">{step.title}</h4>
                        <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Partner Steps */}
        <div className="section-reveal">
          <div className="flex items-center gap-3 mb-10">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary shadow-lg shadow-secondary/30">
              <TrendingUp className="h-5.5 w-5.5 text-white" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-secondary leading-tight">For Partners</h3>
              <p className="text-sm text-text-muted">From registration to growth in 4 steps</p>
            </div>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-[3.25rem] left-[3.5rem] right-[3.5rem] h-0.5 bg-gradient-to-r from-secondary/10 via-secondary/30 to-secondary/10" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {partnerSteps.map((step, i) => {
                const Icon = partnerIcons[step.icon];
                return (
                  <div key={step.step} className="relative group">
                    <div className="rounded-[1.75rem] bg-white p-7 card-hover border border-gray-100/60 shadow-card h-full relative overflow-hidden">
                      <span className="absolute -top-2 -right-2 font-display text-7xl font-extrabold text-secondary/5 select-none">
                        {step.step}
                      </span>

                      <div className="relative">
                        <div className="relative mb-6">
                          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary shadow-lg shadow-secondary/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                            {Icon && <Icon className="h-7 w-7 text-white" />}
                          </div>
                          <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md border border-gray-100 text-xs font-bold text-secondary">
                            {step.step}
                          </span>
                        </div>

                        <h4 className="font-display text-lg font-bold text-primary mb-2">{step.title}</h4>
                        <p className="text-sm text-text-muted leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
