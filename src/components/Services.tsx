import {
  Hammer, DoorOpen, Package, Droplets, Tv, Paintbrush,
  Wrench, Warehouse, Blinds, Zap, Bed, TreePine,
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const services = [
  { icon: Hammer,    title: 'Drywall Repair',             desc: 'Holes, cracks, and water damage patched and finished like new.',           color: 'bg-amber-50 text-amber-700 border-amber-200' },
  { icon: DoorOpen,  title: 'Door Installation & Repair', desc: 'Interior and exterior doors that open, close, and seal properly.',          color: 'bg-emerald-50 text-emerald-700 border-emerald-200' },
  { icon: Package,   title: 'Cabinet Installation',       desc: 'Kitchen and bathroom cabinets installed level and secure.',                  color: 'bg-orange-50 text-orange-700 border-orange-200' },
  { icon: Droplets,  title: 'Gutter Cleaning',            desc: 'Keep water flowing away from your home and foundation.',                    color: 'bg-blue-50 text-blue-700 border-blue-200' },
  { icon: Tv,        title: 'TV Mounting',                desc: 'Flat screen mounted safely, cables hidden for a clean look.',               color: 'bg-slate-50 text-slate-700 border-slate-200' },
  { icon: Paintbrush,title: 'Interior Painting',          desc: 'Clean lines, proper prep, and lasting results every time.',                 color: 'bg-pink-50 text-pink-700 border-pink-200' },
  { icon: Wrench,    title: 'Furniture Assembly',         desc: 'Flat-pack and ready-to-assemble furniture put together properly.',          color: 'bg-yellow-50 text-yellow-700 border-yellow-200' },
  { icon: Warehouse, title: 'Garage Doors & Openers',     desc: 'Repairs and installations for smooth, reliable garage access.',             color: 'bg-gray-50 text-gray-700 border-gray-200' },
  { icon: Blinds,    title: 'Window Treatments',          desc: 'Blinds, shades, and curtain rods installed properly and level.',            color: 'bg-purple-50 text-purple-700 border-purple-200' },
  { icon: Zap,       title: 'Fixture Replacement',        desc: 'Light fixtures, faucets, and hardware swapped out with care.',              color: 'bg-lime-50 text-lime-700 border-lime-200' },
  { icon: Bed,       title: 'Murphy Bed Installation',    desc: 'Wall beds installed safely for maximum space savings.',                     color: 'bg-indigo-50 text-indigo-700 border-indigo-200' },
  { icon: TreePine,  title: 'Carpentry & Honey-Do Lists', desc: 'Custom woodwork and all those jobs you keep putting off.',                  color: 'bg-teal-50 text-teal-700 border-teal-200' },
];

export default function Services() {
  const ref = useScrollAnimation();

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#234236]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll text-center mb-10">
          <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
            What We Do
          </div>
          <h2 className="font-heading font-bold text-[#FAF6EE] text-3xl sm:text-4xl mb-4">
            Services We Offer
          </h2>
          <p className="text-[#E8DDC7]/70 text-lg max-w-xl mx-auto">
            From quick fixes to bigger projects — dependable work you can count on.
          </p>
        </div>

        {/* Photo strip */}
        <div className="animate-on-scroll grid grid-cols-3 gap-3 mb-10" style={{ transitionDelay: '100ms' }}>
          <div className="relative h-36 sm:h-48 overflow-hidden rounded-xl">
            <img src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Carpentry work" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full font-medium">Carpentry</div>
          </div>
          <div className="relative h-36 sm:h-48 overflow-hidden rounded-xl">
            <img src="https://images.pexels.com/photos/8961144/pexels-photo-8961144.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Interior painting" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full font-medium">Painting</div>
          </div>
          <div className="relative h-36 sm:h-48 overflow-hidden rounded-xl">
            <img src="https://images.pexels.com/photos/4792492/pexels-photo-4792492.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Home repairs" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-2 left-2 bg-black/50 text-white text-xs px-2 py-0.5 rounded-full font-medium">Repairs</div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="animate-on-scroll grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4" style={{ transitionDelay: '200ms' }}>
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-[#FAF6EE] rounded-xl p-5 hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-default border border-white/5"
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 rounded-lg border mb-3 ${service.color}`}>
                  <Icon size={18} />
                </div>
                <h3 className="font-heading font-semibold text-[#234236] text-sm sm:text-base mb-1.5 leading-tight">
                  {service.title}
                </h3>
                <p className="text-[#2A2A2A]/60 text-sm leading-relaxed">{service.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#E8DDC7]/70 text-sm mb-4">Don't see your project listed? Just ask.</p>
          <a href="tel:7193579755" className="inline-flex items-center gap-2 bg-[#C96A2B] hover:bg-[#A85520] text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg">
            Call (719) 357-9755
          </a>
        </div>
      </div>
    </section>
  );
}
