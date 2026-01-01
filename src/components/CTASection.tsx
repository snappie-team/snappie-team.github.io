import { Button } from "@/components/ui/button";
import { Download, Rocket, ArrowRight } from "lucide-react";
import { useState } from "react";
import DownloadModal from "./DownloadModal";

const CTASection = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <>
      <section className="py-24 bg-gradient-hero relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-up">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-white/20">
              <Rocket className="w-4 h-4 text-secondary" />
              <span className="text-white/90 text-sm font-medium">Gratis Download</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Siap Memulai Petualangan
              <span className="text-secondary block mt-2">Kulinermu?</span>
            </h2>
            <p className="text-lg md:text-xl text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Jangan lewatkan rahasia terbaik di kotamu. Gabung dengan komunitas culinary explorer sekarang juga.
            </p>
            
            <div className="flex justify-center mb-10">
              <Button 
                size="lg" 
                className="gap-3 bg-secondary text-white hover:bg-secondary/90 shadow-lg hover:shadow-xl transition-all hover:scale-105 h-14 px-8 text-base font-semibold rounded-xl"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="w-5 h-5" />
                Download Aplikasi
              </Button>
            </div>
            
            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70 text-sm">
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span>100% Gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span>Tanpa Iklan</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-secondary" />
                <span>Data Aman</span>
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

export default CTASection;
