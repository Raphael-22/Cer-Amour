import { useState, useEffect } from 'react';
import { Instagram, Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if we navigated here with a hash
    if (location.hash) {
      const id = location.hash.replace('#', '');
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  }, [location]);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Shop', id: 'collection' },
    { name: 'Story', id: 'story' },
    { name: 'Process', id: 'process' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`sticky top-0 z-[100] transition-colors duration-300 ${
          scrolled ? 'border-b border-sand bg-cream/95 backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <button 
            className="font-serif text-[18px] text-charcoal cursor-pointer outline-none"
            onClick={() => {
              if (location.pathname !== '/') {
                navigate('/');
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            CÉR·AMOUR
          </button>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="font-sans text-[13px] tracking-[0.12em] uppercase text-charcoal hover:text-terracotta transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
            <a 
              href="https://www.instagram.com/cer.amour/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-charcoal hover:text-terracotta transition-colors duration-300"
            >
              <Instagram size={18} strokeWidth={1.5} />
            </a>
          </div>

          <button 
            className="md:hidden text-charcoal p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[110] bg-cream flex flex-col justify-center items-center transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <button 
          className="absolute top-6 right-6 text-charcoal p-2"
          onClick={() => setMobileMenuOpen(false)}
        >
          <X size={28} strokeWidth={1.5} />
        </button>
        
        <div className="flex flex-col items-center space-y-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollTo(link.id)}
              className="font-serif text-3xl text-charcoal hover:text-terracotta transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
          <a 
            href="https://www.instagram.com/cer.amour/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mt-4 flex items-center space-x-3 text-terracotta"
          >
            <Instagram size={24} strokeWidth={1.5} />
            <span className="font-sans text-sm tracking-widest uppercase">Follow Us</span>
          </a>
        </div>
      </div>
    </>
  );
}
