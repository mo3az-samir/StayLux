import React from 'react';
import { AppProvider } from './context/AppContext';
import { Navbar } from './components/Navbar';
import { HeroSearch } from './components/HeroSearch';
import { DealsBanner } from './components/DealsBanner';
import { PopularDestinations } from './components/PopularDestinations';
import { PropertyGrid } from './components/PropertyGrid';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { PropertyModal } from './components/PropertyModal';
import { CheckoutModal } from './components/CheckoutModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { UserBookingsModal } from './components/UserBookingsModal';
import { AuthModal } from './components/AuthModal';
import { ToastNotification } from './components/ToastNotification';

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col font-['Cairo',sans-serif]">
        {/* Navigation */}
        <Navbar />

        {/* Main Content Sections */}
        <main className="flex-grow">
          <HeroSearch />
          <DealsBanner />
          <PopularDestinations />
          <PropertyGrid />
          <Testimonials />
        </main>

        {/* Footer */}
        <Footer />

        {/* Modals & Overlays */}
        <PropertyModal />
        <CheckoutModal />
        <WishlistDrawer />
        <UserBookingsModal />
        <AuthModal />

        {/* Toasts */}
        <ToastNotification />
      </div>
    </AppProvider>
  );
}
