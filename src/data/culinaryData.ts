export interface CulinaryPlace {
  id: number;
  name: string;
  category: string;
  city: string;
  rating: number;
  reviews: number;
  priceRange: string;
  image: string;
  description: string;
  tags: string[];
  openHours: string;
}

export const categories = [
  { id: "all", name: "Semua" },
  { id: "restaurant", name: "Restoran" },
  { id: "cafe", name: "Kafe" },
  { id: "dessert", name: "Dessert" },
  { id: "street-food", name: "Street Food" },
];

export const cities = [
  "Semua Kota",
  "Jakarta",
  "Bandung",
  "Surabaya",
  "Yogyakarta",
  "Semarang",
  "Malang",
  "Bali",
  "Medan",
];

// TODO: This will be replaced with API fetch
export const culinaryPlaces: CulinaryPlace[] = [
  {
    id: 1,
    name: "Warung Mak Nyak",
    category: "street-food",
    city: "Jakarta",
    rating: 4.8,
    reviews: 324,
    priceRange: "$$",
    image: "🍜",
    description: "Nasi goreng legendaris dengan bumbu rahasia turun-temurun. Buka sejak 1985.",
    tags: ["Nasi Goreng", "Indonesian", "Hidden Gem"],
    openHours: "17:00 - 23:00"
  },
  {
    id: 2,
    name: "Kedai Kopi Tua",
    category: "cafe",
    city: "Bandung",
    rating: 4.7,
    reviews: 256,
    priceRange: "$",
    image: "☕",
    description: "Kopi tubruk khas Bandung dengan suasana retro. Spot favorit para seniman lokal.",
    tags: ["Coffee", "Vintage", "Cozy"],
    openHours: "08:00 - 22:00"
  },
  {
    id: 3,
    name: "Bakso Pak Kumis",
    category: "street-food",
    city: "Surabaya",
    rating: 4.9,
    reviews: 512,
    priceRange: "$",
    image: "🍲",
    description: "Bakso urat super jumbo dengan kuah kaldu sapi yang gurih. Antri 30 menit worth it!",
    tags: ["Bakso", "Street Food", "Must Try"],
    openHours: "10:00 - 21:00"
  },
  {
    id: 4,
    name: "Gudeg Yu Djum",
    category: "restaurant",
    city: "Yogyakarta",
    rating: 4.6,
    reviews: 428,
    priceRange: "$$",
    image: "🍛",
    description: "Gudeg basah dengan krecek dan areh yang creamy. Resep autentik Jogja sejak 1950.",
    tags: ["Gudeg", "Javanese", "Traditional"],
    openHours: "06:00 - 14:00"
  },
  {
    id: 5,
    name: "Es Teler 77 Original",
    category: "dessert",
    city: "Jakarta",
    rating: 4.5,
    reviews: 189,
    priceRange: "$",
    image: "🍧",
    description: "Es teler original sebelum franchise. Alpukat, kelapa muda, dan nangka segar.",
    tags: ["Dessert", "Indonesian", "Refreshing"],
    openHours: "10:00 - 22:00"
  },
  {
    id: 6,
    name: "Sate Klathak Pak Bari",
    category: "street-food",
    city: "Yogyakarta",
    rating: 4.8,
    reviews: 367,
    priceRange: "$$",
    image: "🍢",
    description: "Sate kambing muda dengan tusuk jeruji sepeda. Dibakar dengan arang kelapa.",
    tags: ["Sate", "Grilled", "Authentic"],
    openHours: "16:00 - 22:00"
  },
  {
    id: 7,
    name: "Martabak San Francisco",
    category: "dessert",
    city: "Bandung",
    rating: 4.7,
    reviews: 445,
    priceRange: "$$",
    image: "🥞",
    description: "Martabak manis dengan 50+ varian topping. Tekstur tebal dan empuk.",
    tags: ["Martabak", "Sweet", "Popular"],
    openHours: "15:00 - 23:00"
  },
  {
    id: 8,
    name: "Rawon Nguling",
    category: "restaurant",
    city: "Malang",
    rating: 4.9,
    reviews: 298,
    priceRange: "$",
    image: "🥣",
    description: "Rawon dengan kuah hitam pekat dan daging empuk. Resep keluarga 4 generasi.",
    tags: ["Rawon", "East Javanese", "Comfort Food"],
    openHours: "07:00 - 15:00"
  },
  {
    id: 9,
    name: "Nasi Campur Bali Men Weti",
    category: "restaurant",
    city: "Bali",
    rating: 4.8,
    reviews: 521,
    priceRange: "$$",
    image: "🍱",
    description: "Nasi campur Bali dengan lauk lengkap dan sambal matah yang segar.",
    tags: ["Balinese", "Rice", "Complete Meal"],
    openHours: "08:00 - 16:00"
  },
  {
    id: 10,
    name: "Soto Medan Pak Salam",
    category: "street-food",
    city: "Medan",
    rating: 4.6,
    reviews: 234,
    priceRange: "$",
    image: "🍲",
    description: "Soto dengan santan kental dan perkedel kentang. Tambah emping untuk extra crunch!",
    tags: ["Soto", "Sumatran", "Hearty"],
    openHours: "06:00 - 14:00"
  },
  {
    id: 11,
    name: "Lumpia Gang Lombok",
    category: "street-food",
    city: "Semarang",
    rating: 4.7,
    reviews: 312,
    priceRange: "$",
    image: "🥟",
    description: "Lumpia basah dan goreng dengan isian rebung dan udang segar.",
    tags: ["Lumpia", "Semarang Special", "Snack"],
    openHours: "09:00 - 21:00"
  },
  {
    id: 12,
    name: "Kopi Klotok",
    category: "cafe",
    city: "Yogyakarta",
    rating: 4.8,
    reviews: 478,
    priceRange: "$",
    image: "☕",
    description: "Kopi joss dengan arang membara di dalam gelas. Experience unik!",
    tags: ["Coffee", "Unique", "Instagrammable"],
    openHours: "07:00 - 23:00"
  },
];

// API fetch function placeholder (untuk future implementation)
// export async function fetchCulinaryPlaces() {
//   const response = await fetch('https://api.snappie.id/places');
//   const data = await response.json();
//   return data;
// }
