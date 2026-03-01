export const COMPANY = {
  name: "Unique Refrigeration",
  website: "https://uniquerefrigerationservice.com",
  phone: "9639687033",
  whatsapp: "919639687033",
  address: "Izzat Nagar, Bareilly, UP",
  email: "support@uniquerefrigeration.com",
  whatsappLink: "https://wa.me/919639687033?text=Hi%20Unique%20Refrigeration,%20I%20need%20repair%20service%20in%20Bareilly.",
};

// 1. UPDATED BAREILLY_AREAS (Whole Bareilly Coverage for Local SEO)
export const BAREILLY_AREAS = [
  "izzat-nagar", 
  "civil-lines", 
  "rajendra-nagar", 
  "subhash-nagar", 
  "mahanagar", 
  "cantonment", 
  "pilibhit-bypass", 
  "model-town", 
  "dd-puram",
  "suresh-sharma-nagar",
  "university-road",
  "sun-city",
  "kurmanchal-nagar",
  "munshi-nagar",
  "ashutosh-city",
  "delapeer",
  "green-park",
  "ivri",
  "dohra-mod",
  "akanksha-enclave"
];

// 2. HELPER: Slug ko readable name mein convert karne ke liye (With Special Handling)
export const getAreaName = (slug: string) => {
  if (!slug) return "Bareilly";
  
  // Short names and special casing
  const mapping: Record<string, string> = {
    "ivri": "IVRI",
    "dd-puram": "DD Puram",
  };

  if (mapping[slug]) return mapping[slug];

  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// 3. SEO HELPER: Automatic Meta Title & Description generation
export const getSEOData = (areaSlug: string, serviceTitle: string = "Repair Service") => {
  const area = getAreaName(areaSlug);
  return {
    title: `${serviceTitle} in ${area}, Bareilly | Unique Refrigeration`,
    description: `Best ${serviceTitle} in ${area}, Bareilly. Fast doorstep service, original parts, and 90-day warranty. Book expert technicians at ${COMPANY.phone}.`,
    canonical: `${COMPANY.website}/area/${areaSlug}`
  };
};

// 4. ADVANCED SERVICES
export const SERVICES = [
  { 
    id: "ac",
    title: "AC Repair & Service", 
    desc: "Expert Split and Window AC repair in Bareilly with 90 days warranty.",
    price: "Starts ₹299",
    category: "Cooling"
  },
  { 
    id: "fridge",
    title: "Fridge Repair", 
    desc: "Fast cooling solutions for all Refrigerator brands (LG, Samsung, Whirlpool).",
    price: "Starts ₹199",
    category: "Cooling"
  },
  { 
    id: "washing-machine",
    title: "Washing Machine", 
    desc: "Front & Top load machine repair with 100% original spare parts.",
    price: "Starts ₹249",
    category: "Appliances"
  },
  { 
    id: "commercial",
    title: "Commercial Cooling", 
    desc: "Deep freezer and Water Cooler maintenance for Bareilly shops & restaurants.",
    price: "Expert Rates",
    category: "Commercial"
  }
];

// 5. SOCIAL LINKS
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/uniquerefrigeration",
  instagram: "https://instagram.com/uniquerefrigeration",
  youtube: "https://youtube.com/@uniquerefrigeration",
};