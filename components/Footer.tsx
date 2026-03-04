import React, { useState } from 'react';
import { MapPin, Instagram, Mail, Phone, Map } from 'lucide-react';

const Footer: React.FC = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <footer id="contact" className="bg-coffee-900 text-coffee-100 py-20 border-t-4 border-coffee-700 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* Brand */}
        <div className="space-y-6">
          <h3 className="text-3xl font-serif">Cozy Cup</h3>
          <p className="text-coffee-200 font-light leading-relaxed max-w-xs">
            A quiet corner in a noisy world. Dedicated to the art of slowing down, one cup at a time.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#" onClick={(e) => e.preventDefault()} className="p-2 bg-coffee-800 rounded-full hover:bg-coffee-700 transition-colors group">
              <Instagram size={18} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="#" onClick={(e) => e.preventDefault()} className="p-2 bg-coffee-800 rounded-full hover:bg-coffee-700 transition-colors group">
              <Mail size={18} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Visit Us */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif tracking-wide border-b border-coffee-800 pb-2 inline-block">Visit Us</h4>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start group cursor-pointer" onClick={() => setShowMap(!showMap)}>
              <MapPin className="text-coffee-500 mt-1 shrink-0 group-hover:text-coffee-300 transition-colors" size={18} />
              <span className="text-coffee-200 font-light group-hover:text-white transition-colors">
                124 Quiet Lane, <br />
                Indiranagar, Bangalore 560038
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone className="text-coffee-500 shrink-0" size={18} />
              <span className="text-coffee-200 font-light">+91 98765 43210</span>
            </li>
            <li>
              <button
                onClick={() => setShowMap(!showMap)}
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-coffee-400 hover:text-white transition-colors mt-2"
              >
                <Map size={16} />
                {showMap ? 'Hide Map' : 'View on Map'}
              </button>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div className="space-y-6">
          <h4 className="text-lg font-serif tracking-wide border-b border-coffee-800 pb-2 inline-block">Opening Hours</h4>
          <ul className="space-y-3">
            <li className="flex justify-between text-coffee-200 font-light border-b border-coffee-800/50 pb-2">
              <span>Mon - Fri</span>
              <span className="font-normal text-white">7:00 AM - 4:00 PM</span>
            </li>
            <li className="flex justify-between text-coffee-200 font-light border-b border-coffee-800/50 pb-2">
              <span>Saturday</span>
              <span className="font-normal text-white">8:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between text-coffee-200 font-light pb-2">
              <span>Sunday</span>
              <span className="font-normal text-coffee-400">Closed for Rest</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Map Integration */}
      <div
        className={`max-w-7xl mx-auto px-6 overflow-hidden transition-all duration-700 ease-in-out ${showMap ? 'max-h-[500px] opacity-100 mt-12' : 'max-h-0 opacity-0 mt-0'
          }`}
      >
        <div className="w-full h-80 rounded-sm overflow-hidden border border-coffee-800 relative bg-coffee-800">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.003673390977!2d77.63673731482196!3d12.97159899085576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a7c3645b0d%3A0x6b16b47d51952044!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1633072844855!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'grayscale(100%) invert(90%) hue-rotate(180deg) contrast(80%)' }}
            allowFullScreen
            loading="lazy"
            title="Cozy Cup Location"
          ></iframe>
          <div className="absolute top-0 right-0 bg-coffee-900/80 text-white text-xs px-2 py-1">
            Google Maps
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-coffee-800 flex flex-col md:flex-row justify-between items-center text-xs text-coffee-400 font-light tracking-wider uppercase">
        <p>&copy; 2024 Cozy Cup Cafe. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Designed with Silence & Solitude</p>
      </div>
    </footer>
  );
};

export default Footer;