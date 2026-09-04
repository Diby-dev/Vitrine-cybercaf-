'use client';

import { MapPin, Navigation, Bus, Car, Train, ExternalLink } from 'lucide-react';

export default function MapSection() {
  return (
    <section id="map" className="py-16 bg-white relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-extrabold uppercase tracking-widest text-sky-700 px-3 py-1 rounded-full bg-sky-50 border border-sky-200">
            Localisation & Accès
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-slate-900 tracking-tight">
            Comment Nous <span className="text-gradient">Trouver</span>
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 font-medium">
            Situé au cœur de la ville, facilement accessible en transports en commun et voiture.
          </p>
        </div>

        {/* Map Container & Info Overlay */}
        <div className="relative rounded-2xl overflow-hidden bg-slate-50 border border-slate-200 shadow-xl min-h-[420px] flex flex-col justify-between p-6 sm:p-8">
          
          {/* Simulated Bright Styled Interactive Map Canvas */}
          <div className="absolute inset-0 bg-slate-100 opacity-90">
            {/* Grid Lines Pattern */}
            <div className="w-full h-full bg-[radial-gradient(#0284c7_1px,transparent_1px)] [background-size:24px_24px] opacity-15" />
          </div>

          {/* Map Central Pin Graphic */}
          <div className="relative z-10 my-auto text-center space-y-3 py-8">
            <div className="relative inline-block">
              <div className="animate-ping absolute inset-0 rounded-full bg-sky-400 opacity-30 scale-150" />
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-sky-500 to-blue-600 text-white flex items-center justify-center shadow-xl shadow-sky-500/30 mx-auto relative z-10">
                <MapPin className="w-9 h-9" />
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-md p-4 rounded-xl border border-slate-200 inline-block max-w-md shadow-lg">
              <span className="text-xs font-bold text-sky-700 block uppercase tracking-wider">BENICYTECH LOUNGE</span>
              <p className="text-sm font-bold text-slate-900 mt-0.5">124 Avenue de la République, 75011 Paris</p>
              <p className="text-xs text-slate-500 font-medium mt-1">À 50 mètres de la Station République</p>
            </div>
          </div>

          {/* Bottom Info Strip: Transport & Itinerary Link */}
          <div className="relative z-10 pt-6 border-t border-slate-200 grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            
            <div className="flex items-center gap-3 text-xs text-slate-700">
              <div className="p-2 rounded-lg bg-sky-100 text-sky-600 font-bold">
                <Train className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Métro / Tram</span>
                <span className="text-[11px] text-slate-500 font-medium">Lignes 3, 5, 8, 9 & 11</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-700">
              <div className="p-2 rounded-lg bg-sky-100 text-sky-600 font-bold">
                <Bus className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Bus</span>
                <span className="text-[11px] text-slate-500 font-medium">Arrêt République (Lignes 20, 56, 75)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs text-slate-700">
              <div className="p-2 rounded-lg bg-sky-100 text-sky-600 font-bold">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">Parking</span>
                <span className="text-[11px] text-slate-500 font-medium">Parking couvert Indigo à 100m</span>
              </div>
            </div>

            <div>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 px-4 text-xs font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl flex items-center justify-center gap-2 shadow-md shadow-sky-500/20 transition-all cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Obtenir l'itinéraire</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
