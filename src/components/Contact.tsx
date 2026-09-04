'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'navigation',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 relative overflow-hidden">

      {/* Glow Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-sky-100/60 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Nous Contacter & Réserver
          </span>
          <h2 className="mt-4 text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contactez Notre <span className="text-gradient">Équipe d'Experts</span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg font-medium">
            Une question sur une formation Excel/Word, un devis d'imprimerie ou une réservation de poste PC ? Écrivez-nous ou rendez-nous visite.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left Column: Contact info & Detailed Schedule */}
          <div className="lg:col-span-5 space-y-8">

            {/* Quick Info Box */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Coordonnées Directes</h3>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Adresse</span>
                  <p className="text-sm font-semibold text-slate-800 mt-0.5">
                    Abidjan, Yopougon, Micao, le terrain
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex-shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Téléphone & WhatsApp</span>
                  <a href="tel:+33140000000" className="text-sm font-bold text-sky-600 hover:underline block">
                    06 76 19 08 97
                  </a>
                  <a href="https://wa.me/06 76 19 08 97" target="_blank" rel="noreferrer" className="text-xs font-semibold text-emerald-600 hover:underline block mt-0.5">
                    💬 WhatsApp Direct : 06 76 19 08 97
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 text-sky-600 flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-xs font-bold uppercase tracking-wider text-slate-500">Adresse E-mail</span>
                  <a href="mailto:benicytech200@gmail.com" className="text-sm font-semibold text-slate-800 hover:text-sky-600 transition-colors">
                    benicytech200@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Detailed Opening Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-md space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-sky-600" />
                  <h4 className="text-base font-bold text-slate-900">Horaires d'Ouverture</h4>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
                  🟢 Ouvert
                </span>
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-100 pt-2">
                <div className="flex justify-between pt-1">
                  <span className="text-slate-500 font-medium">Lundi - Vendredi</span>
                  <span className="font-bold text-slate-800">08h00 - 22h00 (Non-Stop)</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-slate-500 font-medium">Samedi</span>
                  <span className="font-bold text-slate-800">09h00 - 20h00</span>
                </div>
                <div className="flex justify-between pt-2">
                  <span className="text-slate-500 font-medium">Dimanche & J. Fériés</span>
                  <span className="font-bold text-sky-600">10h00 - 15h00</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-500 font-medium flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5 text-sky-600 flex-shrink-0" />
                <span>Accès PC sans réservation / Formations sur RDV</span>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Envoyez-nous un Message</h3>
              <p className="text-xs text-slate-500 font-medium mb-6">
                Remplissez ce formulaire et recevez une réponse d'un conseiller sous 30 minutes.
              </p>

              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-bold text-slate-900">Message Envoyé !</h4>
                  <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto font-medium">
                    Merci <span className="text-sky-700 font-bold">{formData.name}</span>. Nous avons bien reçu votre demande concernant le service <span className="text-sky-700 font-semibold">{formData.service}</span>. Nous vous répondons très rapidement.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', phone: '', service: 'navigation', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Votre Nom & Prénom *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Ex: Marc Dupont"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Téléphone *</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="Ex: 06 12 34 56 78"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 outline-none transition-all font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Adresse E-mail *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="Ex: m.dupont@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 outline-none transition-all font-medium"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Service Concerné</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 outline-none transition-all font-medium"
                      >
                        <option value="navigation">Navigation PC & Internet Libre</option>
                        <option value="formation">Formations Excel / Word / Office</option>
                        <option value="imprimerie">Imprimerie & Scan HD</option>
                        <option value="redaction">Rédaction de CV & Documents</option>
                        <option value="autre">Autre Demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Votre Message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Décrivez votre besoin (ex: besoin de faire imprimer 50 pages couleur avec reliure jeudi à 14h)..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-xl p-3 text-xs text-slate-900 outline-none transition-all font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transform active:scale-98 transition-all cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Envoi en cours...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Envoyer mon message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
