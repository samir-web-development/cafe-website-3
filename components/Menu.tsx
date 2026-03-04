import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { MenuItem } from '../types';
import { Plus, Check } from 'lucide-react';

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'brew' | 'bakery' | 'savory'>('brew');

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-coffee-500 text-sm font-bold tracking-widest uppercase mb-2">Our Offerings</p>
          <h2 className="text-4xl md:text-5xl font-serif text-coffee-900 mb-6">Curated for Comfort</h2>
          <div className="flex justify-center gap-8 border-b border-stone-100 inline-flex mx-auto">
            <CategoryButton label="The Brew" isActive={activeCategory === 'brew'} onClick={() => setActiveCategory('brew')} />
            <CategoryButton label="Bakery" isActive={activeCategory === 'bakery'} onClick={() => setActiveCategory('bakery')} />
            <CategoryButton label="Savory" isActive={activeCategory === 'savory'} onClick={() => setActiveCategory('savory')} />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
          {filteredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CategoryButton: React.FC<{ label: string; isActive: boolean; onClick: () => void }> = ({ label, isActive, onClick }) => (
  <button
    onClick={onClick}
    className={`pb-4 text-sm tracking-widest uppercase transition-colors relative ${
      isActive ? 'text-coffee-800' : 'text-stone-400 hover:text-stone-600'
    }`}
  >
    {label}
    {isActive && (
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-0.5 bg-coffee-800 transition-all"></span>
    )}
  </button>
);

const MenuCard: React.FC<{ item: MenuItem }> = ({ item }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex gap-4 group cursor-pointer relative p-4 -mx-4 rounded-lg hover:bg-stone-50 transition-colors duration-300">
      <div className="w-20 h-20 shrink-0 overflow-hidden rounded-sm relative">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <div className="flex justify-between items-baseline mb-1 border-b border-dashed border-stone-200 pb-1">
          <h3 className="font-serif text-xl text-coffee-900 group-hover:text-coffee-600 transition-colors">{item.name}</h3>
          <span className="font-sans text-coffee-600 font-bold text-sm">{item.price}</span>
        </div>
        <div className="flex justify-between items-end">
          <p className="text-stone-500 text-sm font-light leading-snug w-3/4">{item.description}</p>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              handleAdd();
            }}
            className={`p-2 rounded-full transition-all duration-300 ${
              added ? 'bg-coffee-600 text-white' : 'bg-coffee-50 text-coffee-600 hover:bg-coffee-200'
            }`}
            aria-label={`Add ${item.name} to order`}
          >
            {added ? <Check size={16} /> : <Plus size={16} />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;