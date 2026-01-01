import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Star, Clock, Utensils, Coffee, IceCream, Soup, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { categories, cities, culinaryPlaces } from "@/data/culinaryData";

// Map icons to categories
const categoryIcons: Record<string, any> = {
  all: Utensils,
  restaurant: Utensils,
  cafe: Coffee,
  dessert: IceCream,
  "street-food": Soup,
};

const ListKuliner = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedCity, setSelectedCity] = useState("Semua Kota");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPlaces = culinaryPlaces.filter(place => {
    const matchesCategory = selectedCategory === "all" || place.category === selectedCategory;
    const matchesCity = selectedCity === "Semua Kota" || place.city === selectedCity;
    const matchesSearch = place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         place.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    return matchesCategory && matchesCity && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <MapPin className="w-4 h-4" />
              Daftar Tempat Kuliner
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Temukan Hidden Gems
              <span className="text-secondary block mt-2">di Kotamu</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto mb-8">
              Jelajahi koleksi tempat kuliner tersembunyi yang telah dikurasi oleh komunitas explorer Snappie.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex gap-2 bg-white/10 backdrop-blur-lg rounded-2xl p-2">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                  <Input 
                    placeholder="Cari tempat kuliner, jenis makanan..."
                    className="pl-12 bg-transparent border-none text-white placeholder:text-white/60 h-12"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="bg-secondary hover:bg-secondary/90 h-12 px-6 rounded-xl">
                  <Search className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border sticky top-[72px] bg-background/95 backdrop-blur-lg z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Categories */}
            <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
              {categories.map((category) => {
                const Icon = categoryIcons[category.id];
                return (
                  <Button
                    key={category.id}
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    className={`gap-2 whitespace-nowrap rounded-full ${
                      selectedCategory === category.id 
                        ? "bg-primary text-white" 
                        : "hover:bg-primary/10 hover:text-primary"
                    }`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    <Icon className="w-4 h-4" />
                    {category.name}
                  </Button>
                );
              })}
            </div>

            {/* City Filter */}
            <div className="relative">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="appearance-none bg-muted px-4 py-2 pr-10 rounded-full text-sm font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {cities.map((city) => (
                  <option key={city} value={city}>{city}</option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">
              Menampilkan <span className="font-semibold text-foreground">{filteredPlaces.length}</span> tempat
            </p>
          </div>

          {filteredPlaces.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPlaces.map((place) => (
                <div 
                  key={place.id} 
                  className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden group"
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center text-6xl">
                    {place.image}
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                          {place.name}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="w-4 h-4" />
                          <span>{place.city}</span>
                          <span>•</span>
                          <span>{place.priceRange}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 bg-secondary/10 px-2 py-1 rounded-lg">
                        <Star className="w-4 h-4 fill-secondary text-secondary" />
                        <span className="text-sm font-semibold text-secondary">{place.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {place.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{place.openHours}</span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {place.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs bg-muted px-2 py-1 rounded-full text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-10 h-10 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Tidak Ada Hasil</h3>
              <p className="text-muted-foreground">
                Coba ubah filter atau kata kunci pencarian kamu.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ListKuliner;
