import { Clock, DollarSign, Award } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const features = [
  {
    icon: Clock,
    title: 'Always On Time',
    desc: 'We respect your schedule and show up when promised. No waiting around, no missed windows.',
    detail: 'Your time matters.',
    img: 'https://images.pexels.com/photos/209251/pexels-photo-209251.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: DollarSign,
    title: 'Fair & Honest Pricing',
    desc: 'Clear quotes before work begins. No surprise charges, no inflated estimates.',
    detail: 'What you see is what you pay.',
    img: 'https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Award,
    title: 'Quality Workmanship',
    desc: 'Repairs done correctly the first time with long-lasting results you can see and feel.',
    detail: 'Built to last.',
    img: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function WhyChoose() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-[#E8DDC7]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll text-center mb-14">
          <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
            The Conant Difference
          </div>
          <h2 className="font-heading font-bold text-[#234236] text-3xl sm:text-4xl">
            Why Homeowners Choose Conant
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="animate-on-scroll bg-[#FAF6EE] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 group"
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#234236]/30" />
                  <div className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-lg flex items-center justify-center">
                    <span className="font-heading font-black text-[#234236] text-sm">{i + 1}</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="w-11 h-11 bg-[#234236] rounded-xl flex items-center justify-center mb-4 shadow-md">
                    <Icon size={20} className="text-[#C96A2B]" />
                  </div>
                  <h3 className="font-heading font-bold text-[#234236] text-xl mb-3">{feature.title}</h3>
                  <p className="text-[#2A2A2A]/65 leading-relaxed mb-4">{feature.desc}</p>
                  <div className="text-[#C96A2B] font-semibold text-sm">{feature.detail}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
