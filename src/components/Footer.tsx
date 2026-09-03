'use client';

import { useState } from 'react';
import { Monitor, Mail, Send, CheckCircle2, Shield, Heart } from 'lucide-react';

interface FooterProps {
  onOpenQuoteModal: () => void;
}

export default function Footer({ onOpenQuoteModal }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail('');
    }, 4000);
  };

  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 relative overflow-hidden">

      {/* Background Subtle Mesh */}
      <div className="absolute inset-0 bg-mesh-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">

          {/* Col 1: Brand & Tagline */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" className="flex items-center gap-3 group w-max">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-sky-500/20">
                <Monitor className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold tracking-wider text-white">
                CYBER<span className="text-sky-400">TECH</span>
              </span>
            </a>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm font-medium">
              Espace numérique de proximité proposant l'accès libre à des PC très haut débit, des formations informatiques Microsoft Office, un centre d'imprimerie haute définition et la rédaction de vos documents officiels.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              {[].map((name, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-slate-800 border border-slate-700 hover:border-sky-400 hover:text-sky-400 flex items-center justify-center text-xs font-bold transition-all text-slate-300"
                  title={name}
                >
                  {name[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Navigation Rapide</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="#hero" className="hover:text-sky-400 transition-colors">Accueil</a></li>
              <li><a href="#about" className="hover:text-sky-400 transition-colors">À propos</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Nos Services</a></li>
              <li><a href="#activities" className="hover:text-sky-400 transition-colors">Domaines d'intervention</a></li>
              <li><a href="#testimonials" className="hover:text-sky-400 transition-colors">Avis Clients</a></li>
              <li><a href="#portfolio" className="hover:text-sky-400 transition-colors">Réalisations</a></li>
            </ul>
          </div>

          {/* Col 3: Services Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Contact</h4>
            <ul className="space-y-2.5 text-xs font-medium">
              <li><a href="" className="hover:text-sky-400 transition-colors">06 76 19 08 97</a></li>
              <li><a href="" className="hover:text-sky-400 transition-colors">cybertech200@gmail.com</a></li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">Newsletter & Conseils</h4>
            <p className="text-xs text-slate-400 mb-3 font-medium">
              Recevez nos astuces informatiques mensuelles et nos offres privilèges.
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 text-xs flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Inscription confirmée ! Merci.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Votre e-mail..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-800 border border-slate-700 focus:border-sky-400 rounded-xl p-2.5 text-xs text-slate-200 outline-none pr-9 font-medium"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 rounded-lg bg-sky-500 text-white hover:bg-sky-600 transition-colors cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} CYBERTECH Lounge. Tous droits réservés.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setShowLegalModal(true)}
              className="hover:text-white transition-colors"
            >
              Mentions Légales
            </button>
            <button
              onClick={() => setShowLegalModal(true)}
              className="hover:text-white transition-colors"
            >
              Politique de Confidentialité
            </button>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>

      </div>

      {/* Legal Modal */}
      {showLegalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm"
          onClick={() => setShowLegalModal(false)}
        >
          <div
            className="bg-white border border-slate-200 p-6 rounded-2xl max-w-lg w-full text-xs text-slate-700 space-y-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Shield className="w-4 h-4 text-sky-600" />
                Mentions Légales & Confidentialité
              </h4>
              <button
                onClick={() => setShowLegalModal(false)}
                className="text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <p>
              <strong>Éditeur du site :</strong> CYBERTECH Espace Numérique SARL.<br />
              <strong>Siège social :</strong> 124 Avenue de la République, 75011 Paris.<br />
              <strong>Directeur de la publication :</strong> Service Communication.
            </p>

            <p>
              <strong>Protection des données :</strong> Les données collectées via nos formulaires sont strictly destinées au traitement de vos demandes de devis et réservations. Aucune donnée n'est revendue à des tiers.
            </p>

            <div className="pt-2 text-right">
              <button
                onClick={() => setShowLegalModal(false)}
                className="px-4 py-2 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}
