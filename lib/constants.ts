export const COMPANY = {
  name: "Unique Refrigeration",
  phone: "9639687033",
  whatsapp: "919639687033",
  address: "Izzat Nagar, Bareilly, UP",
  email: "support@uniquerefrigeration.com", // Aap apna email yahan daal sakte hain
  whatsappLink: "https://wa.me/919639687033?text=Hi%20Unique%20Refrigeration,%20I%20need%20repair%20service%20in%20Bareilly.",
};

// 1. BAREILLY_AREAS (Slug format for SEO URLs)
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
  "university-road"
];

// 2. HELPER: Slug ko readable name mein convert karne ke liye (Error Fixer)
export const getAreaName = (slug: string) => {
  if (!slug) return "Bareilly";
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

// 3. ADVANCED SERVICES (With Icons & Prices for SaaS UI)
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

// 4. SOCIAL LINKS (For Footer)
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/uniquerefrigeration",
  instagram: "https://instagram.com/uniquerefrigeration",
  youtube: "https://youtube.com/@uniquerefrigeration",
};
