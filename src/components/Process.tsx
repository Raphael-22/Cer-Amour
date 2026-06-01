import { useEffect, useRef } from 'react';

const steps = [
  {
    num: "01",
    title: "The Clay",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
        <path d="M12 6c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z" />
      </svg>
    ),
    text: "Mira sources local stoneware clay mixed with natural grog for texture. She works it by hand for hours before a single piece begins.",
    photo: "https://images.unsplash.com/photo-1565732630869-c3b0b78ac748?w=400&auto=format&fit=crop&q=80"
  },
  {
    num: "02",
    title: "The Shaping",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 12V8c0-2.2 1.8-4 4-4h8c2.2 0 4 1.8 4 4v4M4 12c0 2.2 1.8 4 4 4h8c2.2 0 4-1.8 4-4" />
        <path d="M8 12h8" />
      </svg>
    ),
    text: "Hand-building — no wheel. Each form is coiled, pinched, and sculpted. Organic edges are intentional. Imperfection is the signature.",
    photo: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&auto=format&fit=crop&q=80"
  },
  {
    num: "03",
    title: "The Texture",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22V12" />
        <path d="M12 12C12 6.5 7.5 2 2 2c0 5.5 4.5 10 10 10z" />
        <path d="M12 12c0-5.5 4.5-10 10-10 0 5.5-4.5 10-10 10z" />
      </svg>
    ),
    text: "Fresh olive leaves, oak branches, and rattan weaves are pressed into the raw surface, leaving permanent fossil-like imprints.",
    photo: "https://images.unsplash.com/photo-1567598508481-65a7a5553285?w=400&auto=format&fit=crop&q=80"
  },
  {
    num: "04",
    title: "The Kiln",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2c0 0-5 6.5-5 11 0 2.8 2.2 5 5 5s5-2.2 5-5c0-4.5-5-11-5-11z" />
        <path d="M12 18c-1.7 0-3-1.3-3-3 0-1.5 1.5-3.5 3-5.5 1.5 2 3 4 3 5.5 0 1.7-1.3 3-3 3z" />
      </svg>
    ),
    text: "Bisque firing at 1000°C, then glazing by brush, then cone-6 firing at 1220°C. The glaze chemistry determines the final color — always a slight surprise.",
    photo: "https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?w=400&auto=format&fit=crop&q=80"
  },
  {
    num: "05",
    title: "The Piece",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    text: "Every finished piece is signed by Mira on the base. Photographed, named, and posted to Instagram. Then it finds its home.",
    photo: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&auto=format&fit=crop&q=80"
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only apply horizontal scroll logic on desktop
    if (window.innerWidth < 768) return;

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;
      
      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled into the container
      const scrollY = window.scrollY;
      const scrollableDistance = containerHeight - windowHeight;
      
      let scrollRatio = (scrollY - containerTop) / scrollableDistance;
      
      // Clamp ratio between 0 and 1
      scrollRatio = Math.max(0, Math.min(1, scrollRatio));
      
      // Move the track
      const maxScrollLeft = trackRef.current.scrollWidth - trackRef.current.clientWidth;
      trackRef.current.scrollLeft = scrollRatio * maxScrollLeft;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="bg-gradient-to-b from-sand to-cream border-t border-sand/30">
      {/* Desktop: Tall container for sticky scroll. Mobile: normal flow */}
      <div 
        ref={containerRef} 
        className="md:h-[200vh]"
      >
        <div className="md:sticky md:top-0 md:h-screen flex flex-col justify-center py-24 md:py-0">
          
          <div className="text-center px-6 md:px-16 mb-16">
            <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-sage mb-4">
              The Process
            </div>
            <h2 className="font-serif italic text-[38px] md:text-[50px] text-charcoal mb-4">
              From earth to your table.
            </h2>
            <p className="font-subhead italic text-[20px] md:text-[22px] text-warm-gray">
              No molds. No machines. Just hands, clay, and patience.
            </p>
          </div>
          
          {/* Track wrapper - hidden scrollbar on desktop */}
          <div className="px-6 md:px-16 w-full max-w-full overflow-hidden">
            <div 
              ref={trackRef}
              className="flex flex-col md:flex-row gap-8 md:overflow-x-hidden"
              style={{ paddingBottom: '20px' }} // extra space for shadow
            >
              {steps.map((step) => (
                <div 
                  key={step.num}
                  className="relative flex-none w-full md:w-[280px] bg-off-white rounded-2xl p-7 md:p-8 border-l-[3px] border-terracotta shadow-sm overflow-hidden"
                >
                  {/* Watermark Number */}
                  <div className="absolute right-[-10%] bottom-[-5%] font-serif text-[180px] md:text-[200px] text-terracotta opacity-[0.06] select-none pointer-events-none leading-none z-0">
                    {step.num}
                  </div>
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="text-terracotta mb-6">
                      {step.icon}
                    </div>
                    <h4 className="font-serif text-[22px] text-charcoal mb-4">
                      {step.title}
                    </h4>
                    <p className="font-sans text-[14px] text-warm-gray leading-relaxed mb-6">
                      {step.text}
                    </p>
                    <div className="mt-auto aspect-square w-full rounded-xl overflow-hidden mt-6">
                      <img 
                        src={step.photo} 
                        alt={step.title}
                        className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Closing Card to gracefully end the scroll */}
              <div className="relative flex-none w-full md:w-[280px] bg-auto flex items-center justify-center p-8">
                <div className="text-center">
                   <div className="w-16 h-[1px] bg-terracotta/40 mx-auto mb-6"></div>
                   <h4 className="font-serif italic text-[24px] text-charcoal mb-4">
                     Ready for<br />your home.
                   </h4>
                   <p className="font-sans text-[13px] text-warm-gray uppercase tracking-widest cursor-pointer hover:text-terracotta transition-colors" onClick={() => document.getElementById('instagram')?.scrollIntoView({ behavior: 'smooth' })}>
                     See the Drops →
                   </p>
                </div>
              </div>

              {/* Smaller Spacer */}
              <div className="hidden md:block flex-none w-[2vw]"></div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
