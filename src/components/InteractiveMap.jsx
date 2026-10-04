import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { MapPin, Navigation, Compass, Layers, Star, X } from 'lucide-react';

export const InteractiveMap = ({ properties }) => {
  const { language, formatPrice, setActivePropertyModal } = useApp();
  const [selectedPin, setSelectedPin] = useState(null);

  return (
    <div className="relative w-full h-[550px] rounded-3xl overflow-hidden glass-card border border-slate-800 bg-slate-950 flex items-center justify-center">
      
      {/* Map Backdrop Styling Grid simulation */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_2px,transparent_2px)] [background-size:32px_32px] opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-950 via-slate-900/80 to-slate-950/90" />

      {/* Map Control Badges */}
      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-700 text-xs text-slate-300 font-semibold shadow-lg">
          <Compass className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '10s' }} />
          <span>{language === 'ar' ? 'خريطة تفاعلية حيّة' : 'Live Interactive Map'}</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-semibold shadow-lg">
          <Layers className="w-3.5 h-3.5" />
          <span>{properties.length} {language === 'ar' ? 'عقار' : 'Stays'}</span>
        </div>
      </div>

      {/* Map Grid Markers Representation */}
      <div className="relative w-full h-full max-w-4xl max-h-[450px]">
        {properties.map((prop, idx) => {
          // Generate relative positions on map visualization layout
          const leftPos = 15 + ((idx * 27) % 70);
          const topPos = 20 + ((idx * 21) % 65);

          return (
            <div
              key={prop.id}
              style={{ left: `${leftPos}%`, top: `${topPos}%` }}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 group z-20"
            >
              {/* Price Tag Marker Button */}
              <button
                onClick={() => setSelectedPin(prop)}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-black transition-all duration-300 shadow-xl border ${
                  selectedPin?.id === prop.id
                    ? 'bg-amber-500 text-slate-950 border-amber-400 scale-125 ring-4 ring-amber-500/20'
                    : 'bg-slate-900/90 text-white border-amber-500/40 hover:scale-110 hover:bg-amber-500 hover:text-slate-950'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>{formatPrice(prop.priceUsd)}</span>
              </button>
            </div>
          );
        })}
      </div>

      {/* Selected Property Popup Drawer Card */}
      {selectedPin && (
        <div className="absolute bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-96 z-30 glass-card rounded-2xl p-4 border border-amber-500/40 shadow-2xl animate-modal">
          <div className="flex items-start justify-between mb-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                {language === 'ar' ? selectedPin.cityNameAr : selectedPin.cityNameEn}
              </span>
              <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
                <Star className="w-3.5 h-3.5 fill-amber-400" />
                <span>{selectedPin.rating}</span>
              </div>
            </div>
            <button
              onClick={() => setSelectedPin(null)}
              className="p-1 rounded-lg hover:bg-slate-800 text-slate-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="flex gap-3">
            <img
              src={selectedPin.images[0]}
              alt={selectedPin.titleAr}
              className="w-20 h-20 rounded-xl object-cover shrink-0"
            />
            <div className="space-y-1">
              <h4 className="text-xs font-bold text-white line-clamp-1">
                {language === 'ar' ? selectedPin.titleAr : selectedPin.titleEn}
              </h4>
              <p className="text-[11px] text-slate-400 line-clamp-1">
                {language === 'ar' ? selectedPin.addressAr : selectedPin.addressEn}
              </p>
              <div className="text-sm font-extrabold text-amber-400 pt-1">
                {formatPrice(selectedPin.priceUsd)}{' '}
                <span className="text-[10px] text-slate-400 font-normal">/ {language === 'ar' ? 'ليلة' : 'night'}</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => setActivePropertyModal(selectedPin)}
            className="w-full mt-3 py-2 rounded-xl bg-amber-500 text-slate-950 text-xs font-bold hover:brightness-110 transition-all text-center"
          >
            {language === 'ar' ? 'عرض التفاصيل الكاملة' : 'View Full Details'}
          </button>
        </div>
      )}

    </div>
  );
};
