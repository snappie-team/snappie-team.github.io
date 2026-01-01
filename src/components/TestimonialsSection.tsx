import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote, MessageCircle } from "lucide-react";

const testimonials = [
  {
    name: "Andi Pratama",
    role: "Food Blogger",
    avatar: "A",
    text: "Akhirnya ada aplikasi yang menghargai passion saya mencari tempat makan unik! Sistem poinnya bikin ketagihan.",
    rating: 5,
    color: "bg-blue-500",
  },
  {
    name: "Sarah Wijaya",
    role: "Office Worker",
    avatar: "S",
    text: "Bulan ini sudah tukar poin untuk 3 kopi gratis. Wajib punya buat yang suka jajan!",
    rating: 5,
    color: "bg-pink-500",
  },
  {
    name: "Michael Tanaka",
    role: "Explorer Level 5",
    avatar: "M",
    text: "Suka banget sama aspek gamifikasinya. Cari restoran baru jadi serasa treasure hunt yang seru!",
    rating: 5,
    color: "bg-green-500",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <MessageCircle className="w-4 h-4" />
            Testimoni
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Kata Para <span className="text-primary">Explorer</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Ribuan explorer sudah menemukan hidden gems favorit mereka. Sekarang giliran kamu!
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="border-none shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 animate-fade-up bg-card relative overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="pt-8 pb-8 relative">
                {/* Quote icon */}
                <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                {/* Text */}
                <p className="text-foreground leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold text-lg`}>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
