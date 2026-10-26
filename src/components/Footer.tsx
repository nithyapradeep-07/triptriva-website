import { Compass, Mail, MapPin, Phone, Linkedin, Twitter, Instagram, Facebook, ArrowUpRight } from 'lucide-react';
import { navLinks, companyInfo } from '@/data/content';

export default function Footer() {
  return (
    <footer className="bg-gradient-brand-deep text-white relative overflow-hidden noise-overlay">
      {/* Ambient orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-accent/8 orb-glow" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-white/5 orb-glow" />
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-pattern opacity-15" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl glass">
                <Compass className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-display text-xl font-extrabold">TripTriva</span>
                <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/50">Private Limited</span>
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              India's local tourism marketplace. Discover and book authentic travel experiences,
              activities, adventures, and stays — all in one place.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {[Instagram, Facebook, Twitter, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="group flex h-10 w-10 items-center justify-center rounded-xl glass transition-all hover:bg-accent/30 hover:scale-110"
                  aria-label="Social media"
                >
                  <Icon className="h-4.5 w-4.5 text-white transition-colors group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
              Explore
            </h4>
            <ul className="space-y-3.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-white/75 text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm text-white/75">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{companyInfo.registeredOffice}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:text-accent transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <a href={`tel:${companyInfo.phone.replace(/\s+/g, '')}`} className="hover:text-accent transition-colors">
                  {companyInfo.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h4 className="font-display text-sm font-bold uppercase tracking-[0.15em] text-white/50 mb-5">
              Company
            </h4>
            <ul className="space-y-3 text-sm text-white/75">
              <li className="flex items-center justify-between">
                <span className="text-white/40 text-xs uppercase tracking-wider">CIN</span>
              </li>
              <li className="-mt-2"><span className="text-white/90 font-medium">{companyInfo.cin}</span></li>
              <li><span className="text-white/40">Type:</span> <span className="text-white/90">Private Limited</span></li>
              <li><span className="text-white/40">Industry:</span> <span className="text-white/90">Travel Tech</span></li>
              <li><span className="text-white/40">HQ:</span> <span className="text-white/90">Kerala, India</span></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs">
            © {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-white/50">
            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-accent transition-colors">Partner Agreement</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
