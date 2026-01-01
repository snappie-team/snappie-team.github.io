import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Smartphone, Camera, Gift, Trophy, MapPin, Star, CheckCircle2, Sparkles, ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import DownloadModal from "@/components/DownloadModal";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download & Daftar",
    description: "Download aplikasi Snappie dari Play Store dan buat akun dalam hitungan detik.",
  },
  {
    number: "02",
    icon: MapPin,
    title: "Jelajahi Hidden Gems",
    description: "Gunakan pencarian atau GPS untuk menemukan tempat kuliner tersembunyi di sekitarmu.",
  },
  {
    number: "03",
    icon: Camera,
    title: "Check-in & Validasi",
    description: "Kunjungi tempat, check-in dengan GPS dan foto real-time untuk validasi.",
  },
  {
    number: "04",
    icon: Star,
    title: "Review & Berbagi",
    description: "Bagikan pengalamanmu melalui review berkualitas untuk membantu explorer lain.",
  },
  {
    number: "05",
    icon: Trophy,
    title: "Naik Level",
    description: "Kumpulkan poin untuk naik level dari 'Explorer' hingga 'Culinary Legend'.",
  },
  {
    number: "06",
    icon: Gift,
    title: "Tukar Reward",
    description: "Tukarkan poin dengan reward nyata — voucher, diskon, atau item eksklusif.",
  }
];

const pointsSystem = [
  { action: "Check-in tervalidasi", points: "+50" },
  { action: "Review dengan foto", points: "+30" },
  { action: "Review berkualitas", points: "+20" },
  { action: "Hidden gem baru", points: "+100" },
  { action: "Referral teman", points: "+200" },
  { action: "Streak 7 hari", points: "+150" }
];

const CaraKerja = () => {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <CheckCircle2 className="w-4 h-4" />
              Cara Kerja
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Mulai Petualangan <span className="text-secondary">dalam 6 Langkah</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Snappie dirancang untuk membuat eksplorasi kuliner menjadi mudah, menyenangkan, dan menguntungkan.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* Step 1 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary">01</span>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Download & Daftar</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Download aplikasi Snappie dari Play Store dan buat akun dalam hitungan detik.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Smartphone className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-secondary">02</span>
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Jelajahi Hidden Gems</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Gunakan pencarian atau GPS untuk menemukan tempat kuliner tersembunyi di sekitarmu.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary">03</span>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Check-in & Validasi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kunjungi tempat, check-in dengan GPS dan foto real-time untuk validasi.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Camera className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-secondary">04</span>
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Review & Berbagi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Bagikan pengalamanmu melalui review berkualitas untuk membantu explorer lain.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Star className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-primary">05</span>
                  <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Naik Level</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Kumpulkan poin untuk naik level dari 'Explorer' hingga 'Culinary Legend'.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                    <Trophy className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 6 */}
            <div className="flex flex-col lg:flex-row-reverse gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-5xl font-bold text-secondary">06</span>
                  <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                    <Gift className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Tukar Reward</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tukarkan poin dengan reward nyata — voucher, diskon, atau item eksklusif.
                </p>
              </div>
              <div className="flex-1">
                <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                  <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                    <Gift className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Points System */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Sparkles className="w-4 h-4" />
                Sistem Poin
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Cara Mendapatkan <span className="text-secondary">Poin</span>
              </h2>
              <p className="text-sm text-muted-foreground">
                Setiap aktivitas di Snappie memberikan poin yang bisa ditukar dengan reward nyata.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {pointsSystem.map((item, index) => (
                <div 
                  key={index} 
                  className="bg-card p-4 rounded-xl shadow-card text-center hover:shadow-elevated transition-shadow"
                >
                  <p className="text-2xl md:text-3xl font-bold text-secondary mb-1">{item.points}</p>
                  <p className="text-xs md:text-sm text-muted-foreground">{item.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Levels Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                <Trophy className="w-4 h-4" />
                Level System
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Naik Level, Dapatkan <span className="text-primary">Benefit</span>
              </h2>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-card">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Explorer</p>
                  <p className="text-xs text-muted-foreground">0 - 500 poin</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-card">
                <div className="w-10 h-10 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Foodie</p>
                  <p className="text-xs text-muted-foreground">501 - 2,000 poin</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-card">
                <div className="w-10 h-10 bg-zinc-400 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Gourmet</p>
                  <p className="text-xs text-muted-foreground">2,001 - 5,000 poin</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-card p-4 rounded-xl shadow-card">
                <div className="w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                <div className="flex-1">
                  <p className="font-semibold text-foreground">Connoisseur</p>
                  <p className="text-xs text-muted-foreground">5,001 - 10,000 poin</p>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-gradient-to-r from-primary to-secondary p-4 rounded-xl shadow-elevated">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-bold text-sm">5</div>
                <div className="flex-1">
                  <p className="font-semibold text-white">Culinary Legend</p>
                  <p className="text-xs text-white/80">10,000+ poin</p>
                </div>
                <Trophy className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Download className="w-12 h-12 mx-auto mb-4 text-secondary" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Siap Memulai Petualangan?
            </h2>
            <p className="text-base text-white/80 mb-6">
              Download Snappie sekarang dan mulai jelajahi hidden gems kuliner di kotamu!
            </p>
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-white gap-2 rounded-full px-8"
              onClick={() => setIsDownloadModalOpen(true)}
            >
              Download Sekarang
              <ArrowRight className="w-5 h-5" />
            </Button>
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

export default CaraKerja;
