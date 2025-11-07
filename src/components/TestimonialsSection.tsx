import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex R.",
    text: "Finally, an app that rewards my passion for finding unique spots! The point system is addictive.",
    rating: 5,
  },
  {
    name: "Sarah K.",
    text: "I've already redeemed my points for three free coffees this month. A must-have app for foodies.",
    rating: 5,
  },
  {
    name: "Michael T.",
    text: "Love the gamification aspect. It makes exploring new restaurants feel like an exciting treasure hunt.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-gradient-feature">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Explorers Say
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card hover:shadow-elevated transition-all animate-fade-up bg-card"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="text-muted-foreground font-semibold">
                  - {testimonial.name}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
