import { Phone, Tag } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function SpecialOffer() {
  const ref = useScrollAnimation();

  return (
    <section className="py-16 sm:py-20 bg-[#E8DDC7]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="animate-on-scroll relative bg-[#234236] rounded-3xl overflow-hidden shadow-2xl">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, #FAF6EE 0%, transparent 50%),
                                radial-gradient(circle at 80% 20%, #C96A2B 0%, transparent 40%)`,
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 sm:p-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-[#C96A2B]/20 border border-[#C96A2B]/40 rounded-full px-4 py-1.5 mb-4">
                <Tag size={14} className="text-[#C96A2B]" />
                <span className="text-[#E8DDC7] text-sm font-semibold">New Customer Special</span>
              </div>

              <h2 className="font-heading font-bold text-[#FAF6EE] text-3xl sm:text-4xl mb-2">
                Save 33% on Your<br />First Service Call
              </h2>
              <p className="text-[#E8DDC7]/70 mt-3">
                Book your first service and take advantage of this exclusive offer. Call Austin
                today to schedule.
              </p>
            </div>

            <div className="shrink-0 flex flex-col items-center gap-4">
              <div className="bg-[#FAF6EE] rounded-2xl px-8 py-6 text-center shadow-lg min-w-[200px]">
                <div className="text-[#2A2A2A]/50 text-sm line-through mb-1">Regular Price: $125</div>
                <div className="font-heading font-extrabold text-[#234236] text-5xl leading-none">
                  $83<span className="text-3xl">.75</span>
                </div>
                <div className="text-[#C96A2B] font-bold text-sm mt-2 uppercase tracking-wide">Today's Price</div>
                <div className="mt-1 inline-block bg-[#C96A2B]/10 text-[#C96A2B] text-xs font-bold px-3 py-1 rounded-full">
                  You save $41.25
                </div>
              </div>

              <a
                href="tel:7193579755"
                className="flex items-center gap-2 bg-[#C96A2B] hover:bg-[#A85520] text-white font-bold px-7 py-3.5 rounded-xl transition-colors duration-200 text-sm shadow-lg w-full justify-center"
              >
                <Phone size={16} />
                Call (719) 357-9755
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
