import { MapPin, Trophy, Gift, TrendingUp, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Temukan Gems Terkurasi",
    description: "Kurasi khusus dan pencarian berbasis GPS memandu kamu ke tempat berkualitas tinggi yang jarang diketahui.",
    color: "bg-blue-500",
  },
  {
    icon: Trophy,
    title: "Kumpulkan Poin & Naik Level",
    description: "Dapatkan poin setiap check-in tervalidasi (GPS & foto real-time) dan review berkualitas. Naik dari 'Explorer' ke 'Culinary Legend.'",
    color: "bg-yellow-500",
  },
  {
    icon: Gift,
    title: "Tukar Reward Nyata",
    description: "Bermitra dengan merchant lokal, tukar poinmu dengan voucher, diskon, minuman gratis, atau item eksklusif.",
    color: "bg-green-500",
  },
  {
    icon: TrendingUp,
    title: "Raih Puncak Leaderboard",
    description: "Ikuti kompetisi sehat dengan explorer lain di kotamu dan panjat leaderboard bulanan.",
    color: "bg-purple-500",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Fitur Unggulan
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Bukan Sekadar Direktori.
            <span className="text-primary block mt-2">Ini Petualangan!</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Snappie mengubah cara kamu menemukan kuliner dengan gamifikasi yang seru dan reward nyata.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up bg-card group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
