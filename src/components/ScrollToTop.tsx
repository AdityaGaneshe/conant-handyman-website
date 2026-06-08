import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-20 sm:bottom-8 right-5 z-40 w-11 h-11 bg-[#234236] hover:bg-[#C96A2B] text-white rounded-xl shadow-lg flex items-center justify-center transition-colors duration-200"
      aria-label="Scroll to top"
    >
      <ArrowUp size={18} />
    </button>
  );
}
