import { useState } from 'react';
import { Phone, Clock, Send, CheckCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Contact() {
  const ref = useScrollAnimation();
  const [form, setForm] = useState({ name: '', phone: '', email: '', project: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#FAF6EE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={ref} className="animate-on-scroll text-center mb-14">
          <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
            Get In Touch
          </div>
          <h2 className="font-heading font-bold text-[#234236] text-3xl sm:text-4xl">
            Let's Get Your Project Done
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left — Info */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-heading font-semibold text-[#234236] text-lg mb-4">
                Prefer to call?
              </h3>
              <a
                href="tel:7193579755"
                className="flex items-center gap-3 group"
              >
                <div className="w-12 h-12 bg-[#234236] rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#C96A2B] transition-colors duration-200">
                  <Phone size={20} className="text-[#FAF6EE]" />
                </div>
                <div>
                  <div className="font-heading font-bold text-[#234236] text-xl group-hover:text-[#C96A2B] transition-colors">
                    (719) 357-9755
                  </div>
                  <div className="text-[#2A2A2A]/55 text-sm">Austin answers personally</div>
                </div>
              </a>
            </div>

            <div>
              <h3 className="font-heading font-semibold text-[#234236] text-lg mb-4">
                Service Hours
              </h3>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-[#E8DDC7] rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-[#234236]" />
                </div>
                <div className="space-y-1 text-[#2A2A2A]/70">
                  <div className="flex justify-between gap-8">
                    <span className="font-medium text-[#234236]">Monday – Friday</span>
                    <span>7:00 AM – 6:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="font-medium text-[#234236]">Saturday</span>
                    <span>8:00 AM – 4:00 PM</span>
                  </div>
                  <div className="flex justify-between gap-8">
                    <span className="font-medium text-[#234236]">Sunday</span>
                    <span>By appointment</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E8DDC7] rounded-2xl p-5">
              <div className="font-heading font-semibold text-[#234236] mb-2">
                Serving Colorado Springs Since 2017
              </div>
              <div className="text-[#2A2A2A]/65 text-sm leading-relaxed">
                Over 8 years of trusted home repairs across Colorado Springs and the surrounding area.
                Credit cards accepted.
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-16 bg-[#E8DDC7] rounded-2xl">
                <CheckCircle size={56} className="text-[#234236] mb-5" />
                <h3 className="font-heading font-bold text-[#234236] text-2xl mb-2">
                  Message Received!
                </h3>
                <p className="text-[#2A2A2A]/65 max-w-xs">
                  Austin will be in touch shortly. Or call him directly at{' '}
                  <a href="tel:7193579755" className="text-[#C96A2B] font-semibold">
                    (719) 357-9755
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border border-[#E8DDC7] p-7 sm:p-9 space-y-5"
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-[#234236] font-medium text-sm mb-1.5">
                      Your Name <span className="text-[#C96A2B]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Smith"
                      className="w-full border border-[#E8DDC7] rounded-xl px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/35 focus:outline-none focus:ring-2 focus:ring-[#234236]/30 focus:border-[#234236] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[#234236] font-medium text-sm mb-1.5">
                      Phone Number <span className="text-[#C96A2B]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(719) 555-0100"
                      className="w-full border border-[#E8DDC7] rounded-xl px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/35 focus:outline-none focus:ring-2 focus:ring-[#234236]/30 focus:border-[#234236] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#234236] font-medium text-sm mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full border border-[#E8DDC7] rounded-xl px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/35 focus:outline-none focus:ring-2 focus:ring-[#234236]/30 focus:border-[#234236] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[#234236] font-medium text-sm mb-1.5">
                    Tell Us About Your Project <span className="text-[#C96A2B]">*</span>
                  </label>
                  <textarea
                    name="project"
                    required
                    value={form.project}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe what you need help with..."
                    className="w-full border border-[#E8DDC7] rounded-xl px-4 py-3 text-sm text-[#2A2A2A] placeholder-[#2A2A2A]/35 focus:outline-none focus:ring-2 focus:ring-[#234236]/30 focus:border-[#234236] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-[#234236] hover:bg-[#1a3329] disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-colors duration-200 text-base"
                >
                  {loading ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <>
                      <Send size={16} />
                      Request a Callback
                    </>
                  )}
                </button>

                <p className="text-[#2A2A2A]/40 text-xs text-center">
                  Or call directly at{' '}
                  <a href="tel:7193579755" className="text-[#C96A2B] font-semibold">
                    (719) 357-9755
                  </a>
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
