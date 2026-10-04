import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Star, Heart, MapPin, ChevronLeft, ChevronRight, Sparkles, Building2, Eye, CalendarCheck2 } from 'lucide-react';

export const PropertyCard = ({ property }) => {
  const {
    language,
    wishlist,
    toggleWishlist,
    formatPrice,
    setActivePropertyModal,
    setActiveCheckoutProperty
  } = useApp();

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const isWishlisted = wishlist.includes(property.id);

  const nextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <div className="group glass-card rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-700/80 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/5 flex flex-col h-full">
      
      {/* Image Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
        
        {/* Main Image */}
        <img
          src={property.images[activeImageIndex]}
          alt={property.titleAr}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/30" />

        {/* Badges Top Left & Right */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          
          {/* Badge Tag */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-amber-500/40 text-amber-300 text-xs font-bold shadow-lg pointer-events-auto">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>{language === 'ar' ? property.badgeAr : property.badgeEn}</span>
          </div>

          {/* Wishlist Heart Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleWishlist(property.id);
            }}
            className="p-2.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-900 transition-all pointer-events-auto shadow-lg group/btn"
          >
            <Heart
              className={`w-4 h-4 transition-transform ${
                isWishlisted
                  ? 'fill-rose-500 text-rose-500 scale-110'
                  : 'text-slate-300 group-hover/btn:scale-110'
              }`}
            />
          </button>
        </div>

        {/* Carousel Navigation Arrows */}
        {property.images.length > 1 && (
          <div className="absolute inset-y-0 left-2 right-2 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={prevImage}
              className="p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 backdrop-blur-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={nextImage}
              className="p-1.5 rounded-full bg-slate-950/70 text-white hover:bg-slate-900 backdrop-blur-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Image Dots Indicator */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
          {property.images.map((_, idx) => (
            <span
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-all ${
                idx === activeImageIndex ? 'w-4 bg-amber-400' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Content Container */}
      <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
        
        <div className="space-y-2">
          {/* Rating & City Location */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-slate-300 font-medium">
              <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span className="truncate max-w-[170px]">
                {language === 'ar' ? property.cityNameAr : property.cityNameEn}
              </span>
            </div>

            <div className="flex items-center gap-1 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20 text-amber-300 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
              <span>{property.rating}</span>
              <span className="text-[10px] text-slate-400">({property.reviewsCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3
            onClick={() => setActivePropertyModal(property)}
            className="text-base font-extrabold text-white line-clamp-1 hover:text-amber-400 cursor-pointer transition-colors leading-snug"
          >
            {language === 'ar' ? property.titleAr : property.titleEn}
          </h3>

          {/* Address */}
          <p className="text-xs text-slate-400 line-clamp-1">
            {language === 'ar' ? property.addressAr : property.addressEn}
          </p>
        </div>

        {/* Key Features Icons */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-800/80 text-[11px] text-slate-300">
          <span className="bg-slate-800 px-2 py-1 rounded-md">
            {property.type === 'hotel'
              ? (language === 'ar' ? 'فندق 5 نجوم' : '5★ Hotel')
              : (language === 'ar' ? 'شقة فاخرة' : 'Luxury Flat')}
          </span>
          <span className="bg-slate-800 px-2 py-1 rounded-md">
            {language === 'ar' ? 'مسبح & سبا' : 'Pool & Spa'}
          </span>
          <span className="bg-slate-800 px-2 py-1 rounded-md">
            {language === 'ar' ? 'إفطار مجاني' : 'Free Breakfast'}
          </span>
        </div>

        {/* Pricing & Actions Row */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-between gap-2">
          
          {/* Price */}
          <div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-lg font-black text-amber-400">
                {formatPrice(property.priceUsd)}
              </span>
              <span className="text-[11px] text-slate-400 font-normal">
                / {language === 'ar' ? 'ليلة' : 'night'}
              </span>
            </div>
            {property.originalPriceUsd && (
              <span className="text-xs text-slate-500 line-through">
                {formatPrice(property.originalPriceUsd)}
              </span>
            )}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActivePropertyModal(property)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
              title={language === 'ar' ? 'التفاصيل' : 'Details'}
            >
              <Eye className="w-4 h-4 text-cyan-400" />
            </button>

            <button
              onClick={() => setActiveCheckoutProperty(property)}
              className="px-3.5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold text-xs hover:brightness-110 active:scale-95 transition-all shadow-md shadow-amber-500/15 flex items-center gap-1.5"
            >
              <CalendarCheck2 className="w-3.5 h-3.5" />
              <span>{language === 'ar' ? 'احجز الآن' : 'Book'}</span>
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
