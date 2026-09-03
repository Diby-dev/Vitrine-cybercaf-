'use client';

import Image from 'next/image';
import { Calculator, ArrowRight, Monitor, BookOpen, Printer, FileText, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-[92vh] pt-36 pb-20 flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2563eb] via-[#1d4ed8] to-[#1e3a8a] text-white">
      
      {/* Background Graphic Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <Image
          src="/images/hero.jpg"
          alt="Espace Cyber Cafe"
          fill
          priority
          className="object-cover object-center filter saturate-150"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a8a] via-[#1d4ed8]/80 to-[#2563eb]/60" />
      </div>

      {/* Decorative ambient glowing sphere */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text (Exact Darle typographic hierarchy) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#fef08a] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cyber Café & Espace Numérique</span>
            </div>

            {/* Main Headline (Darle Serif Style in Cream Yellow) */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-semibold tracking-tight text-[#fef08a] leading-[1.1]">
              Un espace numérique <br />
              <span className="font-sans font-extrabold text-white">à votre écoute</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl font-normal leading-relaxed">
              Découvrez <strong className="text-white font-semibold">CYBERTECH</strong>, l'espace informatique intelligent qui s'adapte intuitivement à vos besoins : navigation haut débit, formations Excel & Word, impression HD et rédaction de vos documents officiels.
            </p>

            {/* Bottom Cream Pill Button (Exact Darle bottom left CTA button) */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="px-8 py-3.5 text-sm font-bold text-[#1e3a8a] bg-[#fef08a] hover:bg-yellow-200 rounded-full shadow-lg shadow-blue-950/30 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center gap-2.5"
              >
                <Calculator className="w-4 h-4" />
                <span>Demander un devis</span>
              </button>

              <a
                href="#services"
                className="px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white rounded-full transition-all flex items-center gap-2"
              >
                <span>Nos services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column Feature Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all text-left">
              <div className="p-3 rounded-xl bg-[#fef08a] text-[#1e3a8a] w-max font-bold mb-3">
                <Monitor className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Postes PC Fibre 1Gbps</h3>
              <p className="text-xs text-blue-100 mt-1">Sessions libres haut débit & Suite Office préinstallée</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all text-left">
              <div className="p-3 rounded-xl bg-[#fef08a] text-[#1e3a8a] w-max font-bold mb-3">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Formations Excel/Word</h3>
              <p className="text-xs text-blue-100 mt-1">Accompagnement individuel sur-mesure</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all text-left">
              <div className="p-3 rounded-xl bg-[#fef08a] text-[#1e3a8a] w-max font-bold mb-3">
                <Printer className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Imprimerie & Scan HD</h3>
              <p className="text-xs text-blue-100 mt-1">Tirages couleur A4/A3, reliures & plastification</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/20 hover:bg-white/15 transition-all text-left">
              <div className="p-3 rounded-xl bg-[#fef08a] text-[#1e3a8a] w-max font-bold mb-3">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Rédaction de Documents</h3>
              <p className="text-xs text-blue-100 mt-1">CV modernes, lettres & assistance administrative</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
