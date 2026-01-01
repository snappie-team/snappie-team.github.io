import { Button } from "@/components/ui/button";
import { Download, Sparkles, MapPin, Star } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

const HeroSection = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <>
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Floating icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <MapPin className="absolute top-32 right-[20%] w-8 h-8 text-white/20 animate-bounce" style={{ animationDuration: '3s' }} />
          <Star className="absolute top-[40%] left-[15%] w-6 h-6 text-yellow-300/30 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          <Sparkles className="absolute bottom-[30%] right-[15%] w-7 h-7 text-white/20 animate-bounce" style={{ animationDuration: '2s', animationDelay: '1s' }} />
        </div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span className="text-white/90 text-sm font-medium">Temukan Hidden Gems di Kotamu</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Jelajahi Kuliner
                <span className="block text-yellow-300">Tersembunyi</span>
                Terbaik
              </h1>
              <p className="text-lg md:text-xl text-white/85 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Lebih dari sekadar direktori. Kumpulkan poin, naik level, dan dapatkan reward nyata hanya dengan menjelajahi tempat makan unik di kotamu.
              </p>
              
              <div className="flex justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="gap-3 bg-white text-primary hover:bg-white/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 h-14 px-8 text-base font-semibold rounded-xl"
                  onClick={() => setIsDownloadModalOpen(true)}
                >
                  <Download className="w-5 h-5" />
                  Download Aplikasi
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              {/* Glow effect behind phone */}
              <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/30 via-orange-500/20 to-transparent blur-3xl scale-110"></div>
              
              <div className="relative z-10 mx-auto max-w-sm">
                {/* Phone mockup with shadow */}
                <div className="relative">
                  <img 
                    src={heroMockup} 
                    alt="Snappie app interface showing discovery map and restaurant cards"
                    className="w-full h-auto drop-shadow-2xl rounded-[2.5rem] border-4 border-white/20"
                  />
                  {/* Floating notification cards */}
                  <div className="absolute -left-4 top-1/4 bg-white rounded-xl p-3 shadow-xl animate-bounce" style={{ animationDuration: '3s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <Star className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">+50 Points!</p>
                        <p className="text-[10px] text-gray-500">Check-in berhasil</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -right-4 bottom-1/3 bg-white rounded-xl p-3 shadow-xl animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-gray-800">Warung Pak Jo</p>
                        <p className="text-[10px] text-gray-500">500m dari kamu</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <DownloadModal 
        open={isDownloadModalOpen} 
        onOpenChange={setIsDownloadModalOpen} 
      />
    </>
  );
};

export default HeroSection;
