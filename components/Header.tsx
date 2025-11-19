import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-2xl font-bold text-brand">Sindy</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#philosophy" className="text-gray-600 hover:text-brand font-medium transition-colors">신디 이야기</a>
            <a href="#self-care" className="text-gray-600 hover:text-brand font-medium transition-colors">셀프케어</a>
            <a href="#counseling" className="text-gray-600 hover:text-brand font-medium transition-colors">전문가 상담</a>
            <button className="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full font-semibold transition-all">
              앱 다운로드
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-600 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50">신디 이야기</a>
            <a href="#self-care" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50">셀프케어</a>
            <a href="#counseling" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50">전문가 상담</a>
            <div className="pt-4">
                <button className="w-full bg-brand text-white px-5 py-3 rounded-xl font-bold">
                앱 다운로드
                </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};