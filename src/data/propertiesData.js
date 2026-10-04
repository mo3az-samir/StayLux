export const CURRENCIES = {
  SAR: { code: 'SAR', symbol: 'ر.س', rate: 3.75, nameAr: 'ريال سعودي', nameEn: 'Saudi Riyal' },
  EGP: { code: 'EGP', symbol: 'ج.م', rate: 48.5, nameAr: 'جنيه مصري', nameEn: 'Egyptian Pound' },
  AED: { code: 'AED', symbol: 'د.إ', rate: 3.67, nameAr: 'درهم إماراتي', nameEn: 'UAE Dirham' },
  USD: { code: 'USD', symbol: '$', rate: 1.0, nameAr: 'دولار أمريكي', nameEn: 'US Dollar' },
  EUR: { code: 'EUR', symbol: '€', rate: 0.92, nameAr: 'يورو أوروبي', nameEn: 'Euro' },
};

export const CITIES = [
  { id: 'all', nameAr: 'جميع الوجهات', nameEn: 'All Destinations' },
  { id: 'cairo', nameAr: 'القاهرة 🇪🇬', nameEn: 'Cairo' },
  { id: 'dubai', nameAr: 'دبي 🇦🇪', nameEn: 'Dubai' },
  { id: 'riyadh', nameAr: 'الرياض 🇸🇦', nameEn: 'Riyadh' },
  { id: 'paris', nameAr: 'باريس 🇫🇷', nameEn: 'Paris' },
  { id: 'london', nameAr: 'لندن 🇬🇧', nameEn: 'London' },
  { id: 'istanbul', nameAr: 'إسطنبول 🇹🇷', nameEn: 'Istanbul' },
  { id: 'alula', nameAr: 'العلا 🇸🇦', nameEn: 'AlUla' },
  { id: 'sharm', nameAr: 'شرم الشيخ 🇪🇬', nameEn: 'Sharm El Sheikh' },
];

export const CATEGORIES = [
  { id: 'all', nameAr: 'الكل', nameEn: 'All Stays', icon: 'Sparkles' },
  { id: 'hotel', nameAr: 'فنادق فاخرة', nameEn: 'Luxury Hotels', icon: 'Building2' },
  { id: 'apartment', nameAr: 'شقق وممثلة', nameEn: 'Apartments', icon: 'Home' },
  { id: 'villa', nameAr: 'فيلات مطلة', nameEn: 'Beach Villas', icon: 'Palmtree' },
  { id: 'chalet', nameAr: 'شاليهات ومنتجعات', nameEn: 'Mountain Chalets', icon: 'Mountain' },
  { id: 'top_rated', nameAr: 'الأعلى تقييماً', nameEn: 'Top Rated', icon: 'Crown' },
  { id: 'special_offer', nameAr: 'عروض حصرية', nameEn: 'Deals & Offers', icon: 'Flame' },
];

