import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import heroMockup from "@/assets/hero-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCAzLjk5OC00SDQwYzIuMjEgMCA0IDEuNzkgNCAzLjk5VjQwYzAgMi4yMS0xLjc5IDQtMy45OTggNEgzNmMtMi4yMSAwLTQtMS43OS00LTMuOTlWMzR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left animate-fade-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-background mb-6 leading-tight">
              Discover Untouched Culinary Treasures
            </h1>
            <p className="text-xl md:text-2xl text-background/90 mb-8 max-w-2xl mx-auto lg:mx-0">
              Go beyond simple directories. Collect points, level up, and earn real rewards just for exploring unique, hidden eateries in your city.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="gap-3">
                <Apple className="w-5 h-5" />
                Download on the App Store
              </Button>
              <Button size="lg" variant="hero" className="gap-3">
                <Play className="w-5 h-5" />
                Get it on Google Play
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="relative z-10 mx-auto max-w-md">
              <img 
                src={heroMockup} 
                alt="Snappie app interface showing discovery map and restaurant cards"
                className="w-full h-auto drop-shadow-2xl rounded-3xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-background/20 to-transparent blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
