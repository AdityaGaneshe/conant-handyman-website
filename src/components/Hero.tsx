import { Phone, ClipboardList, CheckCircle2 } from 'lucide-react';

const trustBadges = [
  'Locally Owned',
  'Serving Since 2017',
  'Credit Cards Accepted',
  'Fully Responsive Service',
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(155deg, rgba(26,51,41,0.93) 0%, rgba(35,66,54,0.88) 50%, rgba(45,80,64,0.82) 100%)',
          }}
        />
      </div>

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Mountain silhouette at bottom */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 120"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: '80px' }}
        >
          <path
            d="M0,120 L0,80 L80,45 L180,75 L280,30 L380,65 L480,20 L560,55 L640,15 L720,50 L800,5 L880,40 L960,10 L1040,50 L1140,25 L1240,60 L1340,35 L1440,70 L1440,120 Z"
            fill="#FAF6EE"
            opacity="1"
          />
          <path
            d="M0,120 L0,95 L120,70 L220,90 L320,55 L420,80 L520,45 L600,75 L700,35 L780,65 L880,30 L960,60 L1060,40 L1160,70 L1260,50 L1360,75 L1440,55 L1440,120 Z"
            fill="#FAF6EE"
            opacity="0.5"
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-[#C96A2B]/20 border border-[#C96A2B]/40 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C96A2B] animate-pulse" />
            <span className="text-[#E8DDC7] text-sm font-medium">Colorado Springs, CO</span>
          </div>

          <h1 className="font-heading font-extrabold text-[#FAF6EE] text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Reliable Home Repairs{' '}
            <span className="text-[#C96A2B]">Without the Hassle.</span>
          </h1>

          <p className="text-[#E8DDC7]/90 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Serving Colorado Springs homeowners since 2017 with dependable craftsmanship,
            honest pricing, and service you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mb-12">
            <a
              href="tel:7193579755"
              className="flex items-center justify-center gap-2 bg-[#C96A2B] hover:bg-[#A85520] text-white font-bold px-7 py-4 rounded-xl text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={18} />
              Call Now — (719) 357-9755
            </a>
            <a
              href="#contact"
              className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-[#FAF6EE] font-semibold px-7 py-4 rounded-xl text-base border border-white/20 transition-all duration-200"
            >
              <ClipboardList size={18} />
              Get a Free Estimate
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-3">
            {trustBadges.map((badge) => (
              <div
                key={badge}
                className="flex items-center gap-2 bg-white/10 rounded-full px-4 py-2"
              >
                <CheckCircle2 size={14} className="text-[#C96A2B] shrink-0" />
                <span className="text-[#E8DDC7] text-sm font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
