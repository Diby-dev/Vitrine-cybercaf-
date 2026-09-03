'use client';

import { useState } from 'react';
import { Star, Quote, CheckCircle } from 'lucide-react';

export default function Testimonials() {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const testimonials = [
    {
      id: 1,
      name: 'Amadou Diallo',
      role: 'Étudiant en Master 2',
      category: 'imprimerie',
      rating: 5,
      comment:
        'J\'ai fait imprimer et relier mon mémoire de fin d\'études de 120 pages ici. Le résultat est tout simplement irréprochable,',
      serviceUsed: 'Impression & Reliure de Mémoire',
      date: 'Il y a 3 jours',
    },
    {
      id: 2,
      name: 'Sarah Mendy',
      role: 'Comptable Indépendante',
      category: 'formation',
      rating: 5,
      comment:
        'La formation sur Microsoft Excel m\'a permis de maîtriser les tableaux croisés dynamiques et les formules RECHERCHEV en seulement quelques heures. Le formateur était extrêmement patient et pédagogue.',
      serviceUsed: 'Formation Excel Avancé',
      date: 'Il y a 1 semaine',
    },
    {
      id: 3,
      name: 'Koffi Serge',
      role: 'Demandeur d\'emploi',
      category: 'redaction',
      rating: 5,
      comment:
        'Je suis venu pour refaire mon CV et rédiger une lettre de motivation. L\'équipe a su mettre en valeur mon parcours avec un design très moderne. Résultat : j\'ai décroché 2 entretiens dès la première semaine !',
      serviceUsed: 'Rédaction de CV & Lettre',
      date: 'Il y a 2 semaines',
    },
    {
      id: 4,
      name: 'Marc-Aurèle V.',
      role: 'Graphiste & Télé-travailleur',
      category: 'pc',
      rating: 5,
      comment:
        'La vitesse de la fibre optique est bluffante. Quand j\'ai eu une coupure chez moi, j\'ai pu envoyer de gros fichiers clients en quelques minutes sans aucun souci. Les postes sont propres et silencieux.',
      serviceUsed: 'Session PC Fibre Optique',
      date: 'Il y a 3 semaines',
    },
    {
      id: 5,
      name: 'Fatou Ndiaye',
      role: 'Commerçante locale',
      category: 'imprimerie',
      rating: 5,
      comment:
        'Impression de 500 flyers couleur pour la réouverture de ma boutique. Prix très avantageux et livraison de mes imprimés le jour même. Un grand merci pour votre réactivité !',
      serviceUsed: 'Imprimerie Publique Express',
      date: 'Il y a 1 mois',
    },
    {
      id: 6,
      name: 'Jean-Philippe B.',
      role: 'Sénior Retraité',
      category: 'formation',
      rating: 5,
      comment:
        'À mon âge, l\'ordinateur me faisait un peu peur. Grâce aux cours d\'initiation personnalisés sur Word et e-mail, je suis aujourd\'hui capable d\'échanger des photos avec mes petits-enfants !',
      serviceUsed: 'Initiation Informatique Sénior',
      date: 'Il y a 1 mois',
    },
  ];

  const filteredTestimonials =
    activeFilter === 'all'
      ? testimonials
      : testimonials.filter((t) => t.category === activeFilter);

  // Duplicate items to make seamless infinite continuous scroll loop
  const marqueeItems = [...filteredTestimonials, ...filteredTestimonials];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Background Decorative Element */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Témoignages & Satisfaction
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ce Que Disent <span className="text-gradient">Nos Clients</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium">
            Découvrez les retours d'expérience et avis vérifiés de nos usagers au quotidien.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'all', label: 'Tous les avis' },
            { id: 'imprimerie', label: 'Imprimerie & Scan' },
            { id: 'formation', label: 'Formations Excel/Word' },
            { id: 'redaction', label: 'Rédaction CV & Docs' },
            { id: 'pc', label: 'Navigation PC Fibre' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-bold rounded-full border transition-all cursor-pointer ${activeFilter === tab.id
                  ? 'bg-sky-600 text-white border-sky-600 shadow-md shadow-sky-500/20'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-sky-300'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

      </div>

      {/* Infinite Continuous Auto-Scrolling Marquee Container */}
      <div className="relative w-full overflow-hidden py-4">

        {/* Left & Right Gradient Shadows for Seamless Blur */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />

        {/* Continuous Animated Track */}
        <div className="animate-marquee flex gap-6 px-4">
          {marqueeItems.map((t, index) => (
            <div
              key={`${t.id}-${index}`}
              className="w-[320px] sm:w-[380px] flex-shrink-0 bg-white p-6 rounded-2xl border border-slate-200 shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                {/* Comment Text */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-6 font-medium">
                  "{t.comment}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-slate-900">{t.name}</span>
                    <span title="Avis Vérifié">
                      <CheckCircle className="w-3.5 h-3.5 text-sky-600" />
                    </span>
                  </div>
                  <span className="block text-[11px] text-slate-500 font-medium">{t.role}</span>
                  <span className="inline-block mt-1 text-[10px] text-sky-700 font-bold">
                    {t.serviceUsed}
                  </span>
                </div>

                <span className="text-[10px] text-slate-400 font-medium">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
