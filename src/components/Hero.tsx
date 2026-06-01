import { useEffect, useState } from 'react';
import { Instagram } from 'lucide-react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCollection = () => {
    document.getElementById('collection')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen pt-20 -mt-20 overflow-hidden bg-cream flex flex-col md:flex-row">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[55%] flex flex-col justify-center px-8 md:px-16 lg:px-24 py-16 md:py-0 z-10">
        <div 
          className="font-sans text-[10px] tracking-[0.3em] text-warm-gray uppercase mb-6 transition-opacity duration-1000 ease-out"
          style={{ opacity: loaded ? 1 : 0 }}
        >
          Handmade Ceramics · Lebanon
        </div>
        
        <h1 className="flex flex-col mb-6">
          <div className="overflow-hidden">
            <span 
              className="block font-serif italic text-6xl md:text-8xl lg:text-[96px] text-charcoal leading-none transition-all duration-800 ease-out"
              style={{ 
                opacity: loaded ? 1 : 0, 
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '150ms'
              }}
            >
              Shaped
            </span>
          </div>
          <div className="overflow-hidden">
            <span 
              className="block font-serif font-bold text-6xl md:text-8xl lg:text-[96px] text-terracotta leading-none transition-all duration-800 ease-out"
              style={{ 
                opacity: loaded ? 1 : 0, 
                transform: loaded ? 'translateY(0)' : 'translateY(30px)',
                transitionDelay: '300ms'
              }}
            >
              by Love.
            </span>
          </div>
        </h1>
        
        <p 
          className="font-subhead text-[20px] md:text-[22px] text-warm-gray leading-[1.6] max-w-md mb-10 transition-opacity duration-1000"
          style={{ 
            opacity: loaded ? 1 : 0,
            transitionDelay: '600ms'
          }}
        >
          Handcrafted ceramics born from a pine hill above the Mediterranean. Every piece tells Lebanon's story.
        </p>

        <div 
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12 transition-all duration-1000"
          style={{ 
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'translateY(0)' : 'translateY(20px)',
            transitionDelay: '750ms'
          }}
        >
          <button 
            onClick={scrollToCollection}
            className="bg-terracotta hover:bg-terra-dark text-white px-9 py-4 rounded-full font-sans text-sm tracking-wide transition-colors duration-300"
          >
            Explore the Collection ↓
          </button>
          
          <a 
            href="https://www.instagram.com/cer.amour/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-terracotta font-sans text-sm uppercase tracking-wide hover:opacity-80 transition-opacity"
          >
            <Instagram size={18} strokeWidth={1.5} />
            <span>DM on Instagram</span>
          </a>
        </div>
        
        <div 
          className="font-sans text-[11px] tracking-[0.15em] text-sage uppercase transition-opacity duration-1000"
          style={{ 
            opacity: loaded ? 1 : 0,
            transitionDelay: '900ms'
          }}
        >
          Each piece is one of a kind · Signed by the artist
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[45%] h-[60vh] md:h-screen relative flex items-center justify-center -mt-10 md:mt-0">
        <div 
          className="relative w-full max-w-[450px] aspect-[3/4] mr-0 md:mr-16"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }} // reduced parallax speed for better mobile feel
        >
          {/* BOTTOM LAYER */}
          <div 
            className="absolute inset-0 transition-all duration-800 ease-out shadow-xl"
            style={{ 
              opacity: loaded ? 1 : 0, 
              transform: loaded ? 'translateX(0) rotate(-3deg)' : 'translateX(60px) rotate(-3deg)',
              transitionDelay: '600ms',
              backgroundImage: 'url("https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=800&auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* MIDDLE LAYER */}
          <div 
            className="absolute top-[10%] left-[-15%] w-[80%] h-[70%] transition-all duration-800 ease-out shadow-2xl outline outline-1 outline-sand/30"
            style={{ 
              opacity: loaded ? 1 : 0, 
              transform: loaded ? 'translateX(0) rotate(2deg)' : 'translateX(60px) rotate(2deg)',
              transitionDelay: '800ms',
              backgroundImage: 'url("https://images.unsplash.com/photo-1567598508481-65a7a5553285?w=800&auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* TOP LAYER */}
          <div 
            className="absolute bottom-[-5%] right-[-10%] w-[75%] h-[60%] transition-all duration-800 ease-out shadow-2xl outline outline-1 outline-sand/50"
            style={{ 
              opacity: loaded ? 1 : 0, 
              transform: loaded ? 'translateX(0) rotate(-1deg)' : 'translateX(60px) rotate(-1deg)',
              transitionDelay: '1000ms',
              backgroundImage: 'url("https://images.unsplash.com/photo-1565732630869-c3b0b78ac748?w=800&auto=format&fit=crop&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
      </div>
      
      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <span className="font-sans text-[10px] tracking-[0.2em] text-warm-gray uppercase mb-3">
          Scroll to discover
        </span>
        <div className="w-[1px] h-12 bg-sand overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full bg-terracotta animate-[slideDown_1.5s_ease-in-out_infinite]" />
        </div>
      </div>
      <style>{`
        @keyframes slideDown {
          0% { transform: translateY(-100%); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(100%); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
