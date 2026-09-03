'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import QuoteModal from '@/components/QuoteModal';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Activities from '@/components/Activities';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import Stats from '@/components/Stats';
import Partners from '@/components/Partners';
import Contact from '@/components/Contact';
import MapSection from '@/components/MapSection';
import Footer from '@/components/Footer';

export default function Home() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  const handleOpenQuoteModal = () => {
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuoteModal = () => {
    setIsQuoteModalOpen(false);
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950">
      {/* Navigation Header */}
      <Header onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Quote Calculator & Reservation Modal */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={handleCloseQuoteModal} />

      {/* Section 1: Hero Banner */}
      <Hero onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Section 2: À propos / Qui sommes-nous */}
      <About />

      {/* Section 3: Services / Produits */}
      <Services onOpenQuoteModal={handleOpenQuoteModal} />

      {/* Section 4: Activités / Domaines d'intervention */}
      <Activities />

      {/* Section 5: Témoignages / Avis clients */}
      <Testimonials />

      {/* Section 6: Réalisations / Portfolio */}
      <Portfolio />

      {/* Section 7: Chiffres clés / Statistiques */}
      <Stats />

      {/* Section 8: Partenaires / Références */}
      <Partners />

      {/* Section 9: Coordonnées / Contact */}
      <Contact />

      {/* Section 11: Pied de page (Footer) */}
      <Footer onOpenQuoteModal={handleOpenQuoteModal} />
    </main>
  );
}
