import React from 'react';
import { Leaf, WifiOff, BookOpen } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-coffee-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://picsum.photos/id/225/400/500"
                alt="Tea setting"
                className="rounded-sm object-cover h-64 w-full mt-12"
              />
              <img
                src="https://picsum.photos/id/30/400/500"
                alt="Cozy mug"
                className="rounded-sm object-cover h-64 w-full"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-coffee-300 opacity-50"></div>
          </div>

          {/* Text Content */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-serif text-coffee-900">
              More than just coffee, <br />
              <span className="italic text-coffee-600">it's a state of mind.</span>
            </h2>
            <div className="h-px w-20 bg-coffee-300"></div>
            <p className="text-stone-600 leading-relaxed font-light text-lg">
              Cozy Cup was born from a simple desire: to create a space where the noise of the world fades away.
              Nestled in the heart of the city, we offer a refuge where time slows down. We believe in sustainable sourcing,
              artisanal methods, and the power of silence.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <Feature icon={<Leaf size={20} />} title="Organic" text="Ethically sourced beans." />
              <Feature icon={<WifiOff size={20} />} title="Unplug" text="No screens, just connection." />
              <Feature icon={<BookOpen size={20} />} title="Read" text="Curated library for guests." />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
  <div className="flex flex-col gap-2">
    <div className="text-coffee-600">{icon}</div>
    <h3 className="font-serif text-lg text-coffee-900">{title}</h3>
    <p className="text-xs text-stone-500 uppercase tracking-wide">{text}</p>
  </div>
);

export default About;