export const PROPERTIES = [
  {
    id: 1,
    titleAr: 'فندق نيل بلاس الفاخر والتراس الملكي',
    titleEn: 'Nile Palace Royal Suite & Spa',
    type: 'hotel',
    cityId: 'cairo',
    cityNameAr: 'القاهرة، مصر',
    cityNameEn: 'Cairo, Egypt',
    addressAr: 'كورنيش النيل، الزمالك، القاهرة',
    addressEn: 'Nile Corniche, Zamalek, Cairo',
    rating: 4.95,
    reviewsCount: 342,
    stars: 5,
    priceUsd: 280,
    originalPriceUsd: 350,
    discountPercent: 20,
    badgeAr: 'Superhost - عروض النيل',
    badgeEn: 'Superhost - Nile Offer',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['pool', 'wifi', 'breakfast', 'spa', 'parking', 'nile_view', 'gym'],
    descriptionAr: 'تجربة إقامة ملكية إستثنائية على ضفاف نهر النيل الخالد في حي الزمالك الراقي. إطلالات بانورامية ساحرة على الأهرامات والنيل، مع سبا عالمي ومطاعم تقدم أشهى المأكولات العالمية والعربية.',
    descriptionEn: 'An exceptional royal stay on the banks of the eternal Nile River in prestigious Zamalek. Panoramic views of the Pyramids & Nile, world-class spa, and fine dining restaurants.',
    rooms: [
      { id: 'r1', nameAr: 'جناح تنفيذى مطل على النيل', nameEn: 'Executive Nile Suite', priceUsd: 280, capacity: '2 بالغين' },
      { id: 'r2', nameAr: 'جناح ملكي مع تراس خاص', nameEn: 'Royal Suite with Private Terrace', priceUsd: 450, capacity: '4 بالغين' },
      { id: 'r3', nameAr: 'غرفة ديلوكس مزدوجة', nameEn: 'Deluxe Double Room', priceUsd: 190, capacity: '2 بالغين' }
    ],
    lat: 30.0626,
    lng: 31.2243,
    host: {
      name: 'فنادق رويال النيل',
      superhost: true,
      joined: '2020',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 2,
    titleAr: 'بنتهاوس برج أطلس المطل على برج خليفة',
    titleEn: 'Burj Atlas Sky Penthouse',
    type: 'apartment',
    cityId: 'dubai',
    cityNameAr: 'دبي، الإمارات',
    cityNameEn: 'Dubai, UAE',
    addressAr: 'وسط مدينة دبي (داون تاون)، دبي',
    addressEn: 'Downtown Dubai, UAE',
    rating: 4.98,
    reviewsCount: 512,
    stars: 5,
    priceUsd: 540,
    originalPriceUsd: 650,
    discountPercent: 17,
    badgeAr: 'إطلالة برج خليفة 🔥',
    badgeEn: 'Burj Khalifa View 🔥',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['pool', 'wifi', 'jacuzzi', 'parking', 'burj_view', 'gym', 'smart_tv'],
    descriptionAr: 'شقة بنتهاوس فائقة الفخامة في الطابق 52 تطل مباشرة على برج خليفة ونافورة دبي. تتسع لـ 6 أشخاص مع مسبح إنفينيتي وصالة ألعاب رياضية خاصة وتأثيث فاخر من أشهر دور التصميم.',
    descriptionEn: 'Ultra-luxurious 52nd-floor penthouse with unobstructed view of Burj Khalifa & Dubai Fountain. Fits 6 guests with infinity pool, gym & designer furnishings.',
    rooms: [
      { id: 'r2_1', nameAr: 'بنتهاوس 3 غرف نوم ملكية', nameEn: '3 Bedroom Royal Penthouse', priceUsd: 540, capacity: '6 بالغين' }
    ],
    lat: 25.1972,
    lng: 55.2744,
    host: {
      name: 'سارة Al Maktoum Luxury Stays',
      superhost: true,
      joined: '2019',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 3,
    titleAr: 'قصر الصحراء والفيلات الخاصة بالعلا',
    titleEn: 'AlUla Oasis Luxury Villa & Resort',
    type: 'villa',
    cityId: 'alula',
    cityNameAr: 'العلا، السعودية',
    cityNameEn: 'AlUla, Saudi Arabia',
    addressAr: 'محمية رغاب، العلا',
    addressEn: 'Raghab Canyon Reserve, AlUla',
    rating: 4.97,
    reviewsCount: 189,
    stars: 5,
    priceUsd: 720,
    originalPriceUsd: 900,
    discountPercent: 20,
    badgeAr: 'تجربة صحراوية ساحرة 🌌',
    badgeEn: 'Magical Oasis Experience 🌌',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['pool', 'wifi', 'breakfast', 'spa', 'stargazing', 'fireplace', 'private_chef'],
    descriptionAr: 'فيلا فاخرة بين جبال العلا الصخرية الخلابة. تتميز بمسبح خاص دافئ تحت النجوم وتلسكوب لمراقبة المجرات، وجلسات شبة نار تقليدية مع خدمة الشيف الخاص.',
    descriptionEn: 'Luxury private villa carved between AlUla mountains. Features heated pool, telescope, firepit, and private chef.',
    rooms: [
      { id: 'r3_1', nameAr: 'فيلا واحة العلا مع مسبح خاص', nameEn: 'Oasis Villa with Private Pool', priceUsd: 720, capacity: '4 بالغين' }
    ],
    lat: 26.6174,
    lng: 37.9248,
    host: {
      name: 'منتجعات العلا التاريخية',
      superhost: true,
      joined: '2021',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 4,
    titleAr: 'فندق سحابة نجد وتراس المربع',
    titleEn: 'Najd Cloud Hotel & Sky Suite',
    type: 'hotel',
    cityId: 'riyadh',
    cityNameAr: 'الرياض، السعودية',
    cityNameEn: 'Riyadh, Saudi Arabia',
    addressAr: 'طريق الملك فهد، حي الصحافة، الرياض',
    addressEn: 'King Fahd Road, Al Sahafa, Riyadh',
    rating: 4.89,
    reviewsCount: 275,
    stars: 5,
    priceUsd: 310,
    originalPriceUsd: 380,
    discountPercent: 18,
    badgeAr: 'الأكثر طلباً بالرياض 🇸🇦',
    badgeEn: 'Top Choice in Riyadh 🇸🇦',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['wifi', 'breakfast', 'gym', 'parking', 'meeting_room', 'valet'],
    descriptionAr: 'فندق عصري فاخر يدمج الأصالة النجدية بالتقنيات الذكية. قريب من مركز الملك عبد الله المالي، ويقدم أجنحة رجال أعمال مجهزة بأرقى وسائل الراحة.',
    descriptionEn: 'Modern luxury hotel blending Najdi hospitality with smart tech. Close to KAFD with business executive suites.',
    rooms: [
      { id: 'r4_1', nameAr: 'جناح الأعمال الذكي', nameEn: 'Smart Executive Suite', priceUsd: 310, capacity: '2 بالغين' },
      { id: 'r4_2', nameAr: 'غرفة كينغ فاخرة', nameEn: 'Deluxe King Room', priceUsd: 220, capacity: '2 بالغين' }
    ],
    lat: 24.7743,
    lng: 46.7386,
    host: {
      name: 'مجموعة الفنادق النجدية',
      superhost: true,
      joined: '2022',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 5,
    titleAr: 'شقة إليزيه الراقية بالقرب من برج إيفل',
    titleEn: 'Eiffel View Elysées Luxury Flat',
    type: 'apartment',
    cityId: 'paris',
    cityNameAr: 'باريس، فرنسا',
    cityNameEn: 'Paris, France',
    addressAr: 'شارع الشانزلزيه، باريس',
    addressEn: 'Champs-Élysées, Paris, France',
    rating: 4.96,
    reviewsCount: 410,
    stars: 5,
    priceUsd: 460,
    originalPriceUsd: 580,
    discountPercent: 21,
    badgeAr: 'إطلالة إيفل الساحرة 🗼',
    badgeEn: 'Eiffel Tower View 🗼',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['wifi', 'balcony', 'espresso_machine', 'kitchen', 'elevator', 'eiffel_view'],
    descriptionAr: 'شقة باريسية كلاسيكية مع شرفة تطل مباشرة على برج إيفل الشاهق. تم تجديدها بالكامل بديكورات فاخرة، وأسقف عالية، ومطبخ فرنسي متكامل.',
    descriptionEn: 'Classic Parisian apartment with balcony directly facing the Eiffel Tower. Renovated with luxury furnishings and high ceilings.',
    rooms: [
      { id: 'r5_1', nameAr: 'شقة باريسية ديلوكس غرفتين', nameEn: '2 Bedroom Parisian Suite', priceUsd: 460, capacity: '4 بالغين' }
    ],
    lat: 48.8566,
    lng: 2.3522,
    host: {
      name: 'Claire & Jean Paris Stays',
      superhost: true,
      joined: '2018',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 6,
    titleAr: 'منتجع فيلا الشاطئ الأبيض بشرم الشيخ',
    titleEn: 'Red Sea Crystal Beach Villa & Resort',
    type: 'villa',
    cityId: 'sharm',
    cityNameAr: 'شرم الشيخ، مصر',
    cityNameEn: 'Sharm El Sheikh, Egypt',
    addressAr: 'خليج نعمة، شرم الشيخ',
    addressEn: 'Naama Bay, Sharm El Sheikh',
    rating: 4.92,
    reviewsCount: 390,
    stars: 5,
    priceUsd: 380,
    originalPriceUsd: 480,
    discountPercent: 21,
    badgeAr: 'شاطئ خاص ورسومات مرجانية 🏖️',
    badgeEn: 'Private Beach & Coral Reef 🏖️',
    images: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['pool', 'private_beach', 'all_inclusive', 'diving', 'wifi', 'spa', 'aqua_park'],
    descriptionAr: 'فيلا فاخرة على الشاطئ مباشرة مع وصول خاص للشعب المرجانية الكريستالية بالبحر الأحمر. تتضمن نظام إقامة شامل للمأكولات ومركز غوص محترف.',
    descriptionEn: 'Direct beachfront villa with private access to vibrant Red Sea coral reefs. Features all-inclusive dining and certified dive center.',
    rooms: [
      { id: 'r6_1', nameAr: 'فيلا شاطئية مع مسبح خاص', nameEn: 'Beachfront Villa with Private Pool', priceUsd: 380, capacity: '4 بالغين' }
    ],
    lat: 27.9158,
    lng: 34.3299,
    host: {
      name: 'منتجعات البحر الأحمر الفاخرة',
      superhost: true,
      joined: '2019',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 7,
    titleAr: 'قصر مضيق البوسفور التاريخي وشقق العلية',
    titleEn: 'Bosphorus Palace Mansion & Loft',
    type: 'chalet',
    cityId: 'istanbul',
    cityNameAr: 'إسطنبول، تركيا',
    cityNameEn: 'Istanbul, Turkey',
    addressAr: 'حي أورتاكوي، إسطنبول',
    addressEn: 'Ortaköy, Istanbul, Turkey',
    rating: 4.91,
    reviewsCount: 310,
    stars: 5,
    priceUsd: 290,
    originalPriceUsd: 360,
    discountPercent: 19,
    badgeAr: 'إطلالة مباشرة على البوسفور 🌉',
    badgeEn: 'Bosphorus Waterfront 🌉',
    images: [
      'https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['wifi', 'breakfast', 'sea_view', 'hammam', 'terrace', 'coffee_bar'],
    descriptionAr: 'قصر عثماني مميز يعود للقرن التاسع عشر تم تجديده بعناية على ضفاف البوسفور. يتميز بحمام تركي تقليدي، وإفطار تركي غني، وشرفة ساحرة.',
    descriptionEn: '19th-century Ottoman mansion meticulously restored on the Bosphorus shore. Features traditional Turkish bath and waterfront breakfast.',
    rooms: [
      { id: 'r7_1', nameAr: 'جناح البوسفور البانورامي', nameEn: 'Bosphorus Panoramic Suite', priceUsd: 290, capacity: '2 بالغين' }
    ],
    lat: 41.0478,
    lng: 29.0264,
    host: {
      name: 'Murat Ottoman Heritage Stays',
      superhost: true,
      joined: '2020',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=200&q=80'
    }
  },
  {
    id: 8,
    titleAr: 'أجنحة مي فير الفاخرة بجوار هايد بارك',
    titleEn: 'Mayfair Kensington Royal Residence',
    type: 'hotel',
    cityId: 'london',
    cityNameAr: 'لندن، المملكة المتحدة',
    cityNameEn: 'London, UK',
    addressAr: 'حي مايفير، لندن',
    addressEn: 'Mayfair, London, UK',
    rating: 4.94,
    reviewsCount: 450,
    stars: 5,
    priceUsd: 510,
    originalPriceUsd: 620,
    discountPercent: 18,
    badgeAr: 'قلب لندن الراقي 🇬🇧',
    badgeEn: 'Heart of Mayfair 🇬🇧',
    images: [
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=80'
    ],
    amenities: ['wifi', 'afternoon_tea', 'concierge', 'gym', 'spa', 'valet'],
    descriptionAr: 'إقامة بريطانية فاخرة في أرقى أحياء لندن بالقرب من هايد بارك ومتاجر هارودز. تقدم خدمة الشاي الإنجليزي التقليدي وسائق خاص للمطار.',
    descriptionEn: 'Prestigious London stay in Mayfair near Hyde Park & Harrods. Offers traditional afternoon tea and private airport chauffeur.',
    rooms: [
      { id: 'r8_1', nameAr: 'جناح رويال مايفير', nameEn: 'Royal Mayfair Suite', priceUsd: 510, capacity: '2 بالغين' }
    ],
    lat: 51.5074,
    lng: -0.1278,
    host: {
      name: 'The Mayfair Collection',
      superhost: true,
      joined: '2017',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    }
  }
];

export const POPULAR_DESTINATIONS = [
  {
    id: 'cairo',
    nameAr: 'القاهرة',
    nameEn: 'Cairo',
    countryAr: 'مصر',
    propertiesCount: 1450,
    startPriceUsd: 80,
    image: 'https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'dubai',
    nameAr: 'دبي',
    nameEn: 'Dubai',
    countryAr: 'الإمارات',
    propertiesCount: 2300,
    startPriceUsd: 150,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'riyadh',
    nameAr: 'الرياض',
    nameEn: 'Riyadh',
    countryAr: 'السعودية',
    propertiesCount: 1100,
    startPriceUsd: 120,
    image: 'https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'paris',
    nameAr: 'باريس',
    nameEn: 'Paris',
    countryAr: 'فرنسا',
    propertiesCount: 3100,
    startPriceUsd: 180,
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'alula',
    nameAr: 'العلا',
    nameEn: 'AlUla',
    countryAr: 'السعودية',
    propertiesCount: 320,
    startPriceUsd: 250,
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'istanbul',
    nameAr: 'إسطنبول',
    nameEn: 'Istanbul',
    countryAr: 'تركيا',
    propertiesCount: 2800,
    startPriceUsd: 90,
    image: 'https://images.unsplash.com/photo-1527838832700-54595d9776f9?auto=format&fit=crop&w=800&q=80'
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    nameAr: 'د. فيصل العتيبي',
    nameEn: 'Dr. Faisal Al-Otaibi',
    roleAr: 'مسافر دائم - الرياض',
    roleEn: 'Frequent Traveler - Riyadh',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    commentAr: 'منصة StayLux غيّرت مفاهيمي عن الحجز! حجزت بنتهاوس دبي وإطلالة برج خليفة كانت ساحرة، وتأكيد الحجز كان في ثوانٍ مع قسيمة فورية.',
    commentEn: 'StayLux completely redefined booking for me! Reserved the Dubai penthouse with instant voucher confirmation.',
    rating: 5
  },
  {
    id: 2,
    nameAr: 'م. مريم الشرافي',
    nameEn: 'Eng. Mariam Al-Sharafy',
    roleAr: 'مهندسة تصميم - القاهرة',
    roleEn: 'Architect - Cairo',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    commentAr: 'التطبيق والواجهة قمة في الانسيابية والفخامة. سرعة تحويل العملات واستعراض التفاصيل مذهلة جداً، أنصح به لكل من يبحث عن التميز.',
    commentEn: 'Ultra slick UI/UX. The instant currency conversion and detailed property views are superb.',
    rating: 5
  },
  {
    id: 3,
    nameAr: 'أحمد بن خالد السويدي',
    nameEn: 'Ahmed Al-Suwaidi',
    roleAr: 'رائد أعمال - دبي',
    roleEn: 'Entrepreneur - Dubai',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    commentAr: 'تجربة حجز فيلا العلا كانت من أجمل تجارب حياتي. خدمة العملاء متواجدة على مدار 24 ساعة وضمان أفضل سعر حقيقي!',
    commentEn: 'Booking AlUla villa was top tier experience. 24/7 support and genuine best price guarantee!',
    rating: 5
  }
];
