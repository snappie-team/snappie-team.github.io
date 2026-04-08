export interface CulinaryPlace {
  id: number;
  name: string;
  category: string;
  address: string;
  rating: number;
  reviews: number;
  priceRange: string;
  imageUrl: string;
  description: string;
  tags: string[];
  openHours: string;
}

export const categories = [
  { id: "all", name: "Semua" },
  { id: "restaurant", name: "Restoran" },
  { id: "cafe", name: "Kafe" },
  { id: "bakery", name: "Bakery" },
  { id: "bistro", name: "Bistro" },
  { id: "street-food", name: "Street Food" },
];

const culinaryImageBaseUrl = "https://res.cloudinary.com/deqnkuhbv/image/upload/v1775542514";
// https://res.cloudinary.com/deqnkuhbv/image/upload/v1773585738/places/01KKRZ57AZ581DSPG8GDZSP1J8.jpg
// TODO: This will be replaced with API fetch
export const culinaryPlaces: CulinaryPlace[] = [
  {
    id: 1,
    name: "Sagarmatha Coffee Bar",
    category: "cafe",
    address: "Jl. H. Rais A. Rachman Gg. Selamat 3 No.36b, Sungai Jawi Dalam, Pontianak Barat",
    rating: 4.8,
    reviews: 357,
    priceRange: "$$",
    imageUrl: `${culinaryImageBaseUrl}/places/01KKRZ57AZ581DSPG8GDZSP1J8.jpg`,
    description: "Hidden gem di Pontianak Barat dengan konsep slow bar industrial dan racikan kopi berbahan natural.",
    tags: ["Slow Bar", "Industrial", "Hidden Gem"],
    openHours: "08:00 - 22:00"
  },
  {
    id: 2,
    name: "2818 Coffee Roasters",
    category: "cafe",
    address: "Gg. Purnama Agung 3, Parit Tokaya, Pontianak Selatan",
    rating: 4.7,
    reviews: 289,
    priceRange: "$$",
    imageUrl: `${culinaryImageBaseUrl}/places/01KKWGPTRCB99Q74KE6JHKE4ZY.jpg`,
    description: "Micro-roastery di kawasan perumahan yang tenang, cocok untuk kerja fokus dengan kopi hasil sangrai sendiri.",
    tags: ["Micro Roastery", "Work From Cafe", "Specialty Coffee"],
    openHours: "08:00 - 22:00"
  },
  {
    id: 3,
    name: "Ningrat Eatery",
    category: "restaurant",
    address: "Jl. Purnama Agung 7 (Sekitar Parit Tokaya), Pontianak Selatan.",
    rating: 4.7,
    reviews: 331,
    priceRange: "$$",
    imageUrl: `${culinaryImageBaseUrl}/places/01KKWGVWGR81WE9NHH6E2888WT.jpg`,
    description: "Restoran keluarga bernuansa Jawa modern dengan hidangan Nusantara yang estetik dan tetap autentik.",
    tags: ["Ramah Keluarga", "Nusantara", "Jawa Modern"],
    openHours: "10:00 - 22:00"
  },
  {
    id: 4,
    name: "Tokokopi ODS",
    category: "cafe",
    address: "Jl. HM Suwignyo, Gg. Tegal Rejo IIIA, Pontianak Kota.",
    rating: 4.6,
    reviews: 244,
    priceRange: "$",
    imageUrl: `${culinaryImageBaseUrl}/places/01KKWGYTB6ZDTBYQ83FV0JZMRP.jpg`,
    description: "Kedai kopi favorit anak muda dengan konsep industrial raw, terkenal dengan matcha dan kopi susu creamy.",
    tags: ["Industrial", "Harga Terjangkau", "Anak Muda"],
    openHours: "15:30 - 17:30"
  },
  {
    id: 5,
    name: "House of Tahron",
    category: "restaurant",
    address: "Jalan Alianyang, Gg. Kencana 1 No.4, Sungai Bangkong, Pontianak Kota",
    rating: 4.7,
    reviews: 216,
    priceRange: "$$$",
    imageUrl: `${culinaryImageBaseUrl}/places/01KKWHJRVAXZVEMQBB93JHGQAR.jpg`,
    description: "Restoran rumahan hangat dengan ornamen vintage dan menu comfort food serta pasta.",
    tags: ["Homey", "Vintage", "Comfort Food"],
    openHours: "11:00 - 22:00"
  }
];
