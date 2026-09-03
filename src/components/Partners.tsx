'use client';

import { ShieldCheck, Award, Building, CheckCircle2 } from 'lucide-react';

export default function Partners() {
  const partners = [
    {
      name: 'Microsoft Office',
      category: 'Certification Bureautique',
      desc: 'Formations certifiées Excel, Word & PowerPoint',
      icon: Award,
    },
    {
      name: 'Pôle Écoles',
      category: 'Partenariat Étudiant',
      desc: 'Accompagnement de plus de 600 étudiants/an',
      icon: Building,
    },
    {
      name: 'Plateformes Administratives',
      category: 'Accompagnement Numérique',
      desc: 'Assistance pour démarches administratives en ligne',
      icon: CheckCircle2,
    },
  ];

  return (
    <section id="partners" className="py-16 bg-white border-t border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-sky-700 uppercase tracking-widest">
            Partenaires & Garanties Techniques
          </span>
          <h3 className="text-xl font-bold text-slate-900 mt-1">
            Ils Nous Font Confiance & Certifient Nos Services
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-5 rounded-xl bg-slate-50 border border-slate-200 flex items-center gap-4 hover:border-sky-300 hover:bg-white hover:shadow-md transition-all"
              >
                <div className="p-3 rounded-lg bg-sky-100 text-sky-600 flex-shrink-0 font-bold">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{p.name}</h4>
                  <span className="block text-[11px] text-sky-700 font-bold">{p.category}</span>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">{p.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
