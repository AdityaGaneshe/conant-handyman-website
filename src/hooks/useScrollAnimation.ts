import { useEffect, useRef } from 'react';

export function useScrollAnimation() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08 }
    );

    // Collect all animate-on-scroll descendants, plus the element itself if tagged
    const children = Array.from(el.querySelectorAll<HTMLElement>('.animate-on-scroll'));
    const targets: Element[] = el.classList.contains('animate-on-scroll')
      ? [el, ...children]
      : children;

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, []);

  return ref;
}
