import { MapPin } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const neighborhoods = [
  'Briargate', 'Black Forest', 'Monument', 'Falcon',
  'Peyton', 'Northgate', 'Powers Corridor', 'Broadmoor',
  'Old Colorado City', 'Downtown', 'Fountain', 'Security',
];

export default function ServiceArea() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-[#234236] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path d="M0,80 L0,50 L120,25 L240,55 L360,15 L480,45 L600,10 L720,40 L840,5 L960,35 L1080,15 L1200,45 L1320,20 L1440,50 L1440,80 Z" fill="#E8DDC7" />
        </svg>
      </div>

      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 pt-6">
        <div className="animate-on-scroll text-center mb-14">
          <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
            Service Coverage
          </div>
          <h2 className="font-heading font-bold text-[#FAF6EE] text-3xl sm:text-4xl mb-4">
            Proudly Serving Colorado Springs
          </h2>
          <p className="text-[#E8DDC7]/70 text-lg max-w-lg mx-auto">
            From Briargate to Broadmoor — if you call Colorado Springs home, we've got you covered.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-3 animate-on-scroll">
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-[#1a3329]">
              <iframe
                title="Colorado Springs Service Area"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d197407.6363853208!2d-104.96097793959627!3d38.89362853855627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8714a82a5f9e498b%3A0xa5b40476d2028e67!2sColorado%20Springs%2C%20CO!5e0!3m2!1sen!2sus!4v1699000000000!5m2!1sen!2sus"
                className="w-full"
                style={{ height: '380px', filter: 'grayscale(30%) sepia(10%)' }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 flex items-center justify-center gap-2 text-[#E8DDC7]/60 text-sm">
              <MapPin size={14} />
              Serving Colorado Springs, CO 80924 and surrounding areas
            </div>
          </div>

          <div className="lg:col-span-2 animate-on-scroll" style={{ transitionDelay: '120ms' }}>
            <h3 className="font-heading font-semibold text-[#FAF6EE] text-lg mb-5">Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-2">
              {neighborhoods.map((area) => (
                <div key={area} className="flex items-center gap-2 bg-white/8 hover:bg-white/12 rounded-lg px-3 py-2.5 transition-colors duration-200">
                  <MapPin size={12} className="text-[#C96A2B] shrink-0" />
                  <span className="text-[#E8DDC7] text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
            <div className="mt-5 text-[#E8DDC7]/50 text-sm">
              Not sure if we cover your area? Call Austin — chances are we do.
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full block" style={{ height: '50px' }}>
          <path d="M0,80 L0,50 L120,25 L240,55 L360,15 L480,45 L600,10 L720,40 L840,5 L960,35 L1080,15 L1200,45 L1320,20 L1440,50 L1440,80 Z" fill="#FAF6EE" />
        </svg>
      </div>
    </section>
  );
}
