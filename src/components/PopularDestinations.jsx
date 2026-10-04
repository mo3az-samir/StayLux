import React from 'react';
import { useApp } from '../context/AppContext';
import { POPULAR_DESTINATIONS } from '../data/propertiesData';
import { MapPin, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';

export const PopularDestinations = () => {
  const { language, setSearchDestination, formatPrice } = useApp();

  const handleCitySelect = (cityId) => {
    setSearchDestination(cityId);
    const target = document.getElementById('properties-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{language === 'ar' ? 'استكشف العالم معنا' : 'Explore Top Destinations'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            {language === 'ar' ? 'الوجهات الأكثر طلباً وإقبالاً' : 'Popular Featured Destinations'}
          </h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-400 max-w-md">
          {language === 'ar'
            ? 'تصفح أرقى المدن السياحية في الشرق الأوسط وأوروبا واستمتع بخصومات حصرية.'
            : 'Explore premier travel hotspots with exclusiveStayLux partner rates.'}
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {POPULAR_DESTINATIONS.map((dest) => (
          <div
            key={dest.id}
            onClick={() => handleCitySelect(dest.id)}
            className="group relative h-80 rounded-3xl overflow-hidden border border-slate-800 cursor-pointer shadow-xl hover:shadow-2xl hover:border-amber-500/40 transition-all duration-500"
          >
            {/* Image */}
            <img
              src={dest.image}
              alt={dest.nameAr}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

            {/* Top Badge */}
            <div className="absolute top-4 right-4">
              <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-slate-700 text-amber-300 text-xs font-bold">
                {dest.propertiesCount}+ {language === 'ar' ? 'عقار فاخر' : 'Luxury Stays'}
              </span>
            </div>

            {/* Bottom Content */}
            <div className="absolute bottom-5 left-5 right-5 space-y-1">
              <span className="text-xs text-amber-400 font-bold block">
                {dest.countryAr}
              </span>
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-black text-white group-hover:text-amber-300 transition-colors">
                  {language === 'ar' ? dest.nameAr : dest.nameEn}
                </h3>

                <div className="w-9 h-9 rounded-full bg-amber-500/20 group-hover:bg-amber-500 border border-amber-500/40 group-hover:text-slate-950 text-amber-300 flex items-center justify-center transition-all">
                  {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </div>
              </div>

              <p className="text-xs text-slate-300 pt-1">
                {language === 'ar' ? 'تبدأ الأسعار من ' : 'Starting from '}
                <span className="font-extrabold text-amber-400 text-sm">{formatPrice(dest.startPriceUsd)}</span>
                <span className="text-[10px] text-slate-400"> / {language === 'ar' ? 'ليلة' : 'night'}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
