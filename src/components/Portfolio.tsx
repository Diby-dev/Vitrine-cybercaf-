'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ZoomIn, X, CheckCircle, Eye } from 'lucide-react';

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const portfolioItems = [
    {
      id: 1,
      title: 'Impression de mémoires de soutenance et thèses',
      category: 'impression',
      categoryLabel: 'Impression & Reliure',
      image: '/images/memoire.jpg',
      description: 'Impression de plusieurs documents, mémoires de Master reliés sous couverture rigide dorée et papier couleur pour des étudiants.',
      date: 'Février 2026',
    },
    {
      id: 2,
      title: 'Formation de plusieurs personnes sur microsoft office',
      category: 'formation',
      categoryLabel: 'Formations Office',
      image: '/images/office.jpg',
      description: 'Formation sur excel, word, powerpoint.',
      date: 'Janvier 2026',
    },
    {
      id: 3,
      title: 'Rédaction & Mise en Page de CV Professionnel',
      category: 'redaction',
      categoryLabel: 'Rédaction de Documents',
      image: '/images/curri.png',
      description: 'Conception de plusieurs CV design compatible ATS avec lettre de motivation ciblée pour divers postes.',
      date: 'Février 2026',
    },
    {
      id: 4,
      title: 'Acceuil de client pour la navigation sur internet',
      category: 'espace',
      categoryLabel: 'Espace PC & Equipements',
      image: '/images/cy.jpg',
      description: 'Au total plus de 6 000 clients. Ambiance chaleureuse et conviviale pour la navigation sur internet .',
      date: 'En continu',
    },
  ];

  const filteredItems =
    activeTab === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeTab);

  return (
    <section id="portfolio" className="bg-slate-800 py-24 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-sky-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Portfolio & Exemples de Projets
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-50 tracking-tight">
            Galerie de nos <span className="text-gradient">Réalisations Récentes</span>
          </h2>
          <p className="mt-4 text-slate-50 text-base sm:text-lg font-medium">
            Découvrez en images la qualité de nos travaux d'imprimerie, de rédaction et l'ambiance de nos espaces de travail.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Toutes les réalisations' },
            { id: 'impression', label: 'Impression & Reliure' },
            { id: 'formation', label: 'Formations Office' },
            { id: 'redaction', label: 'Documents Rédigés' },
            { id: 'espace', label: 'Espace & Equipements' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${activeTab === tab.id
                ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-500/20'
                : 'bg-slate-50 border-slate-200 text-slate-700 hover:border-sky-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Portfolio Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item)}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl hover:border-sky-300 group cursor-pointer flex flex-col justify-between transition-all"
            >
              <div>
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-200 text-sky-700 text-[11px] font-bold shadow-sm">
                    {item.categoryLabel}
                  </div>

                  {/* Zoom Overlay Icon */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-900/30 backdrop-blur-xs">
                    <div className="p-3 rounded-full bg-sky-600 text-white shadow-lg">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600 line-clamp-2 font-medium">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="px-6 pb-6 pt-0 flex items-center justify-between text-[11px] text-slate-400 font-medium border-t border-slate-100 mt-2">
                <span>{item.date}</span>
                <span className="text-sky-600 font-bold flex items-center gap-1">
                  Agrandir <ZoomIn className="w-3 h-3" />
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox / Modal for Zoomed Image */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-3xl w-full bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-80 sm:h-96 w-full">
              <Image
                src={selectedImage.image}
                alt={selectedImage.title}
                fill
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-slate-700 hover:text-slate-900 border border-slate-200 shadow-md"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <span className="text-xs font-bold text-sky-600 uppercase tracking-wider">
                {selectedImage.categoryLabel}
              </span>
              <h3 className="text-xl font-bold text-slate-900 mt-1">{selectedImage.title}</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed font-medium">
                {selectedImage.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-4 border-t border-slate-100">
                <span className="flex items-center gap-1.5 text-emerald-600 font-semibold">
                  <CheckCircle className="w-4 h-4" /> Projet réalisé dans nos locaux
                </span>
                <span>{selectedImage.date}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
