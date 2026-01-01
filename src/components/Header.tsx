import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import DownloadModal from "./DownloadModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 bg-gradient-hero rounded-xl flex items-center justify-center shadow-elevated transition-transform hover:scale-105`}>
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h1 className={`text-xl font-bold transition-colors ${isScrolled ? 'text-foreground' : 'text-white'}`}>Snappie</h1>
                <p className={`text-xs transition-colors ${isScrolled ? 'text-muted-foreground' : 'text-white/70'}`}>Hidden Gems Kuliner</p>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a href="#fitur" className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>
                Fitur
              </a>
              <a href="#cara-kerja" className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>
                Cara Kerja
              </a>
              <a href="#testimoni" className={`text-sm font-medium transition-colors hover:text-primary ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>
                Testimoni
              </a>
            </nav>
            
            <div className="hidden md:flex gap-3">
              <Button 
                size="sm" 
                className="gap-2 bg-primary hover:bg-primary/90 text-white rounded-full px-5"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-in">
              <nav className="flex flex-col gap-4 mb-4">
                <a href="#fitur" className={`text-sm font-medium ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>Fitur</a>
                <a href="#cara-kerja" className={`text-sm font-medium ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>Cara Kerja</a>
                <a href="#testimoni" className={`text-sm font-medium ${isScrolled ? 'text-foreground' : 'text-white/90'}`}>Testimoni</a>
              </nav>
              <Button 
                size="sm" 
                className="gap-2 w-full"
                onClick={() => {
                  setIsDownloadModalOpen(true);
                  setIsMobileMenuOpen(false);
                }}
              >
                <Download className="w-4 h-4" />
                <span>Download Aplikasi</span>
              </Button>
            </div>
          )}
        </div>
      </header>
      
      <DownloadModal 
        open={isDownloadModalOpen} 
        onOpenChange={setIsDownloadModalOpen} 
      />
    </>
  );
};

export default Header;
