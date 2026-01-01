import { AlertCircle, TrendingDown, Users, Clock } from "lucide-react";
import featureDiscover from "@/assets/feature-discover.jpg";
import logo from "@/assets/dark-xxxhdpi.png";

const problems = [
  {
    icon: Users,
    text: "Tempat mainstream selalu ramai & antri panjang"
  },
  {
    icon: TrendingDown,
    text: "Kualitas makanan menurun karena terlalu populer"
  },
  {
    icon: Clock,
    text: "Waktu terbuang mencari tempat yang worth it"
  },
  {
    icon: AlertCircle,
    text: "Hidden gems tidak ada di aplikasi mainstream"
  }
];

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 animate-slide-in">
            <div className="relative">
              <img 
                src={featureDiscover} 
                alt="Cozy hidden gem restaurant with warm lighting and intimate atmosphere"
                className="w-full h-auto rounded-3xl shadow-card"
              />
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-up">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-6">
              Masalah yang Kami Pecahkan
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              Bosan dengan Restoran
              <span className="text-primary"> Mainstream?</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Pengalaman kuliner terbaik seringkali tersembunyi di gang-gang kecil atau warung sederhana yang tidak terdaftar di aplikasi besar.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {problems.map((problem, index) => {
                const Icon = problem.icon;
                return (
                  <div key={index} className="flex items-start gap-3 p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-foreground font-medium">{problem.text}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="mt-8 p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-lg text-foreground font-semibold flex items-center gap-3">
                <img src={logo} alt="Snappie Logo" className="w-10 h-10 rounded-lg flex-shrink-0" />
                <span><span className="text-primary">Snappie</span> hadir sebagai solusinya!</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
