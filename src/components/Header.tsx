import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#234236] shadow-lg py-3'
            : 'bg-[#234236]/95 backdrop-blur-sm py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="flex flex-col leading-tight">
            <span className="font-heading font-800 text-[#FAF6EE] text-lg sm:text-xl leading-tight tracking-tight">
              Conant Handyman
            </span>
            <span className="text-[#C96A2B] text-xs font-medium tracking-widest uppercase">
              Service LLC
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#FAF6EE]/80 hover:text-[#FAF6EE] text-sm font-medium transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-[#FAF6EE]/70 text-sm hidden xl:block">(719) 357-9755</span>
            <a
              href="tel:7193579755"
              className="flex items-center gap-2 bg-[#C96A2B] hover:bg-[#A85520] text-white font-semibold px-4 py-2.5 rounded-lg text-sm transition-colors duration-200"
            >
              <Phone size={15} />
              Call Austin
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#FAF6EE] p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-[#1a3329] border-t border-white/10 px-4 pt-3 pb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block py-3 text-[#FAF6EE]/80 hover:text-[#FAF6EE] font-medium border-b border-white/10 text-sm"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:7193579755"
              className="mt-4 flex items-center justify-center gap-2 bg-[#C96A2B] text-white font-semibold py-3 rounded-lg text-sm"
            >
              <Phone size={15} />
              Call (719) 357-9755
            </a>
          </div>
        )}
      </header>

      {/* Sticky mobile call bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 sm:hidden">
        <a
          href="tel:7193579755"
          className="flex items-center justify-center gap-2 bg-[#C96A2B] text-white font-bold py-4 text-base shadow-2xl"
        >
          <Phone size={18} />
          Call Austin — (719) 357-9755
        </a>
      </div>
    </>
  );
}
