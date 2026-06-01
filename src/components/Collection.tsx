import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../utils/useReveal';
import { products } from '../data/products';

const categories = ["All", "Bowls", "Vases", "Plates", "Mugs", "Decorative"];

function ProductCard({ product, index }: { product: typeof products[0], index: number }) {
  const [ref, visible] = useReveal(0.1);

  return (
    <Link 
      to={`/product/${product.id}`}
      ref={ref}
      className="bg-off-white border border-terracotta/15 rounded-xl overflow-hidden mb-8 group block"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(40px)',
        transition: `opacity 600ms ease, transform 600ms ease ${index * 100}ms`
      }}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={product.img} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/15 transition-colors duration-400 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 font-sans text-white uppercase tracking-widest text-sm transition-opacity duration-400">
            View Details
          </span>
        </div>
      </div>
      
      <div className="p-5 flex flex-col items-start h-[calc(100%-75%)]">
        <div className="bg-sage/20 text-sage font-sans text-[11px] uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          {product.category}
        </div>
        <h4 className="font-serif text-[20px] text-charcoal mb-2">
          {product.name}
        </h4>
        <p className="font-sans text-[14px] text-warm-gray mb-4 line-clamp-2">
          {product.desc}
        </p>
        
        <div className="flex items-center justify-between w-full mt-auto">
          {product.status === 'available' ? (
            <span className="font-sans text-[11px] text-white bg-sage px-2 py-1 rounded tracking-wider uppercase">
              Available
            </span>
          ) : (
            <span className="font-sans text-[11px] text-terracotta line-through tracking-wider uppercase">
              Sold
            </span>
          )}
          
          <span className="font-sans text-[13px] text-charcoal group-hover:text-terracotta uppercase tracking-wide transition-colors">
            Inquire →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function Collection() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section id="collection" className="bg-cream py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col items-center text-center pb-16">
          <div className="font-sans text-[10px] tracking-[0.3em] uppercase text-sage mb-4">
            The Collection
          </div>
          <h2 className="font-serif text-[42px] md:text-[52px] text-charcoal mb-6">
            Objects that outlive trends.
          </h2>
          <p className="font-sans text-[17px] text-warm-gray max-w-xl">
            Explore the current collection. Each piece is unique — once it's gone, it's gone.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex overflow-x-auto hide-scrollbar justify-start md:justify-center gap-8 mb-16 pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-sans tracking-widest uppercase text-[13px] whitespace-nowrap pb-2 border-b-2 transition-colors duration-300 ${
                activeFilter === cat 
                  ? 'text-terracotta border-terracotta' 
                  : 'text-warm-gray border-transparent hover:text-charcoal'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {filteredProducts.map((product, idx) => (
            <div key={product.id} className="break-inside-avoid">
              <ProductCard product={product} index={idx} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
