import React, { useState, useEffect } from 'react';
import { Coffee, Menu as MenuIcon, X, MapPin, ShoppingBag } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCartClick = () => {
    // Simple simulation of cart interaction
    setCartCount(prev => prev + 1);
    alert("Cart feature coming soon! For now, enjoy the menu.");
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Visit', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? 'bg-coffee-50/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className={`p-2 rounded-full transition-colors ${isScrolled ? 'bg-coffee-100 text-coffee-800' : 'bg-white/20 text-white backdrop-blur-md'}`}>
             <Coffee size={24} strokeWidth={1.5} />
          </div>
          <span className={`text-2xl font-serif font-semibold tracking-wide ${isScrolled ? 'text-coffee-900' : 'text-white'}`}>
            Cozy Cup
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`text-sm font-medium tracking-widest uppercase hover:text-coffee-500 transition-colors ${
                isScrolled ? 'text-stone-600' : 'text-stone-200'
              }`}
            >
              {link.name}
            </a>
          ))}
          
          <div className="w-px h-4 bg-stone-300 mx-2"></div>
          
          <div className="flex items-center gap-4">
            <a 
              href="#contact" 
              className={`hover:text-coffee-500 transition-colors ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}
              title="Find Us"
            >
              <MapPin size={20} />
            </a>
            <button 
              onClick={handleCartClick}
              className={`hover:text-coffee-500 transition-colors relative ${isScrolled ? 'text-stone-600' : 'text-stone-200'}`}
              title="Order"
            >
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-coffee-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-coffee-500"></span>
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-coffee-800"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
             <X size={28} className={isScrolled ? 'text-coffee-900' : 'text-white'} />
          ) : (
             <MenuIcon size={28} className={isScrolled ? 'text-coffee-900' : 'text-white'} />
          )}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-coffee-50 border-t border-coffee-200 shadow-xl md:hidden flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-serif text-coffee-900 py-2 border-b border-coffee-100 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex gap-4 mt-4 pt-4 border-t border-coffee-200">
            <a href="#contact" className="flex items-center gap-2 text-coffee-800" onClick={() => setIsMobileMenuOpen(false)}>
               <MapPin size={20} /> <span className="uppercase text-sm tracking-widest">Find Us</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;