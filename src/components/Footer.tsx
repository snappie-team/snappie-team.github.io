import { MapPin, Mail, Phone, Instagram, Twitter, Facebook, Github } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/dark-xxxhdpi.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Snappie Logo" className="w-10 h-10 rounded-xl" />
              <div>
                <h3 className="text-xl font-bold">Snappie</h3>
                <p className="text-xs text-white/60">Temukan Kuliner Hidden Gems di kotamu!</p>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Tautan</h4>
            <ul className="space-y-3">
              <li><Link to="/tentang-kami" className="text-white/70 hover:text-secondary transition-colors text-sm">Tentang Kami</Link></li>
              <li><Link to="/fitur" className="text-white/70 hover:text-secondary transition-colors text-sm">Fitur</Link></li>
              <li><Link to="/list-kuliner" className="text-white/70 hover:text-secondary transition-colors text-sm">List Kuliner</Link></li>
              <li><Link to="/faq" className="text-white/70 hover:text-secondary transition-colors text-sm">FAQ</Link></li>
              <li><Link to="/syarat-ketentuan" className="text-white/70 hover:text-secondary transition-colors text-sm">Syarat & Ketentuan</Link></li>
              <li><Link to="/kebijakan-privasi" className="text-white/70 hover:text-secondary transition-colors text-sm">Kebijakan Privasi</Link></li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-white text-sm mb-2 font-semibold">
              <span className="inline-block w-2 h-2 bg-secondary rounded-full animate-pulse"></span>
              <span>Follow our project</span>
            </div>
            {/* Social Media */}
            <div>
              <div className="flex gap-3">
                <a href="https://instagram.com/justtffy/" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://github.com/snappie-team" className="w-10 h-10 bg-white/10 hover:bg-secondary rounded-full flex items-center justify-center transition-colors">
                  <Github className="w-5 h-5"/>
                </a>
              </div>
            </div>

            {/* Made with section */}
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-white/40 text-xs">
                Made with 🔥 by Snappie Team © 2026 . All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
