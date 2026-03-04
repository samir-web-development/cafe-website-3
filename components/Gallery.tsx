import React from 'react';
import { GALLERY_ITEMS, TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="bg-coffee-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
           <h2 className="text-4xl md:text-5xl font-serif text-coffee-900">Moments of Calm</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
           {/* Photo Grid */}
           <div className="grid grid-cols-2 gap-4 h-fit">
              {GALLERY_ITEMS.map((item, idx) => (
                <div key={item.id} className={`overflow-hidden rounded-sm ${item.span ? 'col-span-2 row-span-2' : ''} ${idx === 1 ? 'md:mt-8' : ''}`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 ease-out"
                  />
                </div>
              ))}
           </div>

           {/* Testimonials Slider (Static for now) */}
           <div className="flex flex-col justify-center bg-white p-12 rounded-sm shadow-sm border border-coffee-100">
              <Quote className="text-coffee-300 mb-6" size={48} />
              <div className="space-y-12">
                {TESTIMONIALS.map((t) => (
                  <div key={t.id} className="border-l-2 border-coffee-200 pl-6">
                    <p className="text-lg font-serif italic text-stone-700 mb-4 leading-relaxed">"{t.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-px bg-coffee-300"></div>
                      <p className="text-xs font-bold uppercase tracking-widest text-coffee-900">
                        {t.author} <span className="text-stone-400 font-normal normal-case ml-1">— {t.role}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;