import { Button } from "@/components/ui/button";
import { Apple, Play } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-elevated">
              <span className="text-background font-bold text-xl">S</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">Snappie</h1>
              <p className="text-xs text-muted-foreground">Hidden Gems Culinary App</p>
            </div>
          </div>
          
          <div className="hidden md:flex gap-3">
            <Button size="sm" variant="ghost" className="gap-2">
              <Apple className="w-4 h-4" />
              <span>App Store</span>
            </Button>
            <Button size="sm" variant="ghost" className="gap-2">
              <Play className="w-4 h-4" />
              <span>Google Play</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
