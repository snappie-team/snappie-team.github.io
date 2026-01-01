import { MapPin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Snappie</h3>
                <p className="text-xs text-background/60">Hidden Gems Kuliner</p>
              </div>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Temukan tempat makan tersembunyi terbaik di kotamu. Jelajahi, kumpulkan poin, dan dapatkan reward nyata.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Tautan</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Tentang Kami</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Cara Kerja</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Daftar Partner</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Syarat & Ketentuan</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Kebijakan Privasi</a></li>
              <li><a href="#" className="text-background/70 hover:text-primary transition-colors text-sm">Cookie Policy</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Hubungi Kami</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Mail className="w-4 h-4 text-primary" />
                <span>hello@snappie.id</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <Phone className="w-4 h-4 text-primary" />
                <span>+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3 text-background/70 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
            
            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-background/50 text-sm">
              © 2026 Snappie. All rights reserved.
            </p>
            <p className="text-background/50 text-sm">
              Made with ❤️ in Indonesia
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
