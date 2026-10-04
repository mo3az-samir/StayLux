import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { PROPERTIES } from '../data/propertiesData';
import { PropertyCard } from './PropertyCard';
import { FilterSidebar } from './FilterSidebar';
import { InteractiveMap } from './InteractiveMap';
import { Grid, List, Map, SlidersHorizontal, ArrowUpDown, Building, SearchX } from 'lucide-react';

export const PropertyGrid = () => {
  const {
    language,
    searchDestination,
    selectedCategory,
    priceRange,
    selectedStars,
    selectedAmenities,
    sortBy,
    setSortBy,
    viewMode,
    setViewMode
  } = useApp();

  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filter Logic
  let filteredProperties = PROPERTIES.filter((prop) => {
    // City
    if (searchDestination !== 'all' && prop.cityId !== searchDestination) {
      return false;
    }
    // Category
    if (selectedCategory === 'hotel' && prop.type !== 'hotel') return false;
    if (selectedCategory === 'apartment' && prop.type !== 'apartment') return false;
    if (selectedCategory === 'villa' && prop.type !== 'villa') return false;
    if (selectedCategory === 'chalet' && prop.type !== 'chalet') return false;
    if (selectedCategory === 'top_rated' && prop.rating < 4.93) return false;
    if (selectedCategory === 'special_offer' && (!prop.discountPercent || prop.discountPercent === 0)) return false;

    // Price
    if (prop.priceUsd > priceRange) return false;

    // Stars
    if (selectedStars.length > 0 && !selectedStars.includes(prop.stars)) return false;

    // Amenities
    if (selectedAmenities.length > 0) {
      const hasAllAmenities = selectedAmenities.every((amen) => prop.amenities.includes(amen));
      if (!hasAllAmenities) return false;
    }

    return true;
  });

  // Sort Logic
  if (sortBy === 'price_asc') {
    filteredProperties.sort((a, b) => a.priceUsd - b.priceUsd);
  } else if (sortBy === 'price_desc') {
    filteredProperties.sort((a, b) => b.priceUsd - a.priceUsd);
  } else if (sortBy === 'rating') {
    filteredProperties.sort((a, b) => b.rating - a.rating);
  }

  return (
    <section id="properties-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      {/* Controls Bar Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-800">
        
        {/* Results Counter */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
            <span>{language === 'ar' ? 'الإقامات الفاخرة المتاحة' : 'Available Luxury Stays'}</span>
            <span className="text-sm font-extrabold px-3 py-1 rounded-xl bg-amber-500/15 text-amber-400 border border-amber-500/30">
              {filteredProperties.length}
            </span>
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            {language === 'ar'
              ? 'أسعار حصرية شاملة لكافة الضرائب والخدمات مع ضمان أفضل سعر'
              : 'Best prices guaranteed with instant confirmation'}
          </p>
        </div>

        {/* View Switches & Sort Dropdown */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Mobile Filter Trigger Button */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-800 border border-slate-700 text-xs font-bold text-slate-200"
          >
            <SlidersHorizontal className="w-4 h-4 text-amber-400" />
            <span>{language === 'ar' ? 'الفلاتر' : 'Filters'}</span>
          </button>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 rounded-xl px-3 py-1.5">
            <ArrowUpDown className="w-3.5 h-3.5 text-slate-400" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-slate-200 text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="popular" className="bg-slate-900">{language === 'ar' ? 'الأكثر شعبية 🌟' : 'Most Popular'}</option>
              <option value="price_asc" className="bg-slate-900">{language === 'ar' ? 'السعر: من الأقل للأعلى 💵' : 'Price: Low to High'}</option>
              <option value="price_desc" className="bg-slate-900">{language === 'ar' ? 'السعر: من الأعلى للأقل 💰' : 'Price: High to Low'}</option>
              <option value="rating" className="bg-slate-900">{language === 'ar' ? 'الأعلى تقييماً ⭐' : 'Top Rated'}</option>
            </select>
          </div>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center gap-1 bg-slate-900 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
              title={language === 'ar' ? 'عرض شبكي' : 'Grid View'}
            >
              <Grid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
              title={language === 'ar' ? 'عرض قائمة' : 'List View'}
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('map')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'map' ? 'bg-amber-500 text-slate-950 shadow' : 'text-slate-400 hover:text-white'
              }`}
              title={language === 'ar' ? 'عرض الخريطة' : 'Map View'}
            >
              <Map className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

      {/* Main Grid Content */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Desktop Sidebar Column */}
        <div className="hidden md:block md:col-span-4 lg:col-span-3 sticky top-24">
          <FilterSidebar />
        </div>

        {/* Mobile Filter Drawer */}
        {isMobileFilterOpen && (
          <div className="md:hidden col-span-12 glass-card p-4 rounded-2xl border border-amber-500/40 mb-6">
            <FilterSidebar />
          </div>
        )}

        {/* Listings Content Column */}
        <div className="col-span-12 md:col-span-8 lg:col-span-9">
          
          {viewMode === 'map' ? (
            <InteractiveMap properties={filteredProperties} />
          ) : filteredProperties.length === 0 ? (
            /* Empty State */
            <div className="glass-card rounded-3xl p-12 text-center border border-slate-800 space-y-4">
              <div className="w-16 h-16 rounded-full bg-slate-800 border border-slate-700 mx-auto flex items-center justify-center text-slate-400">
                <SearchX className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">
                {language === 'ar' ? 'لم نجد نتائج تطابق خيارات التصفية' : 'No properties matched your filters'}
              </h3>
              <p className="text-sm text-slate-400 max-w-md mx-auto">
                {language === 'ar'
                  ? 'جرب رفع حد السعر الأقصى أو إلغاء بعض التجهيزات المحددة للوصول لإقامات رائعة.'
                  : 'Try adjusting your price range or clearing some amenity filters.'}
              </p>
            </div>
          ) : (
            /* Cards Grid / List */
            <div
              className={
                viewMode === 'grid'
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                  : 'grid grid-cols-1 gap-6'
              }
            >
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          )}

        </div>

      </div>

    </section>
  );
};
