import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Hotel, Mail, Send, Heart, Shield, Globe } from 'lucide-react';

export const Footer = () => {
  const { language, addToast } = useApp();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    addToast(
      language === 'ar'
        ? 'تم الاشتراك بنجاح في النشرة البريدية الحصرية لـ StayLux! 🎉'
        : 'Subscribed to StayLux VIP newsletter! 🎉',
      'success'
    );
    setEmail('');
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-400 text-xs pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Brand & Newsletter */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-600 to-yellow-400 flex items-center justify-center text-slate-950 font-bold">
                <Hotel className="w-5 h-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-white font-['Plus_Jakarta_Sans',sans-serif]">
                STAY<span className="text-amber-400">LUX</span>
              </span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              {language === 'ar'
                ? 'المنصة الأولى والأرقى لحجز الفنادق الفاخرة، الشقق البنتهاوس، والفيلات الخاصة بأعلى مستويات الفخامة والأمان.'
                : 'Premier booking platform for luxury 5-star hotels, sky penthouses, and private beachfront villas.'}
            </p>

            {/* Newsletter Form */}
            <form onSubmit={handleSubscribe} className="pt-2">
              <label className="text-[11px] font-bold text-slate-300 block mb-1.5">
                {language === 'ar' ? 'اشترك للحصول على عروض الخصومات الحصرية' : 'Subscribe for VIP Secret Deals'}
              </label>
              <div className="flex items-center gap-2 max-w-sm">
                <div className="relative flex-grow">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={language === 'ar' ? 'بريدك الإلكتروني...' : 'Your email...'}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 pr-9 text-xs text-white focus:border-amber-400 focus:outline-none"
                  />
                  <Mail className="w-4 h-4 text-slate-500 absolute top-3.5 right-3" />
                </div>
                <button
                  type="submit"
                  className="px-4 py-3 rounded-xl bg-amber-500 text-slate-950 font-bold hover:brightness-110 transition-all shrink-0 flex items-center gap-1"
                >
                  <span>{language === 'ar' ? 'اشترك' : 'Join'}</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

          {/* Quick Links Column 1 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'ar' ? 'الوجهات الشهيرة' : 'Popular Cities'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'فنادق القاهرة' : 'Cairo Hotels'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'شقق دبي' : 'Dubai Apartments'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'فنادق الرياض' : 'Riyadh Hotels'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'فيلات العلا' : 'AlUla Villas'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'شقق باريس' : 'Paris Flats'}</a></li>
            </ul>
          </div>

          {/* Quick Links Column 2 */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'ar' ? 'فئات الإقامة' : 'Categories'}
            </h4>
            <ul className="space-y-2">
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'فنادق 5 نجوم' : '5★ Hotels'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'شقق وبنتهاوس' : 'Penthouses'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'فيلات شاطئية' : 'Beach Villas'}</a></li>
              <li><a href="#properties-section" className="hover:text-amber-400 transition-colors">{language === 'ar' ? 'شاليهات الجبال' : 'Mountain Chalets'}</a></li>
            </ul>
          </div>

          {/* Quick Links Column 3 */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {language === 'ar' ? 'الدعم ووسائل الدفع' : 'Support & Payments'}
            </h4>
            <p className="text-xs text-slate-400">
              {language === 'ar' ? 'دعم فني متواصل 24 ساعة طوال أيام الأسبوع' : '24/7 dedicated customer service helpline'}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">VISA</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">Mastercard</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">Apple Pay</span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300">mada</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>
            © 2026 StayLux Inc. {language === 'ar' ? 'جميع الحقوق محفوظة.' : 'All rights reserved.'}
          </p>
          <div className="flex items-center gap-1">
            <span>{language === 'ar' ? 'تم التطوير بواسطة' : 'Crafted with'}</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span className="text-amber-400 font-bold">{language === 'ar' ? 'فريق Antigravity & معاذ' : 'Antigravity & Moaz'}</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
