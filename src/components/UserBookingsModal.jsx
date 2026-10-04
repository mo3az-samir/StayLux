import React from 'react';
import { useApp } from '../context/AppContext';
import { X, BookmarkCheck, Calendar, MapPin, Printer, QrCode } from 'lucide-react';

export const UserBookingsModal = () => {
  const {
    language,
    isBookingsModalOpen,
    setIsBookingsModalOpen,
    userBookings,
    formatPrice,
    addToast
  } = useApp();

  if (!isBookingsModalOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-modal">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/50">
          <div className="flex items-center gap-2">
            <BookmarkCheck className="w-5 h-5 text-emerald-400" />
            <h3 className="text-lg font-black text-white">
              {language === 'ar' ? 'سجل حجوزاتي' : 'My Bookings History'} ({userBookings.length})
            </h3>
          </div>
          <button
            onClick={() => setIsBookingsModalOpen(false)}
            className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
          {userBookings.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <BookmarkCheck className="w-12 h-12 text-slate-700 mx-auto" />
              <p className="text-sm font-bold text-slate-400">
                {language === 'ar' ? 'لا توجد حجوزات مسجلة بعد' : 'No bookings found yet'}
              </p>
            </div>
          ) : (
            userBookings.map((b) => (
              <div
                key={b.id}
                className="p-5 rounded-2xl glass-card border border-slate-800 space-y-4 shadow-lg"
              >
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-400">{b.id}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold">
                      {language === 'ar' ? 'مؤكد ومثبت 🟢' : 'CONFIRMED 🟢'}
                    </span>
                  </div>
                  <span className="text-xs text-slate-400">
                    {language === 'ar' ? `تاريخ الحجز: ${b.bookedAt}` : `Booked at: ${b.bookedAt}`}
                  </span>
                </div>

                <div className="flex gap-4 items-center">
                  <img
                    src={b.image}
                    alt={b.propertyTitle}
                    className="w-20 h-20 rounded-xl object-cover shrink-0"
                  />
                  <div className="space-y-1 flex-grow">
                    <h4 className="text-sm font-extrabold text-white line-clamp-1">
                      {b.propertyTitle}
                    </h4>
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span>{b.cityName}</span>
                    </p>
                    <p className="text-xs text-amber-300 font-semibold">
                      📅 {b.checkIn} ➔ {b.checkOut} ({b.nights} {language === 'ar' ? 'ليالٍ' : 'nights'})
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-base font-black text-amber-400 block">
                      {formatPrice(b.totalUsd)}
                    </span>
                    <span className="text-[10px] text-slate-400 block">
                      {b.paymentMethod}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">
                    🔒 {language === 'ar' ? 'تأكيد مجاني قابل للتعديل' : 'Flexible booking'}
                  </span>
                  <button
                    onClick={() => addToast(language === 'ar' ? 'جاري طباعة قسيمة الحجز الفورية...' : 'Printing instant voucher...', 'info')}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200"
                  >
                    <Printer className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{language === 'ar' ? 'طباعة الفاتورة' : 'Print Voucher'}</span>
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
