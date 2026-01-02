import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Star, Clock, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { culinaryPlaces } from "@/data/culinaryData";
import DownloadModal from "@/components/DownloadModal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ListKuliner = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  // Limit to 6 items for display
  const displayedPlaces = culinaryPlaces.slice(0, 6);
  const hasMoreItems = culinaryPlaces.length > 6;

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
              Temukan Kuliner Hidden Gems
              <span className="text-secondary block mt-2">di Kotamu</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Jelajahi koleksi tempat kuliner tersembunyi yang telah dikurasi oleh komunitas explorer Snappie.
            </p>
          </div>
        </div>
      </section>

      {/* Culinary Carousel */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {displayedPlaces.length > 0 ? (
            <>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {displayedPlaces.map((place) => (
                    <CarouselItem key={place.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                      <div className="bg-card rounded-2xl shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 overflow-hidden group">
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
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="hidden md:flex" />
                <CarouselNext className="hidden md:flex" />
              </Carousel>

            {/* CTA Section */}
            {hasMoreItems && (
              <div className="mt-16 mb-8">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/20 rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-secondary/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
                      <Sparkles className="w-4 h-4" />
                      Ada banyak rekomendasi tempat lainnya
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold mb-4">
                      Lihat Daftar Lengkap di Aplikasi Snappie
                    </h3>
                    
                    <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                      Download aplikasi Snappie sekarang untuk menjelajahi ratusan tempat kuliner hidden gems, dapatkan poin reward, dan nikmati pengalaman kuliner yang lebih lengkap!
                    </p>
                    
                    <Button 
                      size="lg"
                      className="gap-3 bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 h-14 px-8 text-base font-semibold rounded-xl"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      <Download className="w-5 h-5" />
                      Download Sekarang
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </>
          ) : (
            <div className="text-center py-20">
              <h3 className="text-xl font-bold text-foreground mb-2">Belum Ada Data</h3>
              <p className="text-muted-foreground">
                Tempat kuliner akan segera hadir.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
      
      <DownloadModal 
        open={isDownloadModalOpen} 
        onOpenChange={setIsDownloadModalOpen} 
      />
    </div>
  );
};

export default ListKuliner;
