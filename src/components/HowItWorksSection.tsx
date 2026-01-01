import { Smartphone, MapPin, Camera, Star, Trophy, Gift, CheckCircle2 } from "lucide-react";

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
                  <Camera className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Jelajahi & Check-in</h3>
              <p className="text-muted-foreground leading-relaxed">
                Temukan hidden gem, kunjungi, dan check-in dengan foto real-time untuk validasi dan dapat poin.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                <div className="w-24 h-24 bg-secondary rounded-2xl flex items-center justify-center shadow-lg">
                  <Camera className="w-12 h-12 text-white" />
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
                  <Gift className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3">Klaim Reward</h3>
              <p className="text-muted-foreground leading-relaxed">
                Kumpulkan poin dari check-in dan review, lalu tukar dengan reward nyata di merchant partner.
              </p>
            </div>
            <div className="flex-1">
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 flex items-center justify-center min-h-[250px]">
                <div className="w-24 h-24 bg-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Gift className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;