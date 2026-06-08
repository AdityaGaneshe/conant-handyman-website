import { ShieldCheck, Clock3, Star } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: ShieldCheck, text: 'Licensed & Insured' },
  { icon: Clock3, text: 'Serving Since 2017' },
  { icon: Star, text: '5-Star Rated' },
];

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#FAF6EE]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Visual */}
          <div className="animate-on-scroll relative">
            <div className="relative bg-[#234236] rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] max-w-md mx-auto lg:mx-0">
              <img
                src="https://images.pexels.com/photos/8005397/pexels-photo-8005397.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Austin Conant - Handyman Colorado Springs"
                className="w-full h-full object-cover opacity-80 mix-blend-luminosity"
                style={{ filter: 'sepia(20%) brightness(0.9)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#234236]/80 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 bg-white/95 rounded-xl px-5 py-4 shadow-xl">
                <div className="font-heading font-bold text-[#234236] text-lg leading-tight">Austin Conant</div>
                <div className="text-[#C96A2B] text-sm font-medium mt-0.5">Owner & Operator</div>
                <div className="text-[#2A2A2A]/60 text-sm mt-1">Colorado Springs, CO</div>
              </div>

              <div className="absolute top-5 right-5 bg-[#C96A2B] text-white rounded-xl px-3 py-2 text-center shadow-lg">
                <div className="font-heading font-bold text-xl leading-none">8+</div>
                <div className="text-[10px] font-medium mt-0.5 leading-tight uppercase tracking-wide">Years<br />Experience</div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#E8DDC7] rounded-2xl -z-10 hidden lg:block" />
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#C96A2B]/30 rounded-xl -z-10 hidden lg:block" />
          </div>

          {/* Right — Content */}
          <div className="animate-on-scroll" style={{ transitionDelay: '120ms' }}>
            <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
              Meet Your Handyman
            </div>
            <h2 className="font-heading font-bold text-[#234236] text-3xl sm:text-4xl mb-6 leading-tight">
              Meet Austin
            </h2>

            <div className="space-y-4 text-[#2A2A2A]/75 leading-relaxed text-base sm:text-lg">
              <p>
                When you call Conant Handyman Service, you're working directly with{' '}
                <strong className="text-[#234236]">Austin Conant</strong> — not a large franchise
                or rotating crew.
              </p>
              <p>
                Since 2017, Austin has helped Colorado Springs homeowners tackle everything from
                minor repairs to long-overdue home projects with honesty, reliability, and attention
                to detail.
              </p>
              <p>
                Every job — big or small — gets the same dedicated care. Austin takes the time to
                understand exactly what you need and communicates clearly from start to finish.
              </p>
            </div>

            <div className="mt-8 pb-8 border-b border-[#E8DDC7]">
              <div className="text-[#234236] font-heading italic text-3xl opacity-80" style={{ letterSpacing: '-0.5px' }}>
                — Austin Conant
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {highlights.map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-[#E8DDC7] rounded-full px-4 py-2">
                  <Icon size={15} className="text-[#C96A2B]" />
                  <span className="text-[#234236] font-semibold text-sm">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
