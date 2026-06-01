import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import { Instagram } from 'lucide-react';

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

export default function ProductDetails() {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoaded(true);
  }, [id]);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-cream px-6">
        <h2 className="font-serif text-[32px] text-charcoal mb-4">Piece not found.</h2>
        <Link to="/" className="font-sans text-terracotta border-b border-terracotta pb-1 uppercase tracking-widest text-sm">
          Return to Collection
        </Link>
      </div>
    );
  }

  const whatsappMessage = encodeURIComponent(`Hello Mira, I would like to inquire about the "${product.name}". Is it still available for order?`);
  const whatsappUrl = `https://wa.me/96170968563?text=${whatsappMessage}`;

  return (
    <main className="bg-cream pt-24 pb-32 px-6 md:px-16 min-h-[85vh] flex items-center">
      <div className="max-w-6xl mx-auto w-full">
        
        <Link to="/" className="inline-flex items-center space-x-2 text-warm-gray hover:text-charcoal transition-colors mb-10 font-sans text-[11px] uppercase tracking-widest">
          <span>← Back to Collection</span>
        </Link>
        
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Left Column - Image */}
          <div 
            className="w-full md:w-1/2"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 800ms ease, transform 800ms ease'
            }}
          >
            <div className="aspect-[4/5] md:aspect-square rounded-2xl overflow-hidden border border-terracotta/20 shadow-xl bg-sand">
              <img 
                src={product.img} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column - Details */}
          <div 
            className="w-full md:w-1/2 flex flex-col justify-center"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'opacity 800ms ease 150ms, transform 800ms ease 150ms'
            }}
          >
            <div className="mb-4">
              <span className="bg-sage/10 text-sage font-sans text-[11px] uppercase tracking-[0.2em] px-4 py-1.5 rounded-full">
                {product.category}
              </span>
            </div>
            
            <h1 className="font-serif text-[42px] md:text-[54px] text-charcoal leading-[1.1] mb-6">
              {product.name}
            </h1>
            
            <div className="flex items-center space-x-4 mb-8">
              {product.status === 'available' ? (
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-sage relative">
                    <span className="absolute inset-0 rounded-full bg-sage animate-ping opacity-50"></span>
                  </span>
                  <span className="font-sans text-[12px] text-sage tracking-widest uppercase">Available to Order</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-terracotta"></span>
                  <span className="font-sans text-[12px] text-terracotta tracking-widest uppercase">Currently Sold Out (Inquire for Similar)</span>
                </div>
              )}
            </div>
            
            <div className="h-[1px] w-full bg-sand/60 mb-8"></div>
            
            <p className="font-sans text-[16px] md:text-[18px] leading-relaxed text-warm-gray mb-12">
              {product.desc}
              <br /><br />
              <span className="italic font-subhead">Each piece is handmade on the pine hill. Minor variations in glaze and form are the natural signature of the artist's hands.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-auto">
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-3 bg-terracotta hover:bg-terra-dark text-white font-sans text-[13px] tracking-wide uppercase px-8 py-5 rounded-full transition-colors duration-300"
              >
                <WhatsAppIcon />
                <span>Order via WhatsApp</span>
              </a>
              
              <a 
                href="https://www.instagram.com/direct/new/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-3 border-2 border-terracotta/30 text-charcoal hover:border-terracotta font-sans text-[13px] tracking-wide uppercase px-8 py-5 rounded-full transition-colors duration-300"
              >
                <Instagram size={18} strokeWidth={1.5} />
                <span>DM on Instagram</span>
              </a>
            </div>
            
          </div>
          
        </div>
      </div>
    </main>
  );
}
