import { useReveal } from '../utils/useReveal';

export default function Philosophy() {
  const [ref, visible] = useReveal(0.2);

  return (
    <section className="bg-sand border-y border-sand/50 overflow-hidden relative py-32 px-6 md:px-16" id="philosophy">
      <div 
        ref={ref}
        className="max-w-4xl mx-auto flex flex-col items-center text-center"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'translateY(0)' : 'translateY(40px)',
          transition: 'opacity 1000ms ease, transform 1000ms ease'
        }}
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-terracotta mb-8">
            <path d="M7 8c1.5 0 2.8-.8 3.5-2 .7 1.2 2 2 3.5 2 1.5 0 2.8-.8 3.5-2-1.5-1.5-3.5-2-5.5-2S8 4.5 6.5 6C7.2 7.2 8.5 8 10 8z" />
            <path d="M12 22V6" />
        </svg>
        <h3 className="font-serif italic text-[32px] md:text-[42px] text-charcoal leading-[1.3] mb-6">
          "Slow down. <br className="md:hidden" />Touch the earth. <br className="md:hidden" />Share the beauty."
        </h3>
        <p className="font-sans text-[15px] md:text-[17px] text-warm-gray max-w-2xl leading-relaxed">
          In a world that moves too fast, CÉR·AMOUR invites you to return to the essentials. 
          The weight of a clay bowl in your hands, the texture of a dried leaf, the quiet ritual of a morning coffee. 
          Every piece is meant to ground you in the present moment.
        </p>
      </div>
    </section>
  );
}
