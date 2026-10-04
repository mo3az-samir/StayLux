import React from 'react';
import { useApp } from '../context/AppContext';
import { Filter, Star, Check, RotateCcw, DollarSign, SlidersHorizontal } from 'lucide-react';

export const FilterSidebar = () => {
  const {
    language,
    priceRange,
    setPriceRange,
    selectedStars,
    setSelectedStars,
    selectedAmenities,
    setSelectedAmenities,
    formatPrice,
    addToast
  } = useApp();

  const handleStarToggle = (starNum) => {
    if (selectedStars.includes(starNum)) {
      setSelectedStars(selectedStars.filter((s) => s !== starNum));
    } else {
      setSelectedStars([...selectedStars, starNum]);
    }
  };

  const handleAmenityToggle = (amenityKey) => {
    if (selectedAmenities.includes(amenityKey)) {
      setSelectedAmenities(selectedAmenities.filter((a) => a !== amenityKey));
    } else {
      setSelectedAmenities([...selectedAmenities, amenityKey]);
    }
  };

  const handleResetFilters = () => {
    setPriceRange(1000);
    setSelectedStars([]);
    setSelectedAmenities([]);
    addToast(language === 'ar' ? 'تم إعادة ضبط جميع الفلاتر' : 'Reset all filters', 'info');
  };

  const AMENITIES_LIST = [
    { key: 'pool', labelAr: 'حمام سباحة 🏊‍♂️', labelEn: 'Swimming Pool' },
    { key: 'wifi', labelAr: 'واي فاي مجاني 📶', labelEn: 'Free High-speed WiFi' },
    { key: 'breakfast', labelAr: 'إفطار فاخر 🍳', labelEn: 'Luxury Breakfast' },
    { key: 'spa', labelAr: 'سبا ومساج 💆‍♀️', labelEn: 'Wellness Spa' },
    { key: 'parking', labelAr: 'موقف سيارات مجاني 🅿️', labelEn: 'Free Parking' },
    { key: 'gym', labelAr: 'صالة ألعاب رياضية 🏋️', labelEn: 'Fitness Gym' },
  ];

  return (
    <div className="glass-card rounded-2xl p-5 border border-slate-800 space-y-6">
      
      {/* Title Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-5 h-5 text-amber-400" />
          <h3 className="text-base font-bold text-white">
            {language === 'ar' ? 'تصفية النتائج' : 'Filter Results'}
          </h3>
        </div>
        <button
          onClick={handleResetFilters}
          className="flex items-center gap-1 text-xs text-slate-400 hover:text-amber-400 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>{language === 'ar' ? 'إعادة ضبط' : 'Reset'}</span>
        </button>
      </div>

      {/* 1. Price Range Filter */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="text-xs font-bold text-slate-300">
            {language === 'ar' ? 'الحد الأقصى للسعر / ليلة' : 'Max Price / Night'}
          </label>
          <span className="text-sm font-extrabold text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
            {formatPrice(priceRange)}
          </span>
        </div>
        <input
          type="range"
          min="100"
          max="1000"
          step="50"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
        />
        <div className="flex justify-between text-[11px] text-slate-500 font-medium">
          <span>{formatPrice(100)}</span>
          <span>{formatPrice(1000)}+</span>
        </div>
      </div>

      {/* 2. Star Rating Filter */}
      <div className="space-y-3 pt-4 border-t border-slate-800">
        <label className="text-xs font-bold text-slate-300 block">
          {language === 'ar' ? 'تصنيف النجوم' : 'Star Rating'}
        </label>
        <div className="space-y-2">
          {[5, 4, 3].map((starNum) => (
            <label
              key={starNum}
              onClick={() => handleStarToggle(starNum)}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                  selectedStars.includes(starNum)
                    ? 'bg-amber-500 border-amber-500 text-slate-950'
                    : 'border-slate-700 bg-slate-800'
                }`}>
                  {selectedStars.includes(starNum) && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: starNum }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <span className="text-xs font-semibold text-slate-400">
                {starNum} {language === 'ar' ? 'نجوم' : 'Stars'}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* 3. Amenities Filter */}
      <div className="space-y-3 pt-4 border-t border-slate-800">
        <label className="text-xs font-bold text-slate-300 block">
          {language === 'ar' ? 'الخدمات والتجهيزات' : 'Amenities & Features'}
        </label>
        <div className="space-y-2">
          {AMENITIES_LIST.map((item) => (
            <label
              key={item.key}
              onClick={() => handleAmenityToggle(item.key)}
              className="flex items-center justify-between p-2 rounded-xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800 cursor-pointer transition-colors"
            >
              <div className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                  selectedAmenities.includes(item.key)
                    ? 'bg-amber-500 border-amber-500 text-slate-950'
                    : 'border-slate-700 bg-slate-800'
                }`}>
                  {selectedAmenities.includes(item.key) && <Check className="w-3 h-3 stroke-[3]" />}
                </div>
                <span className="text-xs text-slate-200 font-medium">
                  {language === 'ar' ? item.labelAr : item.labelEn}
                </span>
              </div>
            </label>
          ))}
        </div>
      </div>

    </div>
  );
};
