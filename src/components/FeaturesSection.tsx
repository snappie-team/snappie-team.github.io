import { MapPin, Trophy, Gift, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: MapPin,
    title: "Find Curated Gems",
    description: "Our special curation and GPS-based search guide you to high-quality, lesser-known spots.",
  },
  {
    icon: Trophy,
    title: "Collect Points & Level Up",
    description: "Earn points for every validated check-in (using GPS & real-time photo) and quality review. Rise from 'Explorer' to 'Culinary Legend.'",
  },
  {
    icon: Gift,
    title: "Redeem Real Rewards",
    description: "Partnering with local merchants, redeem your points for vouchers, discounts, free drinks, or exclusive items.",
  },
  {
    icon: TrendingUp,
    title: "Top the Leaderboard",
    description: "Engage in healthy competition with other explorers in your city and climb the monthly leaderboard.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            It's Not a Directory. It's an Adventure.
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                className="border-none shadow-card hover:shadow-elevated transition-all hover:scale-105 animate-fade-up bg-card"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-elevated">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
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
