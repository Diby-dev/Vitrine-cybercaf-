'use client';

import Image from 'next/image';
import { Calculator, ArrowRight, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-36 pb-30 flex items-center justify-center text-white overflow-hidden"
    >
      {/* Background Image avec position fixed pour l'effet de profondeur au scroll */}
      <div className="fixed inset-0 z-0 bg-slate-950 pointer-events-none">
        <Image
          src="/images/cybe.jpg"
          alt="Espace Cyber Cafe Benicytech"
          fill
          priority
          sizes="100vw"
          className="w-full h-full object-cover object-center opacity-100"
        />
        {/* Dégradé sombre de gauche à droite pour un contraste parfait avec le texte */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/30" />
      </div>

      {/* Decorative ambient glowing sphere */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column Text */}
          <div className="lg:col-span-7 space-y-6 text-left">

            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-[#fef08a] text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Cyber Café & Espace Numérique</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-serif font-semibold tracking-tight text-[#fef08a] leading-[1.1]">
              Un espace numérique <br />
              <span className="font-sans font-extrabold text-white">à votre écoute</span>
            </h1>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-blue-100 max-w-2xl font-normal leading-relaxed">
              Découvrez <strong className="text-white font-semibold">BENICYTECH</strong>, l'espace informatique intelligent qui s'adapte intuitivement à vos besoins : navigation haut débit, formations Excel & Word, impression HD et rédaction de vos documents officiels.
            </p>

            {/* Bottom CTAs */}
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
                className="px-7 py-3.5 text-sm font-semibold text-white border border-white/30 hover:border-white rounded-full transition-all flex items-center gap-2 backdrop-blur-sm"
              >
                <span>Nos services</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}