import React, { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { Flame, Clock, Ticket, Check } from 'lucide-react';

export const DealsBanner = () => {
  const { language, addToast } = useApp();
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 35, seconds: 20 });
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyCode = () => {
    navigator.clipboard.writeText('STAYLUX25');
    setCopied(true);
    addToast(language === 'ar' ? 'تم نسخ كود الخصم STAYLUX25 🎟️' : 'Copied promo code STAYLUX25 🎟️', 'success');
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/40 p-8 md:p-12 bg-gradient-to-r from-amber-600/20 via-slate-900 to-amber-900/20 shadow-2xl">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 blur-3xl rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Offer Details */}
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider shadow-lg">
              <Flame className="w-4 h-4 fill-slate-950" />
              <span>{language === 'ar' ? 'عرض الموسم المحدود ⚡' : 'Limited Summer Deal ⚡'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight">
              {language === 'ar' ? (
                <>
                  وفّر <span className="text-amber-400">25% إضافية</span> على كافة الأجنحة الفاخرة والبنتهاوس
                </>
              ) : (
                <>
                  Save <span className="text-amber-400">Extra 25%</span> on Luxury Suites & Penthouses
                </>
              )}
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
              {language === 'ar'
                ? 'استخدم كود الخصم الحصري عند إتمام الحجز للحصول على خصم فوري ومميزات مجانية كالإفطار والتوصيل من المطار.'
                : 'Apply coupon code STAYLUX25 at checkout for instant savings and complimentary VIP amenities.'}
            </p>
          </div>

          {/* Timer & Voucher Button */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            
            {/* Timer Blocks */}
            <div className="flex items-center gap-3">
              <div className="text-center bg-slate-950 border border-slate-800 p-3 rounded-2xl min-w-[70px]">
                <span className="text-2xl font-black text-amber-400 block font-mono">
                  {String(timeLeft.hours).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">{language === 'ar' ? 'ساعة' : 'Hrs'}</span>
              </div>
              <span className="text-xl font-bold text-amber-500">:</span>
              <div className="text-center bg-slate-950 border border-slate-800 p-3 rounded-2xl min-w-[70px]">
                <span className="text-2xl font-black text-amber-400 block font-mono">
                  {String(timeLeft.minutes).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">{language === 'ar' ? 'دقيقة' : 'Min'}</span>
              </div>
              <span className="text-xl font-bold text-amber-500">:</span>
              <div className="text-center bg-slate-950 border border-slate-800 p-3 rounded-2xl min-w-[70px]">
                <span className="text-2xl font-black text-amber-400 block font-mono">
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">{language === 'ar' ? 'ثانية' : 'Sec'}</span>
              </div>
            </div>

            {/* Coupon Code Button */}
            <button
              onClick={handleCopyCode}
              className="flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-slate-950 border-2 border-dashed border-amber-500/60 text-amber-300 font-mono font-bold text-sm hover:bg-slate-900 transition-all shadow-xl"
            >
              <Ticket className="w-5 h-5 text-amber-400" />
              <span>STAYLUX25</span>
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <span className="text-xs bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">{language === 'ar' ? 'انسخ الكود' : 'Copy'}</span>}
            </button>

          </div>

        </div>

      </div>
    </section>
  );
};
