import { Menu, X } from 'lucide-react';

import { useState } from 'react';
import picture from './figma/assets/NEW ART V.png';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return ( 
  <>
    <header className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mx-auto h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 text-align-center">
              <div className="w-8 h-8 bg-gradient-to-br   flex items-center justify-center">
                <img
                          src={picture}
                          alt="Modern printing office"
                          className="w-full h-full object-cover"
                        />
              </div>
              <span className="text-white text-xl font-semibold">NewarT</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden   px-8 text-align-center justify-center   md:flex  gap-8">
      
            <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">
             اتصل بنا
            </button>
             <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">
              من نحن
            </button>
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">
           الخدمات
            </button>
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors">
           الرئيسية
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-white/80 hover:text-white transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors text-left">
                About us
              </button>
              <button onClick={() => scrollToSection('clients')} className="text-white/80 hover:text-white transition-colors text-left">
                Clients
              </button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors text-left">
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header> 
    </>
  );
}
