import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  X,
  Star,
  MapPin,
  CheckCircle2,
  Heart,
  Share2,
  ShieldCheck,
  CalendarCheck2,
  Users,
  Sparkles,
  Wifi,
  Coffee,
  Waves,
  Car,
  Tv,
  Utensils
} from 'lucide-react';

export const PropertyModal = () => {
  const {
    language,
    activePropertyModal,
    setActivePropertyModal,
    setActiveCheckoutProperty,
    wishlist,
    toggleWishlist,
    formatPrice,
    checkInDate,
    checkOutDate,
    addToast
  } = useApp();

  const [selectedRoomIndex, setSelectedRoomIndex] = useState(0);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!activePropertyModal) return null;

  const prop = activePropertyModal;
  const isWishlisted = wishlist.includes(prop.id);

  // Calculate nights
  const nights = Math.max(
    1,
    Math.ceil((new Date(checkOutDate) - new Date(checkInDate)) / (1000 * 60 * 60 * 24))
  );

  const selectedRoom = prop.rooms[selectedRoomIndex] || prop.rooms[0];
  const roomPriceUsd = selectedRoom.priceUsd;
  const baseTotalUsd = roomPriceUsd * nights;
  const serviceFeeUsd = Math.round(baseTotalUsd * 0.1);
  const grandTotalUsd = baseTotalUsd + serviceFeeUsd;

  const handleBookNow = () => {
    const targetProp = { ...prop, selectedRoom, grandTotalUsd, nights };
    setActivePropertyModal(null);
    setActiveCheckoutProperty(targetProp);
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    addToast(language === 'ar' ? 'تم نسخ رابط العقار للحافظة 📋' : 'Copied link to clipboard 📋', 'success');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto animate-modal">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-800 rounded-3xl shadow-2xl overflow-hidden my-8 max-h-[90vh] flex flex-col">
        
        {/* Header Modal Bar */}
        <div className="flex items-center justify-between p-5 border-b border-slate-800 bg-slate-950/50 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 text-xs font-bold">
              {language === 'ar' ? prop.badgeAr : prop.badgeEn}
            </span>
            <div className="flex items-center gap-1 text-xs text-amber-400 font-bold">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>{prop.rating}</span>
              <span className="text-slate-400">({prop.reviewsCount} {language === 'ar' ? 'تقييم' : 'reviews'})</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title={language === 'ar' ? 'مشاركة' : 'Share'}
            >
              <Share2 className="w-4 h-4" />
            </button>

            <button
              onClick={() => toggleWishlist(prop.id)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
              title={language === 'ar' ? 'المفضلة' : 'Wishlist'}
            >
              <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>

            <button
              onClick={() => setActivePropertyModal(null)}
              className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 space-y-8 overflow-y-auto">
          
          {/* Title & Location Header */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-white leading-tight mb-2">
              {language === 'ar' ? prop.titleAr : prop.titleEn}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
              <span>{language === 'ar' ? prop.addressAr : prop.addressEn}</span>
            </p>
          </div>

          {/* Gallery Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {/* Main Big Photo */}
            <div className="md:col-span-8 h-72 sm:h-96 rounded-2xl overflow-hidden border border-slate-800 relative group">
              <img
                src={prop.images[selectedImageIndex]}
                alt={prop.titleAr}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Thumbnails Column */}
            <div className="md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 h-full">
              {prop.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`h-20 sm:h-28 rounded-xl overflow-hidden border-2 transition-all ${
                    selectedImageIndex === idx
                      ? 'border-amber-400 scale-[0.98] ring-2 ring-amber-400/20'
                      : 'border-slate-800 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt="Thumb" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Details Columns Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Content (Overview, Host, Amenities, Rooms, Reviews) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Host Profile Header */}
              <div className="flex items-center gap-4 p-4 rounded-2xl glass-card border border-slate-800">
                <img
                  src={prop.host.avatar}
                  alt={prop.host.name}
                  className="w-14 h-14 rounded-2xl object-cover ring-2 ring-amber-400/40"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">{prop.host.name}</h4>
                    {prop.host.superhost && (
                      <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-extrabold">
                        SUPERHOST
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-400">
                    {language === 'ar' ? `مضيف معتمد منذ ${prop.host.joined}` : `Verified Host since ${prop.host.joined}`}
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">
                  {language === 'ar' ? 'نبذة عن الإقامة' : 'About this Stay'}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  {language === 'ar' ? prop.descriptionAr : prop.descriptionEn}
                </p>
              </div>

              {/* Amenities Checklist */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">
                  {language === 'ar' ? 'التجهيزات والخدمات المشمولة' : 'Included Amenities'}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    <Waves className="w-4 h-4 text-cyan-400" />
                    <span>{language === 'ar' ? 'مسبح دافئ & سبا' : 'Heated Pool & Spa'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    <Wifi className="w-4 h-4 text-emerald-400" />
                    <span>{language === 'ar' ? 'واي فاي عالي السرعة' : 'High Speed WiFi'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    <Coffee className="w-4 h-4 text-amber-400" />
                    <span>{language === 'ar' ? 'إفطار فاخر يومي' : 'Daily Gourmet Breakfast'}</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-200">
                    <Car className="w-4 h-4 text-rose-400" />
                    <span>{language === 'ar' ? 'موقف وخفارة مجاناً' : 'Free Valet & Parking'}</span>
                  </div>
                </div>
              </div>

              {/* Room Choice Selector */}
              <div className="space-y-3">
                <h3 className="text-base font-bold text-white">
                  {language === 'ar' ? 'اختر الغرفة / الجناح' : 'Select Room Type'}
                </h3>
                <div className="space-y-3">
                  {prop.rooms.map((room, idx) => (
                    <div
                      key={room.id}
                      onClick={() => setSelectedRoomIndex(idx)}
                      className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedRoomIndex === idx
                          ? 'bg-amber-500/10 border-amber-500/80 text-white shadow-lg'
                          : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                      }`}
                    >
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            checked={selectedRoomIndex === idx}
                            onChange={() => setSelectedRoomIndex(idx)}
                            className="accent-amber-500"
                          />
                          <h5 className="text-sm font-bold">
                            {language === 'ar' ? room.nameAr : room.nameEn}
                          </h5>
                        </div>
                        <span className="text-xs text-slate-400 block pr-6">
                          👤 {room.capacity}
                        </span>
                      </div>

                      <div className="text-right">
                        <span className="text-base font-extrabold text-amber-400">
                          {formatPrice(room.priceUsd)}
                        </span>
                        <span className="text-[10px] text-slate-400 block">
                          / {language === 'ar' ? 'ليلة' : 'night'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Verified Ratings Breakdown */}
              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h3 className="text-base font-bold text-white flex items-center gap-2">
                  <span>{language === 'ar' ? 'تقييمات النزلاء الموثقة' : 'Verified Guest Ratings'}</span>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{language === 'ar' ? 'النظافة والتعقيم' : 'Cleanliness'}</span>
                      <span className="font-bold text-amber-400">4.9</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-[98%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{language === 'ar' ? 'الموقع والإطلالة' : 'Location'}</span>
                      <span className="font-bold text-amber-400">5.0</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-[100%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{language === 'ar' ? 'الخدمة وطاقم العمل' : 'Service'}</span>
                      <span className="font-bold text-amber-400">4.9</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-[96%]" />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs text-slate-300 mb-1">
                      <span>{language === 'ar' ? 'القيمة مقابل السعر' : 'Value'}</span>
                      <span className="font-bold text-amber-400">4.8</span>
                    </div>
                    <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-[94%]" />
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sticky Checkout Calculation Box */}
            <div className="lg:col-span-5 sticky top-24">
              <div className="glass-card rounded-3xl p-6 border border-amber-500/40 shadow-2xl space-y-6">
                
                {/* Rate Header */}
                <div className="flex items-baseline justify-between pb-4 border-b border-slate-800">
                  <div>
                    <span className="text-2xl font-black text-amber-400">
                      {formatPrice(roomPriceUsd)}
                    </span>
                    <span className="text-xs text-slate-400 font-normal"> / {language === 'ar' ? 'ليلة' : 'night'}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-amber-400 font-bold bg-amber-500/10 px-2.5 py-1 rounded-lg">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>{prop.rating}</span>
                  </div>
                </div>

                {/* Selected Dates summary */}
                <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs">
                  <div className="flex items-center justify-between text-slate-300">
                    <span>{language === 'ar' ? 'تاريخ الوصول:' : 'Check-in:'}</span>
                    <span className="font-bold text-white">{checkInDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-300">
                    <span>{language === 'ar' ? 'تاريخ المغادرة:' : 'Check-out:'}</span>
                    <span className="font-bold text-white">{checkOutDate}</span>
                  </div>
                  <div className="flex items-center justify-between text-amber-400 pt-1 border-t border-slate-900 font-bold">
                    <span>{language === 'ar' ? 'مدة الإقامة:' : 'Stay Duration:'}</span>
                    <span>{nights} {language === 'ar' ? 'ليالٍ' : 'nights'}</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex justify-between">
                    <span>{formatPrice(roomPriceUsd)} × {nights} {language === 'ar' ? 'ليالٍ' : 'nights'}</span>
                    <span>{formatPrice(baseTotalUsd)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{language === 'ar' ? 'رسوم الخدمة والضرائب (10%)' : 'Service Fee & Taxes (10%)'}</span>
                    <span>{formatPrice(serviceFeeUsd)}</span>
                  </div>

                  <div className="flex justify-between text-sm font-black text-white pt-3 border-t border-slate-800">
                    <span>{language === 'ar' ? 'الإجمالي الشامل' : 'Total Amount'}</span>
                    <span className="text-amber-400 text-lg">{formatPrice(grandTotalUsd)}</span>
                  </div>
                </div>

                {/* Instant Book CTA Button */}
                <button
                  onClick={handleBookNow}
                  className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-400 text-slate-950 font-black text-base flex items-center justify-center gap-2 hover:brightness-110 active:scale-[0.98] transition-all shadow-xl shadow-amber-500/25"
                >
                  <CalendarCheck2 className="w-5 h-5 font-bold" />
                  <span>{language === 'ar' ? 'تأكيد الحجز ومتابعة الدفع' : 'Proceed to Checkout'}</span>
                </button>

                <p className="text-[11px] text-center text-slate-400">
                  🔒 {language === 'ar' ? 'تأكيد مجاني بدون أي رسوم خفية' : 'No hidden fees. Free instant confirmation.'}
                </p>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
