import { Instagram } from 'lucide-react';
import { useReveal } from '../utils/useReveal';

const images = [
  "https://images.unsplash.com/photo-1612831197450-1a57e0d2c87e?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1595854341625-f33e596b0e23?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1567598508481-65a7a5553285?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=400&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1520970014086-2208d157c9e2?w=400&auto=format&fit=crop&q=80"
];

export default function InstagramWall() {
  const [ref, visible] = useReveal(0.1);

  return (
    <section className="bg-charcoal py-20 md:py-24 px-6 md:px-16" id="instagram">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-terracotta mb-4">
            @cer.amour
          </div>
          <h2 className="font-serif italic text-[36px] md:text-[44px] text-off-white mb-4">
            Follow the kiln.
          </h2>
          <p className="font-sans text-[16px] md:text-[17px] text-off-white/65 max-w-md mx-auto">
            New pieces drop on Instagram. Follow to never miss a drop.
          </p>
        </div>

        {/* Grid */}
        <div 
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 w-full max-w-5xl mb-16"
        >
          {images.map((img, i) => (
            <a
              key={i}
              href="https://www.instagram.com/cer.amour/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group block"
              style={{
                opacity: visible ? 1 : 0,
                transform: visible ? 'scale(1)' : 'scale(0.95)',
                transition: `opacity 600ms ease ${i * 100}ms, transform 600ms ease ${i * 100}ms`
              }}
            >
              <img 
                src={img} 
                alt="Instagram post" 
                className="w-full h-full object-cover transition-transform duration-350 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-terracotta/0 group-hover:bg-terracotta/25 transition-colors duration-350 ease-out flex items-center justify-center">
                <Instagram 
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-350" 
                  size={32}
                  strokeWidth={1.5}
                />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <a 
          href="https://www.instagram.com/cer.amour/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block border-2 border-terracotta text-terracotta bg-transparent hover:bg-terracotta hover:text-white font-sans text-sm tracking-wide uppercase px-8 py-4 rounded-full transition-colors duration-300"
        >
          Follow @cer.amour on Instagram
        </a>

      </div>
    </section>
  );
}
