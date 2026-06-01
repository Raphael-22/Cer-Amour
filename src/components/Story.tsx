import { useReveal } from '../utils/useReveal';

export default function Story() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section id="story" className="bg-off-white py-24 md:py-32 px-6 md:px-16 overflow-hidden">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-start"
      >
        {/* LEFT COLUMN */}
        <div 
          className="w-full md:w-[45%] pr-0 md:pr-12 mb-16 md:mb-0 pt-8"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          {/* Decorative olive branch SVG */}
          <div className="mb-10 text-sage">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 8c1.5 0 2.8-.8 3.5-2 .7 1.2 2 2 3.5 2 1.5 0 2.8-.8 3.5-2-1.5-1.5-3.5-2-5.5-2S8 4.5 6.5 6C7.2 7.2 8.5 8 10 8z" />
              <path d="M12 22V6" />
              <path d="M12 14c-1.5 0-2.8.8-3.5 2-.7-1.2-2-2-3.5-2 1.5 1.5 3.5 2 5.5 2s4-1.5 5.5-3c-.7 1.2-2 2-3.5 2z" />
              <path d="M12 10c1.5 0 2.8-.8 3.5-2 .7 1.2 2 2 3.5 2 1.5 0 2.8.8 3.5 2-1.5 1.5-3.5 2-5.5 2s-4-1.5-5.5-3c.7-1.2 2-2 3.5-2z" />
            </svg>
          </div>
          
          <h2 className="font-subhead italic text-[32px] md:text-[38px] text-terracotta leading-[1.3] mb-6">
            "A mosaic of culture, a mix of emotions — just like Lebanon itself."
          </h2>
          <p className="font-sans text-[13px] text-warm-gray">
            — Mira Melki, founder
          </p>
        </div>

        {/* RIGHT COLUMN */}
        <div 
          className="w-full md:w-[55%] flex flex-col pt-0 md:pt-12"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(60px)',
            transition: 'opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-sage mb-4">
            The Story
          </div>
          
          <h3 className="font-serif text-[36px] md:text-[44px] text-charcoal leading-[1.2] mb-8">
            Born on a pine hill, overlooking the sea.
          </h3>
          
          <div className="font-sans text-[16px] text-warm-gray leading-[1.75] space-y-6">
            <p>
              CÉR·AMOUR began the way the most sincere things do — quietly, between motherhood and clay. 
              Mira Melki, a Lebanese artist and ceramicist, found her practice on a pine-covered hill 
              above the Mediterranean, where the light changes slowly and the air smells of salt and olive wood.
            </p>
            
            <p>
              Her pieces carry the imprint of that place — literally. Olive leaves pressed into raw clay 
              before firing. Rattan textures from village baskets. Oak bark rolled across wet surfaces. 
              Every motif is a fingerprint of Lebanese terroir, fired into permanence.
            </p>
            
            <p>
              CÉR·AMOUR is not a factory. It is one artist, one studio, and two hands shaping the land 
              into objects you can hold.
            </p>
          </div>
          
          <div className="mt-12">
            <a 
              href="https://www.instagram.com/cer.amour/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-sage hover:bg-opacity-90 text-white font-sans text-sm tracking-wide px-8 py-3 rounded-full transition-colors duration-300"
            >
              Follow the journey @cer.amour →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
