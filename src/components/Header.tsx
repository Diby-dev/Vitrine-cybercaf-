'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Calculator } from 'lucide-react';

interface HeaderProps {
  onOpenQuoteModal: () => void;
}

export default function Header({ onOpenQuoteModal }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { name: 'À propos', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Domaines', href: '#activities' },
    { name: 'Témoignages', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#1e40af]/95 backdrop-blur-md py-3 shadow-lg border-b border-white/10'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">

          {/* Left Navigation Links avec contour pilule arrondi transparent */}
          <nav className="hidden lg:flex items-center gap-3">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-4 py-1.5 text-xs font-semibold text-white/90 hover:text-white border border-white/30 hover:border-white rounded-full transition-all tracking-wide backdrop-blur-xs"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Center Logo in Pill Outline Oval Badge */}
          <a href="#hero" className="flex items-center justify-center group">
            <div className="px-5 py-1.5 rounded-full border border-white/80 hover:border-white text-white font-black tracking-widest text-sm uppercase transition-all shadow-xs group-hover:scale-105">
              CYBERTECH
            </div>
          </a>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-2 text-xs font-bold text-white border border-white/80 hover:bg-white hover:text-[#1e3a8a] rounded-full transition-all tracking-wide cursor-pointer shadow-xs transform active:scale-95 flex items-center gap-2"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Demander un devis</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenQuoteModal}
              className="px-4 py-1.5 text-xs font-bold text-[#1e3a8a] bg-[#fef08a] rounded-full"
            >
              Devis
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full border border-white/60 text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#1e40af] border-b border-white/20 px-6 pt-4 pb-6 mt-3 shadow-2xl">
          <div className="flex flex-col gap-3 text-center">
            {leftNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-sm font-semibold text-white/90 hover:text-white border border-white/20 rounded-full"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full py-3 text-center text-sm font-bold text-[#1e3a8a] bg-[#fef08a] rounded-full shadow-md"
              >
                Demander un devis instantané
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}