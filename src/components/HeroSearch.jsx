import React from 'react';
import { useApp } from '../context/AppContext';
import { CITIES, CATEGORIES } from '../data/propertiesData';
import { Search, MapPin, Calendar, Users, Sparkles, Building2, Home, Palmtree, ArrowRight } from 'lucide-react';

export const HeroSearch = () => {
  const {
    language,
    searchDestination,
    setSearchDestination,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guestsCount,
    setGuestsCount,
    selectedCategory,
    setSelectedCategory,
    addToast
  } = useApp();

  // Calculate nights
  const nights = Math.max(
    1,
    Math.ceil(
      (new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24)
    )
  );

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    const cityObj = CITIES.find((c) => c.id === searchDestination);
    const destinationName = cityObj ? (language === 'ar' ? cityObj.nameAr : cityObj.nameEn) : 'جميع الوجهات';
    
    addToast(
      language === 'ar'
        ? `جاري البحث عن الإقامات المتاحة في ${destinationName} لـ ${nights} ليلة...`
        : `Searching stays in ${destinationName} for ${nights} nights...`,
      'info'
    );

    // Smooth scroll down to property grid
    const target = document.getElementById('properties-section');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative pt-10 pb-20 overflow-hidden bg-slate-950">
      {/* Background Ambient Glow & Graphic Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-amber-500/10 via-amber-600/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full pointer-events-none" />
      
      {/* Background Image Grid Backdrop */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Hero Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wide uppercase mb-4 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>{language === 'ar' ? 'الوجهة الأولى للإقامات الفاخرة' : 'World Premier Luxury Stays'}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            {language === 'ar' ? (
              <>
                احجز إقامتك في أفخم <span className="text-gradient-gold">الفنادق والشقق</span> العالمية
              </>
            ) : (
              <>
                Book Extraordinary <span className="text-gradient-gold">Hotels & Penthouse</span> Stays
              </>
            )}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            {language === 'ar'
              ? 'تجارب إقامة مصممة بعناية فائقة في القاهرة، دبي، الرياض، العلا، باريس، ولندن بأسعار حصرية ورسومات شفافة.'
              : 'Handpicked luxury villas, 5-star hotels, and sky penthouses across iconic global cities.'}
          </p>
        </div>

        {/* Search Engine Card */}
        <div className="glass-card rounded-3xl p-4 sm:p-6 shadow-2xl border border-slate-700/60 max-w-5xl mx-auto animate-pulse-glow">
          
          {/* Property Category Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-6 border-b border-slate-700/60 pb-4">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'all'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>{language === 'ar' ? 'الكل' : 'All Stays'}</span>
            </button>

            <button
              onClick={() => setSelectedCategory('hotel')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'hotel'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{language === 'ar' ? 'فنادق 5 نجوم 🏨' : 'Hotels 🏨'}</span>
            </button>

            <button
              onClick={() => setSelectedCategory('apartment')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'apartment'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Home className="w-4 h-4" />
              <span>{language === 'ar' ? 'شقق وبنتهاوس 🏢' : 'Apartments 🏢'}</span>
            </button>

            <button
              onClick={() => setSelectedCategory('villa')}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                selectedCategory === 'villa'
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20'
                  : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              <Palmtree className="w-4 h-4" />
              <span>{language === 'ar' ? 'فيلات وشاليهات 🏖️' : 'Villas & Chalets 🏖️'}</span>
            </button>
          </div>

          {/* Form Controls Grid */}
          <form onSubmit={handleSearchSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center">
            
            {/* 1. Destination Field */}
            <div className="md:col-span-4 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 hover:border-amber-500/50 transition-colors">
              <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
                <MapPin className="w-3.5 h-3.5 text-amber-400" />
                <span>{language === 'ar' ? 'الوجهة / المدينة' : 'Destination'}</span>
              </label>
              <select
                value={searchDestination}
                onChange={(e) => setSearchDestination(e.target.value)}
                className="w-full bg-transparent text-white font-bold text-sm focus:outline-none cursor-pointer pr-1"
              >
                {CITIES.map((city) => (
                  <option key={city.id} value={city.id} className="bg-slate-900 text-white">
                    {language === 'ar' ? city.nameAr : city.nameEn}
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Check In Date */}
            <div className="md:col-span-3 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 hover:border-amber-500/50 transition-colors">
              <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                <span>{language === 'ar' ? 'الوصول - المغادرة' : 'Check-In - Out'}</span>
                <span className="mr-auto text-[10px] bg-amber-500/20 text-amber-300 px-1.5 py-0.5 rounded-md font-bold">
                  {nights} {language === 'ar' ? 'ليالٍ' : 'nights'}
                </span>
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="date"
                  value={checkInDate}
                  onChange={(e) => setCheckInDate(e.target.value)}
                  className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                />
                <span className="text-slate-500 font-bold">-</span>
                <input
                  type="date"
                  value={checkOutDate}
                  onChange={(e) => setCheckOutDate(e.target.value)}
                  className="w-full bg-transparent text-white text-xs font-semibold focus:outline-none cursor-pointer"
                />
              </div>
            </div>

            {/* 3. Guests Field */}
            <div className="md:col-span-2 bg-slate-900/90 border border-slate-700/80 rounded-2xl p-3 hover:border-amber-500/50 transition-colors">
              <label className="text-xs font-semibold text-slate-400 flex items-center gap-1.5 mb-1">
                <Users className="w-3.5 h-3.5 text-emerald-400" />
                <span>{language === 'ar' ? 'الضيوف' : 'Guests'}</span>
              </label>
              <select
                value={guestsCount}
                onChange={(e) => setGuestsCount(Number(e.target.value))}
                className="w-full bg-transparent text-white font-bold text-sm focus:outline-none cursor-pointer"
              >
                <option value={1} className="bg-slate-900">1 {language === 'ar' ? 'ضيف' : 'Guest'}</option>
                <option value={2} className="bg-slate-900">2 {language === 'ar' ? 'ضيفين' : 'Guests'}</option>
                <option value={3} className="bg-slate-900">3 {language === 'ar' ? 'ضيوف' : 'Guests'}</option>
                <option value={4} className="bg-slate-900">4 {language === 'ar' ? 'ضيوف' : 'Guests'}</option>
                <option value={6} className="bg-slate-900">6 {language === 'ar' ? 'أقرباء / مجموعة' : 'Group'}</option>
              </select>
            </div>

            {/* 4. Search CTA Button */}
            <div className="md:col-span-3">
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-base flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25"
              >
                <Search className="w-5 h-5 font-extrabold" />
                <span>{language === 'ar' ? 'ابحث عن الإقامة' : 'Search Luxury Stays'}</span>
              </button>
            </div>

          </form>

        </div>

        {/* Highlight Trust Badges Below Hero */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12 text-center">
          <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
            <span className="text-2xl mb-1 block">🛡️</span>
            <h4 className="text-xs font-bold text-slate-200">{language === 'ar' ? 'حجز آمن 100%' : '100% Secure Booking'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'تأكيد فوري وقسيمة ملونة' : 'Instant digital voucher'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
            <span className="text-2xl mb-1 block">💎</span>
            <h4 className="text-xs font-bold text-slate-200">{language === 'ar' ? 'عقارات مفحوصة' : 'Verified Luxury Stays'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'أرقى معايير الجودة والراحة' : 'Handpicked 5-star quality'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
            <span className="text-2xl mb-1 block">🔄</span>
            <h4 className="text-xs font-bold text-slate-200">{language === 'ar' ? 'إلغاء مجاني' : 'Free Cancellation'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'مرونة كاملة حتى 48 ساعة' : 'Flexibility up to 48 hrs'}</p>
          </div>
          <div className="p-3 rounded-2xl bg-slate-900/50 border border-slate-800">
            <span className="text-2xl mb-1 block">🎧</span>
            <h4 className="text-xs font-bold text-slate-200">{language === 'ar' ? 'دعم 24/7' : '24/7 VIP Support'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'فريق خدمة النزلاء بالخدمة' : 'Concierge service around clock'}</p>
          </div>
        </div>

      </div>
    </div>
  );
};
