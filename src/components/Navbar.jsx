import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { CURRENCIES } from '../data/propertiesData';
import {
  Hotel,
  Heart,
  Globe,
  DollarSign,
  User,
  PlusCircle,
  Menu,
  X,
  BookmarkCheck,
  ChevronDown
} from 'lucide-react';

export const Navbar = () => {
  const {
    currency,
    setCurrency,
    language,
    setLanguage,
    wishlist,
    setIsWishlistDrawerOpen,
    user,
    setIsAuthModalOpen,
    setIsBookingsModalOpen,
    userBookings,
    addToast
  } = useApp();

  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    addToast(newLang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Switched to English', 'info');
  };

  const handleListProperty = () => {
    addToast(
      language === 'ar'
        ? 'مرحباً بك شريكاً معنا! سيتم الاتصال بك من فريق استقطاب المضيفين في StayLux.'
        : 'Welcome partner! Our host team will contact you shortly.',
      'info'
    );
  };

  return (
    <nav className="sticky top-0 z-40 glass-nav transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 via-amber-500 to-yellow-400 flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:scale-105 transition-transform duration-300">
              <Hotel className="w-6 h-6 text-slate-950 font-bold" />
            </div>
            <div>
              <span className="text-2xl font-extrabold tracking-tight text-white flex items-center gap-1 font-['Plus_Jakarta_Sans',sans-serif]">
                STAY<span className="text-amber-400">LUX</span>
              </span>
              <p className="text-[11px] text-slate-400 font-medium tracking-wide">
                {language === 'ar' ? 'منصة الفنادق والشقق الفاخرة' : 'Luxury Hotels & Apartments'}
              </p>
            </div>
          </div>

          {/* Desktop Right Navigation Actions */}
          <div className="hidden md:flex items-center gap-4">
            
            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setIsCurrencyDropdownOpen(!isCurrencyDropdownOpen)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 text-sm font-medium transition-colors"
              >
                <DollarSign className="w-4 h-4 text-amber-400" />
                <span>{CURRENCIES[currency].code} ({CURRENCIES[currency].symbol})</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isCurrencyDropdownOpen && (
                <div className="absolute top-full mt-2 right-0 w-48 rounded-xl bg-slate-800 border border-slate-700 shadow-2xl py-2 z-50 animate-modal">
                  <div className="px-3 py-1 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    {language === 'ar' ? 'اختر العملة' : 'Select Currency'}
                  </div>
                  {Object.values(CURRENCIES).map((curr) => (
                    <button
                      key={curr.code}
                      onClick={() => {
                        setCurrency(curr.code);
                        setIsCurrencyDropdownOpen(false);
                        addToast(
                          language === 'ar'
                            ? `تم تغيير العملة إلى ${curr.nameAr}`
                            : `Currency set to ${curr.nameEn}`,
                          'info'
                        );
                      }}
                      className={`w-full flex items-center justify-between px-3.5 py-2 text-sm text-right transition-colors ${
                        currency === curr.code
                          ? 'bg-amber-500/10 text-amber-400 font-semibold'
                          : 'text-slate-300 hover:bg-slate-700/50'
                      }`}
                    >
                      <span>{curr.code} - {language === 'ar' ? curr.nameAr : curr.nameEn}</span>
                      <span className="text-xs font-mono text-slate-400">{curr.symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 text-sm font-medium transition-colors"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>

            {/* Wishlist Button */}
            <button
              onClick={() => setIsWishlistDrawerOpen(true)}
              className="relative p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 transition-colors group"
              title={language === 'ar' ? 'المفضلة' : 'Wishlist'}
            >
              <Heart className="w-5 h-5 text-rose-400 group-hover:scale-110 transition-transform" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-rose-500 text-white text-[11px] font-bold flex items-center justify-center shadow-lg shadow-rose-500/30">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* User Bookings Counter */}
            <button
              onClick={() => setIsBookingsModalOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700/60 text-slate-200 text-sm font-medium transition-colors"
            >
              <BookmarkCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ar' ? 'حجوزاتي' : 'My Bookings'}</span>
              <span className="px-1.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold">
                {userBookings.length}
              </span>
            </button>

            {/* Add Property Partner CTA */}
            <button
              onClick={handleListProperty}
              className="hidden lg:flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-amber-300 text-sm font-semibold transition-all"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{language === 'ar' ? 'أضف عقارك' : 'List Property'}</span>
            </button>

            {/* User Profile / Auth Button */}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="flex items-center gap-2.5 p-1.5 pr-3 pl-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-semibold text-sm hover:brightness-110 transition-all shadow-md shadow-amber-500/10"
            >
              <img
                src={user?.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'}
                alt="User"
                className="w-7 h-7 rounded-lg object-cover ring-2 ring-slate-900"
              />
              <span>{user?.name || (language === 'ar' ? 'تسجيل الدخول' : 'Sign In')}</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={() => setIsWishlistDrawerOpen(true)}
              className="relative p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200"
            >
              <Heart className="w-5 h-5 text-rose-400" />
              {wishlist.length > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-rose-500 text-white text-[10px] font-bold flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-800 border border-slate-700 text-slate-200"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-card border-t border-slate-800 p-4 space-y-3 animate-modal">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <User className="w-4 h-4 text-amber-400" />
              <span>{user?.name}</span>
            </div>
            <button
              onClick={toggleLanguage}
              className="px-3 py-1 rounded-lg bg-slate-800 text-xs font-semibold text-cyan-400 border border-slate-700"
            >
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-2">
            <button
              onClick={() => {
                setIsBookingsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-800 text-sm font-semibold text-slate-200 border border-slate-700"
            >
              <BookmarkCheck className="w-4 h-4 text-emerald-400" />
              <span>{language === 'ar' ? 'حجوزاتي' : 'My Bookings'}</span>
            </button>
            
            <button
              onClick={handleListProperty}
              className="flex items-center justify-center gap-2 p-3 rounded-xl bg-amber-500/10 text-sm font-semibold text-amber-400 border border-amber-500/30"
            >
              <PlusCircle className="w-4 h-4" />
              <span>{language === 'ar' ? 'أضف عقارك' : 'List Property'}</span>
            </button>
          </div>

          {/* Currency selection row */}
          <div className="pt-2">
            <label className="text-xs font-semibold text-slate-400 mb-1.5 block">
              {language === 'ar' ? 'العملة المعتمدة' : 'Select Currency'}
            </label>
            <div className="grid grid-cols-3 gap-2">
              {Object.values(CURRENCIES).map((curr) => (
                <button
                  key={curr.code}
                  onClick={() => {
                    setCurrency(curr.code);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`py-2 px-2 rounded-lg text-xs font-semibold text-center border ${
                    currency === curr.code
                      ? 'bg-amber-500/20 border-amber-500 text-amber-300'
                      : 'bg-slate-800/80 border-slate-700 text-slate-300'
                  }`}
                >
                  {curr.code} ({curr.symbol})
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
