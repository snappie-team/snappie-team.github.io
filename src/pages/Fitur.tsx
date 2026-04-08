import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState } from "react";
import DownloadModal from "@/components/DownloadModal";
import { Camera, CheckCircle2, Gift, MapPin, Star, Trophy, Users, Zap } from "lucide-react";
import {
  achievementBadgeImage,
  coinVoucherImage,
  exploreSearchImage,
  homeSuccessPostImage,
  missionPageImage,
  leaderboardPageImage,
  reviewPageImage,
} from "@/assets/index";

const features = [
  {
    title: "Smart Discovery",
    description:
      "Temukan hidden gems kuliner di sekitarmu dengan algoritma pencarian cerdas yang memprioritaskan tempat berkualitas tapi belum terekspos.",
    Icon: MapPin,
    iconClassName: "bg-primary",
    accentClassName: "text-primary",
    image: exploreSearchImage,
    imageAlt: "Tangkapan layar fitur pencarian dan eksplorasi tempat kuliner Snappie",
    bullets: [
      "Filter berdasarkan jarak, kategori, harga",
      "GPS-based recommendation",
      "Rekomendasi personal berdasarkan preferensi",
    ],
    reverse: false,
  },
  {
    title: "Real-time Check-in & Validasi",
    description:
      "Sistem check-in dengan GPS dan foto real-time yang memastikan keaslian kunjungan. Anti-fraud dan rewarding!",
    Icon: Camera,
    iconClassName: "bg-secondary",
    accentClassName: "text-secondary",
    image: missionPageImage,
    imageAlt: "Tangkapan layar aktivitas check-in dan posting sukses di Snappie",
    bullets: [
      "GPS verification otomatis",
      "Upload foto real-time wajib",
      "Instant point reward setelah validasi",
    ],
    reverse: true,
  },
  {
    title: "Quality Review System",
    description:
      "Bagikan pengalaman kulinermu melalui review berkualitas dengan foto, rating detail, dan dapatkan poin bonus!",
    Icon: Star,
    iconClassName: "bg-primary",
    accentClassName: "text-primary",
    image: reviewPageImage,
    imageAlt: "Tangkapan layar koleksi foto makanan untuk review di Snappie",
    bullets: [
      "Multi-aspect rating (rasa, harga, pelayanan)",
      "Upload foto makanan & suasana",
      "Bonus poin untuk review berkualitas",
    ],
    reverse: false,
  },
  {
    title: "Level & Achievement System",
    description:
      "Naik level dari Explorer hingga Culinary Legend. Kumpulkan badge, bersaing di leaderboard, dan unlock benefit eksklusif!",
    Icon: Trophy,
    iconClassName: "bg-secondary",
    accentClassName: "text-secondary",
    images: [
      {
        src: achievementBadgeImage,
        alt: "Tangkapan layar achievement badge Snappie",
      },
      {
        src: leaderboardPageImage,
        alt: "Tangkapan layar leaderboard Snappie",
      },
    ],
    bullets: [
      "5 level progresif dengan benefit unik",
      "Leaderboard mingguan & bulanan",
      "Achievement badges & milestones",
    ],
    reverse: true,
  },
  {
    title: "Reward Marketplace",
    description:
      "Tukarkan poin dengan reward nyata dari merchant partner. Voucher diskon, menu gratis, hingga merchandise eksklusif!",
    Icon: Gift,
    iconClassName: "bg-primary",
    accentClassName: "text-primary",
    image: coinVoucherImage,
    imageAlt: "Tangkapan layar katalog kupon dan koin reward Snappie",
    bullets: [
      "Katalog reward dari 100+ merchant",
      "Voucher diskon hingga 50%",
      "Limited edition merchandise",
    ],
    reverse: false,
  },
  {
    title: "Community Features",
    description:
      "Bergabung dengan komunitas food explorer. Follow, share, dan discover bersama ribuan pecinta kuliner lainnya!",
    Icon: Users,
    iconClassName: "bg-secondary",
    accentClassName: "text-secondary",
    image: homeSuccessPostImage,
    imageAlt: "Tangkapan layar profil pengguna lain dan aktivitas komunitas Snappie",
    bullets: [
      "Follow & be followed system",
      "Share discoveries ke sosial media",
      "Referral program dengan bonus poin",
    ],
    reverse: true,
  },
] as const;

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
            {features.map((feature) => {
              const Icon = feature.Icon;

              return (
                <div
                  key={feature.title}
                  className={`flex flex-col gap-8 items-center ${feature.reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 ${feature.iconClassName} rounded-xl flex items-center justify-center`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <CheckCircle2 className={`w-4 h-4 ${feature.accentClassName}`} />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex-1 w-full">
                    {"images" in feature ? (
                      <div className="rounded-3xl bg-background/90 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.22)]">
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                          {feature.images.map((image) => (
                            <img
                              key={image.alt}
                              src={image.src}
                              alt={image.alt}
                              className="h-full w-full max-h-[460px] rounded-2xl object-contain"
                              loading="lazy"
                            />
                          ))}
                        </div>
                      </div>
                    ) : (
                      <img
                        src={feature.image}
                        alt={feature.imageAlt}
                        className="h-full w-full max-h-[460px] rounded-3xl object-contain shadow-[0_24px_70px_rgba(15,23,42,0.22)]"
                        loading="lazy"
                      />
                    )}
                  </div>
                </div>
              );
            })}
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