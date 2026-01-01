import { Smartphone, CheckCircle2, Gift, Camera } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Smartphone,
    title: "Download & Daftar",
    description: "Buat akun dalam hitungan detik. Gratis dan mudah.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "02",
    icon: Camera,
    title: "Jelajahi & Validasi",
    description: "Temukan hidden gem, kunjungi, dan check-in dengan foto real-time untuk validasi dan dapat poin.",
    color: "from-primary to-orange-600",
  },
  {
    number: "03",
    icon: Gift,
    title: "Klaim Reward",
    description: "Kumpulkan poin dari check-in dan review, lalu tukar dengan reward nyata di merchant partner.",
    color: "from-green-500 to-green-600",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-up">
          <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <CheckCircle2 className="w-4 h-4" />
            Mudah Dimulai
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Mulai Petualanganmu dalam
            <span className="text-primary block mt-2">3 Langkah Simpel</span>
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line for desktop */}
            <div className="hidden lg:block absolute top-24 left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-blue-500 via-primary to-green-500 opacity-30"></div>
            
            <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="relative animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    {/* Card */}
                    <div className="bg-card rounded-3xl p-8 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-2 h-full">
                      {/* Step number badge */}
                      <div className="absolute -top-4 left-8">
                        <span className={`bg-gradient-to-r ${step.color} text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg`}>
                          {step.number}
                        </span>
                      </div>
                      
                      {/* Icon */}
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg mt-4`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
