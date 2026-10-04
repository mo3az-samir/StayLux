import React from 'react';
import { useApp } from '../context/AppContext';
import { PROPERTIES } from '../data/propertiesData';
import { X, Heart, Trash2, Eye, CalendarCheck2 } from 'lucide-react';

export const WishlistDrawer = () => {
  const {
    language,
    wishlist,
    toggleWishlist,
    isWishlistDrawerOpen,
    setIsWishlistDrawerOpen,
    formatPrice,
    setActivePropertyModal,
    setActiveCheckoutProperty
  } = useApp();

  if (!isWishlistDrawerOpen) return null;

  const wishlistedProps = PROPERTIES.filter((p) => wishlist.includes(p.id));

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/80 backdrop-blur-sm animate-modal">
      <div className="w-full max-w-md h-full bg-slate-900 border-l border-slate-800 shadow-2xl flex flex-col">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            <h3 className="text-lg font-black text-white">
              {language === 'ar' ? 'المفضلة' : 'My Wishlist'} ({wishlist.length})
            </h3>
          </div>
          <button
            onClick={() => setIsWishlistDrawerOpen(false)}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex-grow overflow-y-auto space-y-4">
          {wishlistedProps.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <Heart className="w-12 h-12 text-slate-700 mx-auto" />
              <p className="text-sm font-bold text-slate-400">
                {language === 'ar' ? 'قائمة المفضلة فارغة حالياً' : 'Your wishlist is empty'}
              </p>
            </div>
          ) : (
            wishlistedProps.map((prop) => (
              <div
                key={prop.id}
                className="p-3 rounded-2xl glass-card border border-slate-800 flex gap-3 items-center"
              >
                <img
                  src={prop.images[0]}
                  alt={prop.titleAr}
                  className="w-20 h-20 rounded-xl object-cover shrink-0"
                />
                <div className="flex-grow space-y-1">
                  <h4 className="text-xs font-bold text-white line-clamp-1">
                    {language === 'ar' ? prop.titleAr : prop.titleEn}
                  </h4>
                  <span className="text-[11px] text-slate-400 block">
                    {language === 'ar' ? prop.cityNameAr : prop.cityNameEn}
                  </span>
                  <span className="text-sm font-black text-amber-400 block">
                    {formatPrice(prop.priceUsd)}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <button
                    onClick={() => {
                      setIsWishlistDrawerOpen(false);
                      setActivePropertyModal(prop);
                    }}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-400"
                    title={language === 'ar' ? 'عرض' : 'View'}
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => toggleWishlist(prop.id)}
                    className="p-2 rounded-lg bg-slate-800 hover:bg-rose-500/20 text-rose-400"
                    title={language === 'ar' ? 'حذف' : 'Remove'}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
