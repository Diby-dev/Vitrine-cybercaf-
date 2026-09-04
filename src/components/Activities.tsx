'use client';

import { UserCheck, GraduationCap, Briefcase, Building2, CheckCircle2 } from 'lucide-react';

export default function Activities() {
  const domains = [
    {
      id: 'particuliers',
      title: 'Particuliers & Familles',
      icon: UserCheck,
      badge: 'Usage Quotidien',
      description: 'Accès libre à Internet pour vos démarches administratives, réservations de billets, consultations d\'e-mails et numérisation de documents personnels.',
      perks: [
        'Navigation haut débit sécurisée',
        'Aide pour formulaires en ligne',
        'Impression de billets et papiers d\'identité',
        'Numérisation directe vers clé USB ou e-mail',
      ],
    },
    {
      id: 'etudiants',
      title: 'Étudiants & Lycéens',
      icon: GraduationCap,
      badge: 'Tarifs Spéciaux',
      description: 'Un espace de travail calme et équipé pour la rédaction et l\'impression de vos projets d\'études, mémoires, thèses et exposés avec mise en page soignée.',
      perks: [
        'Réduction de 15% sur présentation de la carte étudiant',
        'Mise en page automatique du sommaire et pagination sur Word',
        'Impression couleur HD & reliure spirale sur place',
        'Recherches académiques et documentaires',
      ],
    },
    {
      id: 'emploi',
      title: 'Demandeurs d\'Emploi',
      icon: Briefcase,
      badge: 'Insertion Pro',
      description: 'Optimisez vos chances de recrutement grâce à un accompagnement dédié pour la conception d\'un CV percutant et la mise à jour de vos dossiers de candidature.',
      perks: [
        'Rédaction et relooking moderne de votre CV',
        'Lettres de motivation ciblées selon l\'offre',
        'Inscriptions sur plateformes d\'emploi & France Travail',
        'Conseils pour préparer vos entretiens',
      ],
    },
    {
      id: 'pro',
      title: 'Professionnels & PME',
      icon: Building2,
      badge: 'Solutions Entreprises',
      description: 'Des prestations d\'imprimerie et de secrétariat haut de gamme pour soutenir l\'activité de vos entreprises, commerçants et indépendants.',
      perks: [
        'Impression de flyers, plaquettes et cartes de visite',
        'Numérisation et archivage grand volume de dossiers',
        'Formations d\'équipe sur-mesure sur Excel & Word',
        'Facturation et devis professionnels groupés',
      ],
    },
  ];

  return (
    <section id="activities" className="py-24 bg-[url('/images/back.jpg')] bg-cover bg-center bg-no-repeat relative overflow-hidden">

      {/* Background Decorative Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Domaines d'Intervention
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-50 tracking-tight">
            Des Solutions Dédiées à <span className="text-gradient">Chaque Profil</span>
          </h2>
          <p className="mt-4 text-slate-50 text-base sm:text-lg font-medium">
            Quel que soit votre domaine ou votre niveau, nous vous proposons un accompagnement ciblé et adapté.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="bg-slate-50 hover:bg-white p-8 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-xl transition-all flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 rounded-xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors font-bold">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white border border-slate-200 text-slate-700 shadow-xs">
                      {domain.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {domain.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                    {domain.description}
                  </p>

                  {/* Perks */}
                  <div className="space-y-2.5 border-t border-slate-200 pt-4">
                    {domain.perks.map((perk, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-sky-600 flex-shrink-0" />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
