import React, { createContext, useContext, useState, useEffect } from 'react';
import { CURRENCIES, PROPERTIES } from '../data/propertiesData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  // State
  const [currency, setCurrency] = useState('SAR');
  const [language, setLanguage] = useState('ar');
  const [wishlist, setWishlist] = useState([1, 2]); // default items for demo
  const [user, setUser] = useState({
    name: 'معاذ سمير',
    email: 'moaz@staylux.com',
    phone: '+966 50 123 4567',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
  });
  
  const [userBookings, setUserBookings] = useState([
    {
      id: 'BK-89421',
      propertyId: 1,
      propertyTitle: 'فندق نيل بلاس الفاخر والتراس الملكي',
      cityName: 'القاهرة، مصر',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      checkIn: '2026-10-15',
      checkOut: '2026-10-18',
      nights: 3,
      guests: '2 بالغين',
      totalUsd: 840,
      paymentMethod: 'Credit Card (•••• 4242)',
      status: 'confirmed',
      bookedAt: '2026-09-20'
    }
  ]);

  // Filters
  const [searchDestination, setSearchDestination] = useState('all');
  const [checkInDate, setCheckInDate] = useState('2026-10-10');
  const [checkOutDate, setCheckOutDate] = useState('2026-10-13');
  const [guestsCount, setGuestsCount] = useState(2);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState(1000);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState('grid'); // 'grid', 'list', 'map'

  // Modals
  const [activePropertyModal, setActivePropertyModal] = useState(null);
  const [activeCheckoutProperty, setActiveCheckoutProperty] = useState(null);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isWishlistDrawerOpen, setIsWishlistDrawerOpen] = useState(false);
  const [isBookingsModalOpen, setIsBookingsModalOpen] = useState(false);
  const [lastConfirmedBooking, setLastConfirmedBooking] = useState(null);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (message, type = 'info') => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  // Language side-effect for document direction
  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  // Format Price Helper
  const formatPrice = (priceInUsd) => {
    const currObj = CURRENCIES[currency] || CURRENCIES.SAR;
    const converted = Math.round(priceInUsd * currObj.rate);
    return `${converted.toLocaleString()} ${currObj.symbol}`;
  };

  // Toggle Wishlist
  const toggleWishlist = (propertyId) => {
    if (wishlist.includes(propertyId)) {
      setWishlist(wishlist.filter((id) => id !== propertyId));
      addToast(language === 'ar' ? 'تمت إزالة العقار من المفضلة' : 'Removed from wishlist', 'warning');
    } else {
      setWishlist([...wishlist, propertyId]);
      addToast(language === 'ar' ? 'تمت إضافة العقار للمفضلة ❤️' : 'Added to wishlist ❤️', 'success');
    }
  };

  // Add Booking
  const addBooking = (bookingData) => {
    const newBooking = {
      id: `BK-${Math.floor(10000 + Math.random() * 90000)}`,
      status: 'confirmed',
      bookedAt: new Date().toISOString().split('T')[0],
      ...bookingData
    };
    setUserBookings([newBooking, ...userBookings]);
    setLastConfirmedBooking(newBooking);
    addToast(
      language === 'ar'
        ? `تهانينا! تم تأكيد حجزك برقم ${newBooking.id} 🎉`
        : `Congratulations! Booking confirmed #${newBooking.id} 🎉`,
      'success'
    );
  };

  return (
    <AppContext.Provider
      value={{
        currency,
        setCurrency,
        language,
        setLanguage,
        wishlist,
        toggleWishlist,
        user,
        setUser,
        userBookings,
        addBooking,
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
        priceRange,
        setPriceRange,
        selectedStars,
        setSelectedStars,
        selectedAmenities,
        setSelectedAmenities,
        sortBy,
        setSortBy,
        viewMode,
        setViewMode,
        activePropertyModal,
        setActivePropertyModal,
        activeCheckoutProperty,
        setActiveCheckoutProperty,
        isAuthModalOpen,
        setIsAuthModalOpen,
        isWishlistDrawerOpen,
        setIsWishlistDrawerOpen,
        isBookingsModalOpen,
        setIsBookingsModalOpen,
        lastConfirmedBooking,
        setLastConfirmedBooking,
        toasts,
        addToast,
        formatPrice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
