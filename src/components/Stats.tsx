'use client';

import { Users, Printer, ThumbsUp, Calendar, Award, Zap } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      id: 1,
      value: '+2 000',
      label: 'Clients Accueillis',
      sublabel: 'Particuliers, étudiants & professionnels fidélisés',
      icon: Users,
    },
    {
      id: 2,
      value: '+6 000',
      label: 'Documents Imprimés',
      sublabel: 'Mémoires, thèses, CV & tirages haute définition',
      icon: Printer,
    },
    {
      id: 3,
      value: '92%',
      label: 'Taux de Satisfaction',
      sublabel: 'Évalué sur la qualité d\'accueil & la rapidité',
      icon: ThumbsUp,
    },
    {
      id: 4,
      value: '4 Ans',
      label: 'D\'Expérience',
      sublabel: 'Présence locale continue au service du public',
      icon: Calendar,
    },
  ];

  return (
    <section id="stats" className="py-20 bg-sky-50/70 relative overflow-hidden">

      {/* Mesh Background */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-100 border border-sky-200">
            Chiffres Clés & Impact
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Notre Impact en <span className="text-gradient">Quelques Chiffres</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            Des résultats concrets qui témoignent de notre engagement quotidien à vos côtés.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center relative overflow-hidden group hover:border-sky-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                  <Icon className="w-7 h-7" />
                </div>

                <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                  {s.value}
                </div>

                <h3 className="mt-2 text-sm font-bold text-slate-800">
                  {s.label}
                </h3>

                <p className="mt-1 text-[11px] text-slate-500 font-medium leading-relaxed">
                  {s.sublabel}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <div className="mt-12 text-center flex items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
          <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline" />
          <span className="flex items-center gap-1.5 hidden sm:flex">
            <Award className="w-4 h-4 text-sky-600" /> Équipe certifiée et formée aux logiciels
          </span>
        </div>

      </div>
    </section>
  );
}
