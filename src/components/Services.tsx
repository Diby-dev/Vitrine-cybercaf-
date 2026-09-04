'use client';

import Image from 'next/image';
import { Monitor, BookOpen, Printer, FileText, ArrowRight, Calculator, Check } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';

interface ServicesProps {
  onOpenQuoteModal: () => void;
}

export default function Services({ onOpenQuoteModal }: ServicesProps) {
  const servicesList = [
    {
      id: 'navigation',
      title: 'Navigation PC & Accès Internet Ultra Rapide',
      subtitle: 'Postes ergonomiques haut débit pour tous vos travaux et recherches',
      icon: Monitor,
      image: '/images/cybe.jpg',
      price: '500 FCFA / Heure',
      features: [
        'Connexion Fibre Optique dédiée 1 Gbps',
        'Suite Microsoft Office 365 complète préinstallée',
        'Écrans 27 pouces 4K avec casques isolants',
        'Port USB et lecteur de cartes SD/MicroSD libres',
        'Espace calme et postes individuels confortables',
      ],
    },
    {
      id: 'training',
      title: 'Formations Informatiques & Bureautique',
      subtitle: 'Maîtrisez Microsoft Excel, Word, PowerPoint et l\'environnement Windows',
      icon: BookOpen,
      image: '/images/ex.jpg',
      price: '3 000 FCFA / Heure',
      features: [
        'Formation Excel : Formules, Tableaux Croisés Dynamiques, Graphiques',
        'Formation Word : Mise en page complexe, sommaire automatique, publipostage',
        'Initiation Débutant : Prise en main PC, gestion des fichiers, e-mails',
        'Formations individuelles sur-mesure avec formateur dédié',
        'Support de cours imprimé et attestation de formation',
      ],
    },
    {
      id: 'printing',
      title: 'Imprimerie, Photocopie & Scan HD',
      subtitle: 'Impression professionnelle de documents, thèses, brochures et scans haute définition',
      icon: Printer,
      image: '/images/imp.jpg',
      price: 'À partir de 50 FCFA / page',
      features: [
        'Impression laser couleur & N/B aux formats A4 et A3',
        'Reliure spirale plastique & thermocollée pour mémoires',
        'Plastification protectrice mate ou brillante',
        'Numérisation (Scan) grand volume directe vers clé USB ou email',
        'Papier haute qualité de 80g à 300g (Papier glacé)',
      ],
    },
    {
      id: 'redaction',
      title: 'Rédaction & Assistance Administrative',
      subtitle: 'Rédaction et mise en page soignée de CV, lettres de motivation et dossiers en ligne',
      icon: FileText,
      image: '/images/redact.jpg',
      price: 'À partir de 2 000 FCFA',
      features: [
        'Rédaction & Relecture de CV modernisés et percutants',
        'Lettres de motivation personnalisées selon l\'offre',
        'Saisie et mise en page de rapports, thèses et mémoires',
        'Assistance pour démarches administratives en ligne (France Travail, Caf, Visas)',
        'Confidentialité absolue garantie par contrat d\'engagement',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-[url('/images/back2.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden">

      {/* Glow Overlay */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal variant="fade-down">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
              Nos Prestations & Tarifs
            </span>
            <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Des Services Adaptés à <span className="text-gradient">Chacun de Vos Besoins</span>
            </h2>
            <p className="mt-4 text-slate-900 text-base sm:text-lg font-medium">
              Découvrez nos 5 pôles d'activités conçus pour répondre efficacement aux exigences des particuliers, étudiants et entreprises.
            </p>
          </div>
        </ScrollReveal>

        {/* Services List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            // Varied animation per card
            const variants: ('fade-up' | 'fade-right' | 'fade-left' | 'zoom-in')[] = [
              'fade-right',
              'fade-up',
              'fade-left',
              'zoom-in',
            ];
            return (
              <ScrollReveal key={service.id} variant={variants[idx % variants.length]} delay={idx * 0.15}>
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-xl hover:border-sky-300 transition-all flex flex-col justify-between group h-full">
                  <div>
                    {/* Image Container */}
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                      {/* Floating Badge */}
                      <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 text-sky-700 text-xs font-bold shadow-md">
                        {service.price}
                      </div>

                      {/* Icon */}
                      <div className="absolute bottom-3 left-4 p-2.5 rounded-xl bg-sky-600 text-white shadow-md">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed font-medium">
                        {service.subtitle}
                      </p>

                      {/* Features List */}
                      <ul className="mt-6 space-y-2.5 border-t border-slate-100 pt-4">
                        {service.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <Check className="w-4 h-4 text-sky-600 flex-shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={onOpenQuoteModal}
                      className="w-full py-2.5 text-xs font-bold text-sky-700 bg-sky-50 hover:bg-sky-600 hover:text-white border border-sky-200 rounded-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>Estimer / Réserver ce service</span>
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <ScrollReveal variant="fade-up" delay={0.4}>
          <div className="mt-16 p-8 rounded-2xl bg-white border border-slate-200 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-xl font-bold text-slate-900">Vous avez un projet ou une demande spécifique ?</h4>
              <p className="text-xs text-slate-600 font-medium">Impression en grand volume, abonnement mensuel ou formation d'équipe entreprise.</p>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="px-6 py-3 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl shadow-lg shadow-sky-500/25 flex items-center gap-2 cursor-pointer flex-shrink-0"
            >
              <span>Obtenir un devis personnalisé</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
