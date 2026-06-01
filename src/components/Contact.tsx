import { Instagram } from 'lucide-react';
import { useReveal } from '../utils/useReveal';

// Custom WhatsApp Icon since lucide doesn't have a specific brand icon for it typically,
// but we can use an SVG path
const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function Contact() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section id="contact" className="bg-terracotta py-24 px-6 md:px-16 overflow-hidden">
      <div 
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between"
      >
        
        {/* LEFT COLUMN */}
        <div 
          className="w-full md:w-1/2 pr-0 md:pr-16 mb-20 md:mb-0 text-white"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateX(0)' : 'translateX(-60px)',
            transition: 'opacity 700ms ease, transform 700ms ease'
          }}
        >
          <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-white/60 mb-5">
            Order / Inquire
          </div>
          
          <h2 className="font-serif italic text-[38px] md:text-[46px] text-white leading-[1.2] mb-6">
            Ready to bring a piece of Lebanon home?
          </h2>
          
          <p className="font-sans text-[16px] md:text-[17px] text-white/80 leading-[1.7] mb-10 max-w-lg">
            Each CÉR·AMOUR piece is made to order or available while stock lasts. 
            Reach out on Instagram or WhatsApp — Mira personally answers every message.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a 
              href="https://www.instagram.com/cer.amour/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 bg-white text-terracotta hover:bg-white/90 font-sans text-sm tracking-wide px-8 py-4 rounded-full transition-colors duration-300"
            >
              <Instagram size={18} strokeWidth={1.5} />
              <span>DM on Instagram</span>
            </a>
            
            <a 
              href="https://wa.me/96170000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-3 border-2 border-white text-white hover:bg-white hover:text-terracotta font-sans text-sm tracking-wide px-8 py-4 rounded-full transition-colors duration-300"
            >
              <WhatsAppIcon />
              <span>WhatsApp Mira</span>
            </a>
          </div>
          
          <p className="font-sans text-[12px] text-white/55 mt-10 max-w-xs">
            Based in Lebanon · Ships within Lebanon · International shipping available
          </p>
        </div>

        {/* RIGHT COLUMN - "Postcard" */}
        <div 
          className="w-full md:w-[45%] flex justify-center md:justify-end"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? 'rotate(-2deg) scale(1)' : 'rotate(-15deg) scale(0.9)',
            transition: 'opacity 700ms ease, transform 1000ms cubic-bezier(0.34, 1.56, 0.64, 1)'
          }}
        >
          <div className="bg-off-white rounded-xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.2)] max-w-md w-full relative">
            <div className="flex justify-center mb-8">
              <div className="w-24 h-24 rounded-full overflow-hidden border border-sand/30 shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1565032284150-a51c11cae6d2?w=300&auto=format&fit=crop&q=80" 
                  alt="Ceramic piece" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <span className="font-subhead italic text-[14px] text-warm-gray">
                A note from Mira:
              </span>
            </div>
            
            <blockquote className="font-subhead italic text-[20px] text-charcoal leading-[1.6] text-center mb-8">
              "Every time I press a leaf into clay, I'm making a small promise —
              that this piece will outlast the news cycle, the crisis, the noise.
              It will just be beautiful. That's enough."
            </blockquote>
            
            <div className="text-center mb-8">
              <span className="font-serif italic text-[16px] text-terracotta">
                — Mira Melki
              </span>
            </div>
            
            <div className="flex flex-col items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-sage mb-4">
                <path d="M12 22V12" />
                <path d="M12 12C12 6.5 7.5 2 2 2c0 5.5 4.5 10 10 10z" />
                <path d="M12 12c0-5.5 4.5-10 10-10 0 5.5-4.5 10-10 10z" />
              </svg>
              <div className="font-sans text-[11px] tracking-[0.15em] text-warm-gray uppercase">
                Lebanon, {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
