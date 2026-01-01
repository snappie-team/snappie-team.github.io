import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Camera, Gift, Trophy, MapPin, Star, CheckCircle2, Sparkles, ArrowRight, Download, Zap, Shield, Users, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DownloadModal from "@/components/DownloadModal";

const Fitur = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Zap className="w-4 h-4" />
              Fitur Unggulan
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Fitur Lengkap untuk <span className="text-secondary">Petualangan Kulinermu</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Snappie dilengkapi dengan berbagai fitur canggih untuk membuat eksplorasi kulinermu lebih seru dan rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Feature 1: Smart Discovery */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Smart Discovery</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Temukan hidden gems kuliner di sekitarmu dengan algoritma pencarian cerdas yang memprioritaskan tempat berkualitas tapi belum terekspos.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Filter berdasarkan jarak, kategori, harga
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    GPS-based recommendation
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Rekomendasi personal berdasarkan preferensi
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Real-time Check-in */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Real-time Check-in & Validasi</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Sistem check-in dengan GPS dan foto real-time yang memastikan keaslian kunjungan. Anti-fraud dan rewarding!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    GPS verification otomatis
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Upload foto real-time wajib
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Instant point reward setelah validasi
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 3: Review System */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Quality Review System</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bagikan pengalaman kulinermu melalui review berkualitas dengan foto, rating detail, dan dapatkan poin bonus!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Multi-aspect rating (rasa, harga, pelayanan)
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Upload foto makanan & suasana
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Bonus poin untuk review berkualitas
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 4: Gamification */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Level & Achievement System</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Naik level dari Explorer hingga Culinary Legend. Kumpulkan badge, bersaing di leaderboard, dan unlock benefit eksklusif!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    5 level progresif dengan benefit unik
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Leaderboard mingguan & bulanan
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Achievement badges & milestones
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 5: Reward Marketplace */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Reward Marketplace</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Tukarkan poin dengan reward nyata dari merchant partner. Voucher diskon, menu gratis, hingga merchandise eksklusif!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Katalog reward dari 100+ merchant
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Voucher diskon hingga 50%
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                    Limited edition merchandise
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 6: Community */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Community Features</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Bergabung dengan komunitas food explorer. Follow, share, dan discover bersama ribuan pecinta kuliner lainnya!
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Follow & be followed system
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Share discoveries ke sosial media
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary" />
                    Referral program dengan bonus poin
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
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

export default Fitur;