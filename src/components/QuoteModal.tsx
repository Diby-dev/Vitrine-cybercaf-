'use client';

import { useState } from 'react';
import { X, Calculator, CheckCircle2, Send, FileText, Monitor, BookOpen, Printer } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [selectedService, setSelectedService] = useState<'pc' | 'formation' | 'imprimerie' | 'redaction'>('pc');
  
  // Custom calculator state
  const [pcHours, setPcHours] = useState(2);
  const [formationHours, setFormationHours] = useState(5);
  const [printPages, setPrintPages] = useState(20);
  const [printType, setPrintType] = useState<'bw' | 'color'>('color');
  const [printPaper, setPrintPaper] = useState<'A4' | 'A3'>('A4');
  const [needBinding, setNeedBinding] = useState(true);
  const [redactionType, setRedactionType] = useState<'cv' | 'lettre' | 'memoire' | 'demarche'>('cv');
  
  // Form submission state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  // Calculation pricing logic (in FCFA)
  const calculateTotal = () => {
    let total = 0;
    if (selectedService === 'pc') {
      total = pcHours * 500; // 500 FCFA/h
    } else if (selectedService === 'formation') {
      total = formationHours * 3000; // 3000 FCFA/h
    } else if (selectedService === 'imprimerie') {
      const pageCost = printType === 'color' ? (printPaper === 'A4' ? 100 : 250) : (printPaper === 'A4' ? 50 : 100);
      total = printPages * pageCost + (needBinding ? 1000 : 0);
    } else if (selectedService === 'redaction') {
      const prices = { cv: 2500, lettre: 2000, memoire: 15000, demarche: 3000 };
      total = prices[redactionType];
    }
    return total;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col text-slate-900">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-sky-100 border border-sky-200 text-sky-600 font-bold">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">Demande de Devis & Calculateur Instantané</h3>
              <p className="text-xs text-slate-500 font-medium">Estimez vos besoins et recevez votre devis sur mesure</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center animate-bounce">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-slate-900">Devis Transmis avec Succès !</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto font-medium">
                Merci <span className="text-sky-700 font-bold">{name}</span>. Notre équipe étudie votre demande et vous recontactera au <span className="text-sky-700 font-semibold">{phone || email}</span> sous 30 minutes.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="mt-4 px-6 py-2.5 text-xs font-bold text-white bg-sky-600 rounded-lg hover:bg-sky-700 transition-colors"
              >
                Fermer la fenêtre
              </button>
            </div>
          ) : (
            <>
              {/* Service Selection Tabs */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  1. Choisissez le service concerné
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  <button
                    type="button"
                    onClick={() => setSelectedService('pc')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedService === 'pc'
                        ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Monitor className="w-5 h-5" />
                    <span className="text-xs">Session PC</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('formation')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedService === 'formation'
                        ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <BookOpen className="w-5 h-5" />
                    <span className="text-xs">Formations</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('imprimerie')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedService === 'imprimerie'
                        ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <Printer className="w-5 h-5" />
                    <span className="text-xs">Imprimerie</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setSelectedService('redaction')}
                    className={`p-3 rounded-xl border text-left flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer ${
                      selectedService === 'redaction'
                        ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                    <span className="text-xs">Rédaction</span>
                  </button>
                </div>
              </div>

              {/* Dynamic Parameter Settings */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                    2. Configurez vos options
                  </span>
                  <span className="text-xs text-sky-600 font-bold">Tarification en direct</span>
                </div>

                {selectedService === 'pc' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-700 font-medium">
                      <span>Durée d'accès informatique (heures) :</span>
                      <span className="font-bold text-sky-600">{pcHours} Heure(s)</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="20"
                      value={pcHours}
                      onChange={(e) => setPcHours(parseInt(e.target.value))}
                      className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-500 font-medium">Postes PC Haute Performance, Fibre 1Gbps, Suite Office 365 incluse.</p>
                  </div>
                )}

                {selectedService === 'formation' && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs text-slate-700 font-medium">
                      <span>Volume horaire de cours (Excel, Word, Initiation) :</span>
                      <span className="font-bold text-sky-600">{formationHours} Heures</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="30"
                      value={formationHours}
                      onChange={(e) => setFormationHours(parseInt(e.target.value))}
                      className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                    />
                    <p className="text-[11px] text-slate-500 font-medium">Accompagnement individuel par un formateur expert + support de cours fourni.</p>
                  </div>
                )}

                {selectedService === 'imprimerie' && (
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs text-slate-700 font-medium mb-1">
                        <span>Nombre de pages :</span>
                        <span className="font-bold text-sky-600">{printPages} pages</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="500"
                        value={printPages}
                        onChange={(e) => setPrintPages(parseInt(e.target.value))}
                        className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <label className="block text-[11px] text-slate-500 font-bold mb-1">Couleur</label>
                        <select
                          value={printType}
                          onChange={(e) => setPrintType(e.target.value as 'bw' | 'color')}
                          className="w-full bg-white border border-slate-200 rounded-lg p-2 text-slate-800 font-medium"
                        >
                          <option value="color">Couleur Haute Définition</option>
                          <option value="bw">Noir & Blanc</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] text-slate-500 font-bold mb-1">Format Papier</label>
                        <select
                          value={printPaper}
                          onChange={(e) => setPrintPaper(e.target.value as 'A4' | 'A3')}
                          className="w-full bg-white border border-slate-200 rounded-lg p-2 text-slate-800 font-medium"
                        >
                          <option value="A4">Standard A4 (80g)</option>
                          <option value="A3">Grand Format A3</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-1">
                      <input
                        type="checkbox"
                        id="binding"
                        checked={needBinding}
                        onChange={(e) => setNeedBinding(e.target.checked)}
                        className="rounded border-slate-300 text-sky-600 focus:ring-sky-500"
                      />
                      <label htmlFor="binding" className="text-xs text-slate-700 font-medium cursor-pointer">
                        Ajouter reliure spirale plastique / couverture transparente (+1 000 FCFA)
                      </label>
                    </div>
                  </div>
                )}

                {selectedService === 'redaction' && (
                  <div className="space-y-3">
                    <label className="block text-xs font-bold text-slate-700">Type de document à rédiger / corriger :</label>
                    <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                      {[
                        { id: 'cv', label: 'Curriculum Vitae (CV Modernisé)' },
                        { id: 'lettre', label: 'Lettre de Motivation / Officielle' },
                        { id: 'memoire', label: 'Mise en page Mémoire / Thèse' },
                        { id: 'demarche', label: 'Dossier Administratif en ligne' },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setRedactionType(item.id as any)}
                          className={`p-2.5 rounded-lg border text-left transition-colors cursor-pointer ${
                            redactionType === item.id
                              ? 'bg-sky-50 border-sky-500 text-sky-700 font-bold'
                              : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Estimate Summary Box */}
                <div className="pt-2 border-t border-slate-200 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">Estimation indicative :</span>
                  <div className="text-right">
                    <span className="text-xl font-black text-sky-600 tracking-tight">
                      {calculateTotal().toLocaleString()} FCFA
                    </span>
                    <span className="block text-[10px] text-slate-400 font-medium">
                      (~{(calculateTotal() / 655.957).toFixed(2)} € TTC)
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Information Form */}
              <form onSubmit={handleSubmit} className="space-y-3">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
                  3. Vos coordonnées pour la réservation
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Nom complet *"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg p-2.5 text-xs text-slate-900 outline-none font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      required
                      placeholder="Numéro de téléphone *"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg p-2.5 text-xs text-slate-900 outline-none font-medium"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Adresse e-mail *"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg p-2.5 text-xs text-slate-900 outline-none font-medium"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Précisions / Date souhaitée (optionnel)"
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 focus:border-sky-500 focus:bg-white rounded-lg p-2.5 text-xs text-slate-900 outline-none font-medium"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 mt-2 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl shadow-lg shadow-sky-500/25 flex items-center justify-center gap-2 transform active:scale-98 cursor-pointer transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Envoyer la demande de devis</span>
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
