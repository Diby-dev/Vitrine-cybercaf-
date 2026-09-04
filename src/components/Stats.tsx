'use client';

import { Users, Printer, ThumbsUp, Calendar, Award } from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import AnimatedCounter from '@/components/AnimatedCounter';

export default function Stats() {
  const stats = [
    {
      id: 1,
      numericValue: 2000,
      prefix: '+',
      suffix: '',
      label: 'Clients Accueillis',
      sublabel: 'Particuliers, étudiants & professionnels fidélisés',
      icon: Users,
    },
    {
      id: 2,
      numericValue: 6000,
      prefix: '+',
      suffix: '',
      label: 'Documents Imprimés',
      sublabel: 'Mémoires, thèses, CV & tirages haute définition',
      icon: Printer,
    },
    {
      id: 3,
      numericValue: 92,
      prefix: '',
      suffix: '%',
      label: 'Taux de Satisfaction',
      sublabel: 'Évalué sur la qualité d\'accueil & la rapidité',
      icon: ThumbsUp,
    },
    {
      id: 4,
      numericValue: 4,
      prefix: '',
      suffix: ' Ans',
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
        <ScrollReveal variant="fade-down">
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
        </ScrollReveal>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, idx) => {
            const Icon = s.icon;
            return (
              <ScrollReveal key={s.id} variant="zoom-in" delay={idx * 0.15}>
                <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-md text-center relative overflow-hidden group hover:border-sky-300 hover:shadow-xl transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-sky-50 border border-sky-200 text-sky-600 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-sky-600 group-hover:text-white transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight group-hover:text-sky-600 transition-colors">
                      <AnimatedCounter
                        numericValue={s.numericValue}
                        prefix={s.prefix}
                        suffix={s.suffix}
                        duration={2200}
                      />
                    </div>

                    <h3 className="mt-2 text-sm font-bold text-slate-800">
                      {s.label}
                    </h3>
                  </div>

                  <p className="mt-2 text-[11px] text-slate-500 font-medium leading-relaxed">
                    {s.sublabel}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Trust Note */}
        <ScrollReveal variant="fade-up" delay={0.5}>
          <div className="mt-12 text-center flex items-center justify-center gap-6 text-xs text-slate-600 font-semibold">
            <span className="w-1 h-1 rounded-full bg-slate-300 hidden sm:inline" />
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <Award className="w-4 h-4 text-sky-600" /> Équipe certifiée et formée aux logiciels
            </span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
