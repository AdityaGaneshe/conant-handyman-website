import { Star, Quote } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const reviews = [
  {
    name: 'Jennifer M.',
    location: 'Briargate, CO Springs',
    initials: 'JM',
    color: 'bg-teal-600',
    text: 'Austin was very responsive. On the day of the project, he was on time, polite, and efficient. We booked him for another job right on the spot.',
    source: 'Google Review',
  },
  {
    name: 'Mark & Susan T.',
    location: 'Northgate, CO Springs',
    initials: 'MT',
    color: 'bg-[#234236]',
    text: 'He has done numerous projects for us and we have been beyond happy with all of his work. He problem-solves to make sure we are happy with the result.',
    source: 'Yelp Review',
  },
  {
    name: 'David R.',
    location: 'Black Forest, CO',
    initials: 'DR',
    color: 'bg-[#C96A2B]',
    text: 'We had a bathroom fan go out. He rebuilt the motor instead of replacing everything. Saved us money and did excellent work.',
    source: 'Google Review',
  },
];

function StarRow() {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className="text-amber-400 fill-amber-400" />
      ))}
    </div>
  );
}

export default function Reviews() {
  const ref = useScrollAnimation();

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#FAF6EE]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="animate-on-scroll text-center mb-14">
          <div className="inline-block text-[#C96A2B] font-semibold text-sm uppercase tracking-widest mb-3">
            Real Customers
          </div>
          <h2 className="font-heading font-bold text-[#234236] text-3xl sm:text-4xl mb-4">
            What Colorado Springs Homeowners Say
          </h2>
          <div className="flex items-center justify-center gap-2">
            <StarRow />
            <span className="text-[#2A2A2A]/60 text-sm ml-1">5.0 average across Google & Yelp</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, i) => (
            <div
              key={review.name}
              className="animate-on-scroll bg-white rounded-2xl p-7 shadow-sm border border-[#E8DDC7] hover:shadow-md transition-shadow duration-200 relative"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Quote size={28} className="text-[#234236]/10 absolute top-5 right-5" />
              <StarRow />
              <blockquote className="mt-4 text-[#2A2A2A]/75 leading-relaxed text-[15px] italic">
                "{review.text}"
              </blockquote>
              <div className="mt-6 flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {review.initials}
                </div>
                <div>
                  <div className="font-semibold text-[#234236] text-sm">{review.name}</div>
                  <div className="text-[#2A2A2A]/50 text-xs">{review.location}</div>
                </div>
                <div className="ml-auto text-[#2A2A2A]/35 text-xs">{review.source}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
