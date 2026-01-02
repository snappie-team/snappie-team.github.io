import { Button } from "@/components/ui/button";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import DownloadModal from "./DownloadModal";
import logo from "@/assets/dark-xxxhdpi.png";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/tentang-kami", label: "Tentang Kami" },
  { href: "/fitur", label: "Fitur" },
  { href: "/list-kuliner", label: "List Kuliner" },
  { href: "/faq", label: "FAQ" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // On non-home pages, always show scrolled style. Also show on mobile menu open
  const showScrolledStyle = isScrolled || !isHomePage || isMobileMenuOpen;

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle 
          ? "bg-background/95 backdrop-blur-lg shadow-lg border-b border-border" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Snappie Logo" className="w-10 h-10 rounded-xl shadow-elevated transition-transform hover:scale-105" />
              <div>
                <h1 className={`text-xl font-bold transition-colors ${showScrolledStyle ? 'text-foreground' : 'text-white'}`}>Snappie</h1>
                <p className={`text-xs transition-colors ${showScrolledStyle ? 'text-muted-foreground' : 'text-white/70'}`}>Temukan Kuliner Hidden Gems di Kotamu!</p>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.href}
                  to={link.href} 
                  className={`text-sm font-medium transition-colors hover:text-secondary ${
                    showScrolledStyle ? 'text-foreground' : 'text-white/90'
                  } ${location.pathname === link.href ? 'text-secondary' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
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
                <X className={`w-6 h-6 ${showScrolledStyle ? 'text-foreground' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${showScrolledStyle ? 'text-foreground' : 'text-white'}`} />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-border/20 pt-4 animate-fade-in">
              <nav className="flex flex-col gap-4 mb-4">
                {navLinks.map((link) => (
                  <Link 
                    key={link.href}
                    to={link.href} 
                    className={`text-sm font-medium ${
                      showScrolledStyle ? 'text-foreground' : 'text-white/90'
                    } ${location.pathname === link.href ? 'text-secondary' : ''}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
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
