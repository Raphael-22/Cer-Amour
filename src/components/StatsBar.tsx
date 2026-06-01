import { useEffect, useState } from 'react';
import { useReveal } from '../utils/useReveal';

export default function StatsBar() {
  const [ref, visible] = useReveal(0.5);
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    if (visible) {
      let current1 = 0;
      const interval = setInterval(() => {
        current1 += 2;
        if (current1 >= 100) {
          current1 = 100;
          clearInterval(interval);
        }
        setCount1(current1);
      }, 20);
      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <div className="bg-terracotta relative z-20">
      <div 
        ref={ref}
        className="max-w-6xl mx-auto px-6 py-6 md:py-8"
      >
        <div className="flex flex-wrap md:flex-nowrap items-center justify-between gap-y-8">
          
          <div className="w-1/2 md:w-1/4 flex flex-col items-center border-r-0 md:border-r border-sand/30">
            <span className="font-serif text-[28px] text-white">
              {count1}%
            </span>
            <span className="font-sans text-[11px] text-white/70 uppercase tracking-wider mt-1">
              Handmade
            </span>
          </div>

          <div className="w-1/2 md:w-1/4 flex flex-col items-center md:border-r border-sand/30">
            <span className="font-serif text-[28px] text-white">
              0
            </span>
            <span className="font-sans text-[11px] text-white/70 uppercase tracking-wider mt-1">
              Two pieces alike
            </span>
          </div>

          <div className="w-1/2 md:w-1/4 flex flex-col items-center border-r-0 md:border-r border-sand/30">
            <span className="font-serif text-[32px] leading-none text-white pb-1">
              ∞
            </span>
            <span className="font-sans text-[11px] text-white/70 uppercase tracking-wider mt-1">
              Love poured in
            </span>
          </div>

          <div className="w-1/2 md:w-1/4 flex flex-col items-center">
            <span className="font-serif text-[28px] text-white">
              🇱🇧
            </span>
            <span className="font-sans text-[11px] text-white/70 uppercase tracking-wider mt-1">
              Made in Lebanon
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
