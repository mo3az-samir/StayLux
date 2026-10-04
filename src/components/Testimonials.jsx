import React from 'react';
import { useApp } from '../context/AppContext';
import { TESTIMONIALS } from '../data/propertiesData';
import { Star, Quote, ShieldCheck, Headphones, RefreshCw, Award } from 'lucide-react';

export const Testimonials = () => {
  const { language } = useApp();

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
        <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 text-xs font-bold border border-amber-500/30 inline-block">
          {language === 'ar' ? 'تجارب وآراء عملاء StayLux' : 'Client Testimonials'}
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white">
          {language === 'ar' ? 'ماذا يقول المسافرون والنزلاء عن خدماتنا؟' : 'What Our Guests Say'}
        </h2>
      </div>

      {/* Testimonial Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((item) => (
          <div
            key={item.id}
            className="glass-card p-6 rounded-3xl border border-slate-800 flex flex-col justify-between space-y-4 hover:border-slate-700 transition-colors shadow-lg"
          >
            <div className="space-y-3">
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>

              {/* Quote Comment */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                "{language === 'ar' ? item.commentAr : item.commentEn}"
              </p>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-4 border-t border-slate-800">
              <img
                src={item.avatar}
                alt={item.nameAr}
                className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/40"
              />
              <div>
                <h4 className="text-xs font-bold text-white">
                  {language === 'ar' ? item.nameAr : item.nameEn}
                </h4>
                <span className="text-[11px] text-slate-400">
                  {language === 'ar' ? item.roleAr : item.roleEn}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Guarantees Strip */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6 rounded-3xl glass-card border border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">{language === 'ar' ? 'ضمان أفضل سعر' : 'Best Rate Guarantee'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'نطابق أي سعر أقل تجده' : 'We match lower prices'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">{language === 'ar' ? 'عقارات مفحوصة' : '100% Verified Stays'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'معايير جودة 5 نجوم' : '5-star quality seals'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
            <RefreshCw className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">{language === 'ar' ? 'إلغاء مرن' : 'Flexible Cancellation'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'بدون رسوم حتى 48h' : 'Free up to 48 hrs'}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400 shrink-0">
            <Headphones className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-xs font-bold text-white">{language === 'ar' ? 'دعم VIP على مدار الساعة' : '24/7 VIP Support'}</h4>
            <p className="text-[11px] text-slate-400">{language === 'ar' ? 'فريق خدمة متكامل بالخدمة' : 'Concierge always ready'}</p>
          </div>
        </div>
      </div>

    </section>
  );
};
