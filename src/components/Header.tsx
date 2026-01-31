import { Menu, X } from 'lucide-react';
import { link } from "react-router-dom"

import { useState } from 'react';
// import picture from './figma/ImageWithFallback';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
const [open , setOpen ] =useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return ( 
  <>
  
    <header className="fixed top-0 left-0 right-0 bg-white backdrop-blur-sm z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mx-auto h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2 text-align-center">
              <div className="w-11 h-8 bg-gradient-to-br  absolute left-0 top-1/2 -translate-y-1/2  flex items-center justify-center">
                <img 
                          src={picture}
                          alt="Modern printing office"
                          className="w-11 h-8 object-cover"
                        />
              </div>
              {/* <span className="text-black text-xl font-semibold">NewarT</span> */}
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden   px-8 text-align-center justify-center  items-center md:flex  gap-8">
      
            <button onClick={() => scrollToSection('contact')} className="text-sky-950 hover:text-orange-600 transition-colors">
             اتصل بنا
            </button>
             <button onClick={() => scrollToSection('about')} className="text-sky-950 hover:text-orange-600 transition-colors">
              من نحن
            </button>
              {/* <button onClick={() => scrollToSection('services')} className="text-white/80 hover:text-white transition-colors">
           الخدمات

            </button> */}

            <li className='relative group cursor-pointer' onMouseEnter={()=>window.innerWidth>=768 && setOpen(true)} onMouseLeave={()=>window.innerWidth>=768 && setOpen(false)}>
            <button onClick={()=>window.innerWidth<768 && setOpen(!open) } className='flex items-center gap-1 font-small text-black hover:text-orange-600 dark:hover:text-orange-400'>
                        الخدمات<span className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}>{open ? '▲' : '▼'}</span>
              </button> 
              {open && (
                 <ul className='absolute left-0 top-full mt-4w-50 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:opacity-100 group-hover:visible transition-all duration-200'>
                <li className='px-4 py-8 hover:bg-gray-100'>لاصقات  بطاقات تعريف</li>
                <li className='px-4 py-8 hover:bg-gray-100'>عروض المعارض</li>
                <li className='px-4 py-8 hover:bg-gray-100'>لافتات</li>
                <li className='px-4 py-8 hover:bg-gray-100'>لوحات دعائية</li>
                <li className='px-4 py-8 hover:bg-gray-100'>استيكرات السيارات</li>
                <li className='px-4 py-8 hover:bg-gray-100'>زي موحّد</li>

                


              </ul>
              )}
          
            </li>
              <button onClick={() => scrollToSection('home')} className="text-sky-950 hover:text-orange-600 transition-colors">
           الرئيسية
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-sky-950 p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              <button onClick={() => scrollToSection('home')} className="text-black hover:text-black transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('services')} className="text-black hover:text-black transition-colors text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('about')} className="text-black hover:text-black transition-colors text-left">
                About us
              </button>
              <button onClick={() => scrollToSection('clients')} className="text-dark hover:text-blacklors text-left">
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
