import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import {
  X,
  CheckCircle2,
  ShieldCheck,
  CreditCard,
  QrCode,
  Printer,
  Calendar,
  Users,
  MapPin,
  Lock,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  DollarSign
} from 'lucide-react';

export const CheckoutModal = () => {
  const {
    language,
    activeCheckoutProperty,
    setActiveCheckoutProperty,
    formatPrice,
    checkInDate,
    checkOutDate,
    user,
    addBooking,
    lastConfirmedBooking,
    setLastConfirmedBooking,
    addToast
  } = useApp();

  const [step, setStep] = useState(1);
  const [guestInfo, setGuestInfo] = useState({
    name: user?.name || 'معاذ سمير',
    email: user?.email || 'moaz@staylux.com',
    phone: user?.phone || '+966 50 123 4567',
    notes: ''
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [addOns, setAddOns] = useState({
    airportTransfer: false,
    breakfast: true
  });

  if (!activeCheckoutProperty) return null;

  const prop = activeCheckoutProperty;
  const roomPriceUsd = prop.selectedRoom ? prop.selectedRoom.priceUsd : prop.priceUsd;
  const nights = prop.nights || 3;

  let totalUsd = roomPriceUsd * nights;
  if (addOns.airportTransfer) totalUsd += 40;
  if (addOns.breakfast) totalUsd += 25 * nights;
  const serviceFee = Math.round(totalUsd * 0.1);
  const grandTotalUsd = totalUsd + serviceFee;

  const handleNextStep = () => {
    if (step === 2) {
      if (!guestInfo.name || !guestInfo.email || !guestInfo.phone) {
        addToast(language === 'ar' ? 'يرجى إدخال جميع البيانات المطلوبة' : 'Please fill required fields', 'warning');
        return;
      }
    }
    if (step === 3) {
      // Complete booking
      const newBookingData = {
        propertyId: prop.id,
        propertyTitle: language === 'ar' ? prop.titleAr : prop.titleEn,
        cityName: language === 'ar' ? prop.cityNameAr : prop.cityNameEn,
        image: prop.images[0],
        checkIn: checkInDate,
        checkOut: checkOutDate,
        nights: nights,
        guests: '2 بالغين',
        totalUsd: grandTotalUsd,
        paymentMethod:
          paymentMethod === 'card'
            ? 'بطاقة إلكترونية (•••• 4242)'
            : paymentMethod === 'apple'
            ? 'Apple Pay'
            : paymentMethod === 'mada'
            ? 'مدى / STC Pay'
            : 'الدفع في العقار',
        guestInfo
      };

      addBooking(newBookingData);
      setStep(4);

      // Trigger Confetti Effect!
      try {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (err) {
        console.log(err);
      }
      return;
    }
    setStep(step + 1);
  };

  const handleClose = () => {
    setActiveCheckoutProperty(null);
    setStep(1);
    setLastConfirmedBooking(null);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto animate-modal">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-6">
        
        {/* Step Indicator Header */}
        <div className="p-5 border-b border-slate-800 bg-slate-950/60 flex items-center justify-between">
          <div>
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-1">
              {language === 'ar' ? `الخطوة ${step} من 4` : `Step ${step} of 4`}
            </span>
            <h3 className="text-lg font-black text-white">
              {step === 1 && (language === 'ar' ? 'ملخص الحجز والخدمات الإضافية' : 'Booking Summary & Add-ons')}
              {step === 2 && (language === 'ar' ? 'بيانات النزيل الرئيسي' : 'Guest Information')}
              {step === 3 && (language === 'ar' ? 'طريقة الدفع والأمان' : 'Payment Method')}
              {step === 4 && (language === 'ar' ? 'تأكيد الحجز وقسيمة الإقامة 🎯' : 'Booking Confirmed!')}
            </h3>
          </div>

          <button
            onClick={handleClose}
            className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-slate-950">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Step Body */}
        <div className="p-6 space-y-6">
          
          {/* STEP 1: SUMMARY & ADDONS */}
          {step === 1 && (
            <div className="space-y-6">
              {/* Property Snapshot */}
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800">
                <img
                  src={prop.images[0]}
                  alt={prop.titleAr}
                  className="w-20 h-20 rounded-xl object-cover"
                />
                <div>
                  <h4 className="text-sm font-bold text-white line-clamp-1">
                    {language === 'ar' ? prop.titleAr : prop.titleEn}
                  </h4>
                  <p className="text-xs text-slate-400 flex items-center gap-1 mt-1">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{language === 'ar' ? prop.cityNameAr : prop.cityNameEn}</span>
                  </p>
                  <span className="inline-block mt-1 text-[11px] font-bold text-amber-300 bg-amber-500/10 px-2 py-0.5 rounded">
                    {prop.selectedRoom ? (language === 'ar' ? prop.selectedRoom.nameAr : prop.selectedRoom.nameEn) : 'الجناح الملكي'}
                  </span>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  {language === 'ar' ? 'الخدمات الإضافية الاختيارية' : 'Optional Add-ons'}
                </h4>

                <label
                  onClick={() => setAddOns({ ...addOns, breakfast: !addOns.breakfast })}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    addOns.breakfast
                      ? 'bg-amber-500/10 border-amber-500/60 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={addOns.breakfast} readOnly className="accent-amber-500" />
                    <div>
                      <span className="text-xs font-bold block">{language === 'ar' ? 'إفطار فاخر يومي لشخصين 🍳' : 'Daily Gourmet Breakfast'}</span>
                      <span className="text-[11px] text-slate-400">{language === 'ar' ? 'بوفيه مفتوح مع عصائر طازجة' : 'Full open buffet access'}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400">+{formatPrice(25 * nights)}</span>
                </label>

                <label
                  onClick={() => setAddOns({ ...addOns, airportTransfer: !addOns.airportTransfer })}
                  className={`flex items-center justify-between p-3.5 rounded-xl border cursor-pointer transition-colors ${
                    addOns.airportTransfer
                      ? 'bg-amber-500/10 border-amber-500/60 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input type="checkbox" checked={addOns.airportTransfer} readOnly className="accent-amber-500" />
                    <div>
                      <span className="text-xs font-bold block">{language === 'ar' ? 'خدمة توصيل من المطار بسيارة فاخرة 🚘' : 'VIP Airport Chauffeur'}</span>
                      <span className="text-[11px] text-slate-400">{language === 'ar' ? 'استقبال مباشر باسم النزيل' : 'Direct sign reception at arrival'}</span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-amber-400">+{formatPrice(40)}</span>
                </label>
              </div>

              {/* Price summary */}
              <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                <div className="flex justify-between text-slate-300">
                  <span>{language === 'ar' ? 'إجمالي الإقامة والخدمات' : 'Subtotal'}</span>
                  <span>{formatPrice(totalUsd)}</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>{language === 'ar' ? 'الضرائب والرسوم (10%)' : 'Taxes & Fees (10%)'}</span>
                  <span>{formatPrice(serviceFee)}</span>
                </div>
                <div className="flex justify-between text-sm font-black text-white pt-2 border-t border-slate-800">
                  <span>{language === 'ar' ? 'المبلغ النهائي' : 'Grand Total'}</span>
                  <span className="text-amber-400 text-base">{formatPrice(grandTotalUsd)}</span>
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: GUEST DETAILS */}
          {step === 2 && (
            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  {language === 'ar' ? 'الاسم الكامل (كما في الجواز / الهوية)' : 'Full Name'}
                </label>
                <input
                  type="text"
                  value={guestInfo.name}
                  onChange={(e) => setGuestInfo({ ...guestInfo, name: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                  placeholder="مثال: معاذ سمير"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    {language === 'ar' ? 'البريد الإلكتروني' : 'Email Address'}
                  </label>
                  <input
                    type="email"
                    value={guestInfo.email}
                    onChange={(e) => setGuestInfo({ ...guestInfo, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                    placeholder="moaz@example.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">
                    {language === 'ar' ? 'رقم الهاتف / الواتساب' : 'Phone Number'}
                  </label>
                  <input
                    type="text"
                    value={guestInfo.phone}
                    onChange={(e) => setGuestInfo({ ...guestInfo, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                    placeholder="+966 50 123 4567"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">
                  {language === 'ar' ? 'طلبات خاصة للإقامة (اختياري)' : 'Special Requests (Optional)'}
                </label>
                <textarea
                  rows="3"
                  value={guestInfo.notes}
                  onChange={(e) => setGuestInfo({ ...guestInfo, notes: e.target.value })}
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl p-3 text-sm text-white focus:border-amber-400 focus:outline-none"
                  placeholder={language === 'ar' ? 'مثال: طابق مرتفع، تسجيل وصول متأخر...' : 'High floor, late arrival...'}
                />
              </div>
            </div>
          )}

          {/* STEP 3: PAYMENT METHOD */}
          {step === 3 && (
            <div className="space-y-4">
              <label className="text-xs font-bold text-slate-300 block mb-2">
                {language === 'ar' ? 'اختر طريقة الدفع الآمنة' : 'Select Payment Option'}
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${
                    paymentMethod === 'card'
                      ? 'bg-amber-500/10 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-amber-400" />
                  <div className="text-right">
                    <span className="text-xs font-bold block">{language === 'ar' ? 'بطاقة إلكترونية' : 'Credit / Debit Card'}</span>
                    <span className="text-[10px] text-slate-400">Visa / Mastercard</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${
                    paymentMethod === 'apple'
                      ? 'bg-amber-500/10 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-lg">🍎</span>
                  <div className="text-right">
                    <span className="text-xs font-bold block">Apple Pay</span>
                    <span className="text-[10px] text-slate-400">دفع سريع بلمسة واحدة</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('mada')}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${
                    paymentMethod === 'mada'
                      ? 'bg-amber-500/10 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-lg">💳</span>
                  <div className="text-right">
                    <span className="text-xs font-bold block">مدى / STC Pay</span>
                    <span className="text-[10px] text-slate-400">دفع فوري بالمملكة</span>
                  </div>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('cash')}
                  className={`p-4 rounded-2xl border flex items-center gap-3 transition-colors ${
                    paymentMethod === 'cash'
                      ? 'bg-amber-500/10 border-amber-500 text-white'
                      : 'bg-slate-950 border-slate-800 text-slate-300'
                  }`}
                >
                  <span className="text-lg">🏨</span>
                  <div className="text-right">
                    <span className="text-xs font-bold block">{language === 'ar' ? 'الدفع في العقار' : 'Pay at Property'}</span>
                    <span className="text-[10px] text-slate-400">{language === 'ar' ? 'دفع عند الاستلام' : 'Pay upon check-in'}</span>
                  </div>
                </button>
              </div>

              {/* Card Inputs Simulation */}
              {paymentMethod === 'card' && (
                <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 mt-4">
                  <div>
                    <label className="text-[11px] text-slate-400 block mb-1">{language === 'ar' ? 'رقم البطاقة' : 'Card Number'}</label>
                    <input
                      type="text"
                      defaultValue="4242 •••• •••• 4242"
                      className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">{language === 'ar' ? 'تاريخ الانتهاء' : 'Expiry'}</label>
                      <input
                        type="text"
                        defaultValue="12/28"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono text-center"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] text-slate-400 block mb-1">CVC / CVV</label>
                      <input
                        type="text"
                        defaultValue="888"
                        className="w-full bg-slate-900 border border-slate-800 rounded-lg p-2.5 text-xs text-white font-mono text-center"
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="flex items-center gap-2 text-xs text-emerald-400 bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                <Lock className="w-4 h-4 shrink-0" />
                <span>{language === 'ar' ? 'معاملة آمنة ومشفّرة 256-bit SSL' : '256-bit Encrypted SSL Security'}</span>
              </div>
            </div>
          )}

          {/* STEP 4: CONFIRMED VOUCHER */}
          {step === 4 && lastConfirmedBooking && (
            <div className="space-y-6 text-center">
              
              {/* Success Badge */}
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <h3 className="text-2xl font-black text-white">
                  {language === 'ar' ? 'تم تأكيد حجزك بنجاح!' : 'Your Booking is Confirmed!'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {language === 'ar' ? `رقم المرجعية للحجز: ${lastConfirmedBooking.id}` : `Booking Reference: ${lastConfirmedBooking.id}`}
                </p>
              </div>

              {/* Printable Voucher Card */}
              <div className="p-6 rounded-3xl bg-gradient-to-b from-slate-950 to-slate-900 border border-amber-500/40 text-right space-y-4 shadow-2xl">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-mono">
                    STAYLUX VOUCHER
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[11px] font-bold">
                    CONFIRMED
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="text-slate-400 block">{language === 'ar' ? 'اسم النزيل:' : 'Guest Name:'}</span>
                    <span className="font-bold text-white text-sm">{guestInfo.name}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{language === 'ar' ? 'الإقامة:' : 'Stay:'}</span>
                    <span className="font-bold text-white text-xs line-clamp-1">{lastConfirmedBooking.propertyTitle}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{language === 'ar' ? 'الوصول - المغادرة:' : 'Check-In / Out:'}</span>
                    <span className="font-bold text-amber-300">{lastConfirmedBooking.checkIn} ➔ {lastConfirmedBooking.checkOut}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block">{language === 'ar' ? 'المبلغ النهائي المدفوع:' : 'Total Paid:'}</span>
                    <span className="font-black text-amber-400 text-sm">{formatPrice(lastConfirmedBooking.totalUsd)}</span>
                  </div>
                </div>

                {/* QR Code Simulation */}
                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <QrCode className="w-10 h-10 text-white bg-white/10 p-1.5 rounded-lg" />
                    <span>{language === 'ar' ? 'امسح الـ QR عند تسجيل الوصول بالموظفين' : 'Scan at front desk check-in'}</span>
                  </div>
                  
                  <button
                    onClick={() => addToast(language === 'ar' ? 'جاري تجهيز قسيمة الحجز للطباعة...' : 'Preparing printable PDF...', 'info')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200"
                  >
                    <Printer className="w-4 h-4 text-cyan-400" />
                    <span>{language === 'ar' ? 'طباعة القسيمة' : 'Print PDF'}</span>
                  </button>
                </div>

              </div>

            </div>
          )}

        </div>

        {/* Footer Action Bar */}
        <div className="p-5 border-t border-slate-800 bg-slate-950/60 flex items-center justify-between">
          {step > 1 && step < 4 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 transition-colors"
            >
              {language === 'ar' ? 'السابق' : 'Back'}
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              onClick={handleNextStep}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black text-sm hover:brightness-110 transition-all shadow-lg shadow-amber-500/20 flex items-center gap-2"
            >
              <span>{step === 3 ? (language === 'ar' ? 'تأكيد ودفع الحجز' : 'Confirm & Pay') : (language === 'ar' ? 'المتابعة' : 'Continue')}</span>
              {language === 'ar' ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
            </button>
          ) : (
            <button
              onClick={handleClose}
              className="w-full py-3.5 rounded-xl bg-amber-500 text-slate-950 font-black text-sm hover:brightness-110 transition-all text-center"
            >
              {language === 'ar' ? 'العودة للموقع الرئيسي' : 'Return to Home'}
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
