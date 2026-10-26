import { useState, useEffect } from 'react';
import { Menu, X, Compass, ChevronDown } from 'lucide-react';
import { navLinks } from '@/data/content';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/80 backdrop-blur-2xl shadow-soft py-0'
          : 'bg-transparent py-2'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-500 ${scrolled ? 'h-14' : 'h-16 md:h-18'}`}>
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div
              className={`relative flex h-10 w-10 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110 ${
                scrolled
                  ? 'bg-gradient-brand shadow-glow-primary'
                  : 'glass border-white/25'
              }`}
            >
              <Compass className="h-5 w-5 text-white" strokeWidth={2.5} />
              <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'} bg-gradient-brand blur-lg -z-10`} />
            </div>
            <div className="flex flex-col leading-none">
              <span
                className={`font-display text-xl font-extrabold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-primary' : 'text-white'
                }`}
              >
                TripTriva
              </span>
              <span
                className={`text-[9px] font-semibold uppercase tracking-[0.18em] transition-colors duration-300 ${
                  scrolled ? 'text-text-muted' : 'text-white/60'
                }`}
              >
                Private Limited
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav
            className={`hidden lg:flex items-center gap-0.5 rounded-full px-2 py-1.5 transition-all duration-500 ${
              scrolled
                ? 'bg-bg-alt/80 shadow-soft'
                : 'glass'
            }`}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-underline rounded-full px-3.5 py-2 text-[13px] font-semibold transition-all duration-300 ${
                  scrolled
                    ? 'text-text-dark hover:text-primary'
                    : 'text-white/85 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#download-app"
              className="btn-magnetic group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-text-dark shadow-glow-accent hover:shadow-lg transition-all"
            >
              <span>Download App</span>
              <ChevronDown className="h-3.5 w-3.5 -rotate-90 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className={`lg:hidden flex h-10 w-10 items-center justify-center rounded-xl transition-all ${
              scrolled ? 'bg-primary/10 text-primary' : 'glass text-white'
            }`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[600px]' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-2xl border-t border-gray-100/50">
          <nav className="mx-auto max-w-7xl px-4 py-5 flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-sm font-semibold text-text-dark hover:bg-primary/8 hover:text-primary transition-all duration-300"
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
                <ChevronDown className="h-4 w-4 -rotate-90 text-text-muted/40" />
              </a>
            ))}
            <a
              href="#download-app"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-2xl bg-accent px-4 py-3.5 text-center text-sm font-bold text-text-dark shadow-glow-accent"
            >
              Download App
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
