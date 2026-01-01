import { MapPin, Trophy, Gift, Camera, Star, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Smart Discovery",
    description: "Temukan hidden gems kuliner di sekitarmu dengan algoritma pencarian cerdas yang memprioritaskan tempat berkualitas tapi belum terekspos.",
    color: "bg-primary",
  },
  {
    icon: Camera,
    title: "Real-time Check-in & Validasi",
    description: "Sistem check-in dengan GPS dan foto real-time yang memastikan keaslian kunjungan. Anti-fraud dan rewarding!",
    color: "bg-secondary",
  },
  {
    icon: Star,
    title: "Quality Review System",
    description: "Bagikan pengalaman kulinermu melalui review berkualitas dengan foto, rating detail, dan dapatkan poin bonus!",
    color: "bg-primary",
  },
  {
    icon: Trophy,
    title: "Level & Achievement System",
    description: "Naik level dari Explorer hingga Culinary Legend. Kumpulkan badge, bersaing di leaderboard, dan unlock benefit eksklusif!",
    color: "bg-secondary",
  },
  {
    icon: Gift,
    title: "Reward Marketplace",
    description: "Tukarkan poin dengan reward nyata dari merchant partner. Voucher diskon, menu gratis, hingga merchandise eksklusif!",
    color: "bg-primary",
  },
  {
    icon: Users,
    title: "Community Features",
    description: "Bergabung dengan komunitas food explorer. Follow, share, dan discover bersama ribuan pecinta kuliner lainnya!",
    color: "bg-secondary",
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
            Fitur Lengkap untuk
            <span className="text-primary block mt-2">Petualangan Kulinermu</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Snappie dilengkapi dengan berbagai fitur canggih untuk membuat eksplorasi kulinermu lebih seru dan rewarding.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
