import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";
import foodCollection from "@/assets/food-collection.jpg";

const CTASection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src={foodCollection} 
          alt="Collection of diverse authentic dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-up">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Start Your Culinary Adventure?
          </h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Don't miss out on the best-kept secrets in your city. Join the community of culinary explorers today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="gap-3">
              <Apple className="w-5 h-5" />
              Download on the App Store
            </Button>
            <Button size="lg" variant="secondary" className="gap-3">
              <Play className="w-5 h-5" />
              Get it on Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
