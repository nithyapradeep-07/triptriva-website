import { useState } from 'react';
import { Mail, MapPin, Building2, Send, CheckCircle2, ChevronDown, Phone } from 'lucide-react';
import { companyInfo } from '@/data/content';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', company: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 orb-glow" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="section-reveal text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-secondary" />
            <span className="text-secondary font-bold text-xs uppercase tracking-[0.18em]">Contact Us</span>
            <div className="h-px w-8 bg-secondary" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-primary leading-[1.15] text-balance">
            Let's talk
          </h2>
          <p className="mt-6 text-lg text-text-muted leading-relaxed text-balance">
            Whether you're a traveler with questions, a tourism business wanting to partner, or an
            investor interested in TripTriva — we'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Left — contact info cards */}
          <div className="section-reveal lg:col-span-2 space-y-4">
            {/* Registered office */}
            <div className="group rounded-[1.75rem] bg-bg-alt/70 p-6 border border-gray-100/60 card-hover relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:scale-110 flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-1.5">
                    Registered Office
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {companyInfo.registeredOffice}
                  </p>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="group rounded-[1.75rem] bg-bg-alt/70 p-6 border border-gray-100/60 card-hover relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-secondary/5 rounded-full transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 transition-transform group-hover:scale-110 flex-shrink-0">
                  <Mail className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-secondary uppercase tracking-wider mb-1.5">
                    Email
                  </h3>
                  <a href={`mailto:${companyInfo.email}`} className="text-text-muted text-sm hover:text-primary transition-colors">
                    {companyInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="group rounded-[1.75rem] bg-bg-alt/70 p-6 border border-gray-100/60 card-hover relative overflow-hidden">
              <div className="absolute -top-8 -right-8 w-16 h-16 bg-primary/5 rounded-full transition-all duration-500 group-hover:scale-150" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 transition-transform group-hover:scale-110 flex-shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-primary uppercase tracking-wider mb-1.5">
                    Phone
                  </h3>
                  <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="text-text-muted text-sm hover:text-primary transition-colors">
                    {companyInfo.phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Company details — gradient card */}
            <div className="group rounded-[1.75rem] bg-gradient-brand p-6 text-white relative overflow-hidden card-hover">
              <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-white/8 blob" />
              <div className="relative flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl glass flex-shrink-0">
                  <Building2 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold uppercase tracking-wider mb-1.5">
                    Company Details
                  </h3>
                  <p className="text-white/85 text-sm">{companyInfo.name}</p>
                  <p className="text-white/60 text-xs mt-1">CIN: {companyInfo.cin}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="section-reveal lg:col-span-3">
            <div className="rounded-[2rem] bg-bg-alt/60 p-8 lg:p-10 border border-gray-100/60 relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute -top-16 -right-16 w-40 h-40 bg-primary/3 rounded-full" />

              {submitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center relative">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 orb-glow animate-pulse-soft" />
                    <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-primary/15 mb-6">
                      <CheckCircle2 className="h-10 w-10 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-display text-2xl font-bold text-primary mb-2">Message sent!</h3>
                  <p className="text-text-muted text-sm">
                    Thanks for reaching out. We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full rounded-2xl border border-gray-200/80 bg-white px-4 py-3.5 text-text-dark placeholder:text-text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition-all"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full rounded-2xl border border-gray-200/80 bg-white px-4 py-3.5 text-text-dark placeholder:text-text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition-all"
                        placeholder="you@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">
                      Company / Business Name <span className="text-text-muted font-normal">(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full rounded-2xl border border-gray-200/80 bg-white px-4 py-3.5 text-text-dark placeholder:text-text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition-all"
                      placeholder="Your business name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-2xl border border-gray-200/80 bg-white px-4 py-3.5 text-text-dark placeholder:text-text-muted/40 focus:border-primary focus:ring-4 focus:ring-primary/15 outline-none transition-all resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-magnetic group inline-flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-brand px-6 py-4 text-base font-bold text-white shadow-glow-primary transition-all"
                  >
                    Send Message
                    <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
