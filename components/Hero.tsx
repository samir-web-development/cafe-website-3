import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/42/1920/1280"
          alt="Coffee on table"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-coffee-100 text-sm md:text-base tracking-[0.3em] uppercase mb-4 animate-fade-in-up">
          Est. 2024
        </p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-light mb-6 leading-tight animate-fade-in-up delay-100">
          Sip into <span className="italic font-normal text-coffee-200">Serenity</span>
        </h1>
        <p className="text-stone-200 text-lg md:text-xl font-light max-w-lg mx-auto mb-10 leading-relaxed animate-fade-in-up delay-200">
          A sanctuary for thinkers, dreamers, and coffee lovers. Experience the quietude of the perfect brew.
        </p>
        <a
          href="#menu"
          className="inline-block px-8 py-3 border border-white/30 hover:bg-white hover:text-coffee-900 text-white transition-all duration-300 rounded-sm uppercase text-xs tracking-widest font-bold animate-fade-in-up delay-300"
        >
          View Menu
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <ArrowDown size={24} />
      </div>
    </section>
  );
};

export default Hero;