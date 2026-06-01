import { Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id: string) => {
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal pt-16 pb-8 px-6 md:px-16" id="footer">
      <div className="max-w-7xl mx-auto flex flex-col">
        
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-0 mb-16 text-center md:text-left">
          
          {/* Left Column */}
          <div className="flex flex-col items-center md:items-start">
            <h2 className="font-serif text-[20px] text-off-white mb-2">
              CÉR·AMOUR
            </h2>
            <p className="font-subhead italic text-[14px] text-off-white/50">
              Lebanese soul craftsmanship
            </p>
          </div>

          {/* Center Column - Links */}
          <div className="flex items-center space-x-6 text-off-white/60 font-sans text-[13px]">
            <button onClick={() => scrollTo('story')} className="hover:text-terracotta transition-colors">Story</button>
            <span>·</span>
            <button onClick={() => scrollTo('collection')} className="hover:text-terracotta transition-colors">Collection</button>
            <span>·</span>
            <button onClick={() => scrollTo('process')} className="hover:text-terracotta transition-colors">Process</button>
            <span>·</span>
            <button onClick={() => scrollTo('contact')} className="hover:text-terracotta transition-colors">Contact</button>
          </div>

          {/* Right Column */}
          <div className="flex flex-col items-center md:items-end">
            <div className="flex items-center space-x-3 mb-4">
              <span className="font-sans text-[11px] text-off-white/40 uppercase tracking-[0.1em]">
                Follow us
              </span>
              <a 
                href="https://www.instagram.com/cer.amour/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-off-white/60 hover:text-terracotta transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={18} strokeWidth={1.5} />
              </a>
            </div>
            <div className="font-sans text-[11px] text-off-white/35">
              Made with love in Lebanon 🇱🇧
            </div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-off-white/10 pt-6">
          <p className="font-sans text-[11px] text-off-white/30 text-center uppercase tracking-wider">
            © {new Date().getFullYear()} CÉR·AMOUR by Mira Melki · All pieces handmade in Lebanon · Website concept by NXTPromotes
          </p>
        </div>

      </div>
    </footer>
  );
}
