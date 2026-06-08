import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'About Austin', href: '#about' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#1a3329] text-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="font-heading font-extrabold text-xl text-[#FAF6EE] leading-tight mb-1">
              Conant Handyman Service
            </div>
            <div className="text-[#C96A2B] text-sm font-medium uppercase tracking-widest mb-4">
              LLC
            </div>
            <p className="text-[#FAF6EE]/60 text-sm leading-relaxed mb-5 max-w-xs">
              Reliable home repairs and handyman services for Colorado Springs homeowners since 2017.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 bg-white/10 hover:bg-[#C96A2B] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Facebook size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 bg-white/10 hover:bg-[#C96A2B] rounded-lg flex items-center justify-center transition-colors duration-200"
              >
                <Instagram size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-[#FAF6EE] mb-5">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF6EE]/60 hover:text-[#FAF6EE] text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-[#FAF6EE] mb-5">Contact</h4>
            <div className="space-y-4">
              <a href="tel:7193579755" className="flex items-center gap-3 group">
                <div className="w-9 h-9 bg-[#C96A2B]/20 rounded-lg flex items-center justify-center shrink-0">
                  <Phone size={15} className="text-[#C96A2B]" />
                </div>
                <span className="text-[#FAF6EE]/75 group-hover:text-[#FAF6EE] text-sm transition-colors">
                  (719) 357-9755
                </span>
              </a>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center shrink-0">
                  <MapPin size={15} className="text-[#E8DDC7]" />
                </div>
                <span className="text-[#FAF6EE]/75 text-sm">
                  Colorado Springs, CO
                </span>
              </div>
            </div>

            <div className="mt-6 text-[#FAF6EE]/40 text-xs leading-relaxed">
              Mon – Fri: 7:00 AM – 6:00 PM<br />
              Sat: 8:00 AM – 4:00 PM
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[#FAF6EE]/35 text-xs">
          <span>
            &copy; {new Date().getFullYear()} Conant Handyman Service LLC. All rights reserved.
          </span>
          <span>Colorado Springs, CO &bull; conanthandyman.com</span>
        </div>
      </div>
    </footer>
  );
}
