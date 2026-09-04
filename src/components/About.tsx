'use client';

import Image from 'next/image';
import { HeartHandshake, ShieldCheck, Cpu, Users, Target, CheckCircle } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-sky-100 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header - Aligné à gauche sur PC */}
        <div className="text-left max-w-3xl mb-16">
          <span className="inline-block text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Qui Sommes-Nous
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Un Espace de Proximité Dédié au <span className="text-green-700">Numérique pour Tous</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium">
            Depuis plus de 4 ans, notre cyber café s'est imposé comme le partenaire technologique de référence pour les particuliers, étudiants et professionnels.
          </p>
        </div>

        {/* Story & Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">

          {/* Text Content */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
              <Target className="w-6 h-6 text-sky-600" />
              <span>Notre Mission : Rendre la Technologie Simple & Accessible</span>
            </h3>

            <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
              Que vous souhaitiez naviguer sereinement sur Internet, éditer un tableau complexe sur <strong className="text-slate-900">Excel</strong>, rédiger un rapport sous <strong className="text-slate-900">Word</strong>, imprimer vos documents officiels ou être guidé pas à pas dans vos démarches administratives en ligne, notre équipe est présente à chaque étape.
            </p>

            <p className="text-slate-600 text-sm leading-relaxed">
              Nous pensons que le numérique ne doit pas être un obstacle. C'est pourquoi nous allions du matériel de dernière génération (connexion fibre optique dédiée, écrans haute précision, imprimantes laser industrielles) à un accueil chaleureux et bienveillant.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                'Postes informatiques récents & sécurisés',
                'Formateurs diplômés et patients',
                'Impression & scan haute fidélité',
                'Rédaction professionnelle & confidentielle',
                'Espace calme et climatisé',
                'Accessible sans rendez-vous',
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                  <CheckCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Showcase Box avec cadre fond blanc / bordure orange décalé à droite */}
          <div className="relative mx-auto w-full max-w-md lg:max-w-none pt-4 sm:pt-0">

            {/* Cadre de fond (fond blanc, bordure orange) décalé vers la droite et le bas */}
            <div className="absolute -bottom-6 -right-6 w-full h-96 sm:h-[420px] rounded-lg bg-white border-2 border-orange-500 shadow-lg hidden sm:block pointer-events-none" />

            {/* Image principale (position de base) */}
            <div className="relative h-96 sm:h-[420px] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 shadow-xl group">
              <Image
                src="/images/cybe.jpg"
                alt="Accompagnement et formation informatique"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-white/95 border border-slate-200 shadow-lg backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-lg bg-sky-600 text-white font-bold">
                    <HeartHandshake className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Accompagnement Personnalisé</h4>
                    <p className="text-xs text-slate-600 font-medium">Des conseillers dédiés pour répondre à toutes vos interrogations</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* 4 Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4 font-bold">
              <Cpu className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Performance & Réseau</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Fibre optique pro 1 Gbps, processeurs rapides et stockage SSD pour un travail fluide sans aucun ralentissement.
            </p>
          </div>

          <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4 font-bold">
              <Users className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Formateurs À l'Écoute</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Une pédagogie progressive adaptée à tous les niveaux, du grand débutant à l'utilisateur avancé sur Office.
            </p>
          </div>

          <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4 font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Sécurité & Confidentialité</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Vos données personnelles, identifiants et documents sont réinitialisés et effacés automatiquement après chaque session.
            </p>
          </div>

          <div className="bg-slate-50 hover:bg-white p-6 rounded-2xl border border-slate-200 hover:border-sky-300 hover:shadow-lg transition-all">
            <div className="w-12 h-12 rounded-xl bg-sky-100 text-sky-600 flex items-center justify-center mb-4 font-bold">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h4 className="text-base font-bold text-slate-900 mb-2">Engagement Social</h4>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Des tarifs solidaires réduits pour les étudiants, chercheurs d'emploi et séniors pour réduire la fracture numérique.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}