import { useScrollAnimation } from '../hooks/useScrollAnimation';

const photos = [
  {
    src: 'https://images.pexels.com/photos/7937428/pexels-photo-7937428.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Drywall Repair',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/5025638/pexels-photo-5025638.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Handyman Services',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Home Interiors',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Exterior Work',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600',
    label: 'Cabinet Work',
    span: '',
  },
];

export default function Gallery() {
  const ref = useScrollAnimation();

  return (
    <section className="py-20 sm:py-28 bg-[#FAF6EE]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll text-center mb-12">
          <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
            Our Work
          </div>
          <h2 className="font-heading font-bold text-[#234236] text-3xl sm:text-4xl">
            Project Snapshots
          </h2>
          <p className="text-[#2A2A2A]/55 mt-3 max-w-md mx-auto">
            Real jobs, real results — quality craftsmanship across Colorado Springs homes.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px] sm:auto-rows-[220px]">
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              className={`animate-on-scroll relative overflow-hidden rounded-2xl group ${photo.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={photo.src}
                alt={photo.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white font-semibold text-sm">{photo.label}</span>
              </div>
            </div>
          ))}

          {/* CTA tile */}
          <div className="animate-on-scroll relative overflow-hidden rounded-2xl bg-[#234236] flex flex-col items-center justify-center p-6 text-center" style={{ transitionDelay: '400ms' }}>
            <div className="font-heading font-bold text-[#FAF6EE] text-lg leading-tight mb-2">
              Ready to start?
            </div>
            <p className="text-[#E8DDC7]/70 text-sm mb-4">Your project is next.</p>
            <a
              href="tel:7193579755"
              className="bg-[#C96A2B] hover:bg-[#A85520] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors duration-200"
            >
              Call Austin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
