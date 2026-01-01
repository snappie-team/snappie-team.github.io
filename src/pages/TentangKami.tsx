import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Target, Heart, Award, Sparkles, User, Instagram, Linkedin, Twitter, Github } from "lucide-react";
import logo from "@/assets/dark-xxxhdpi.png";

const TentangKami = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Users className="w-4 h-4" />
              Tentang Kami
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Membangun Komunitas <span className="text-secondary">Pecinta Kuliner</span>
            </h1>
            <p className="text-base md:text-lg text-white/80 leading-relaxed">
              Snappie lahir dari kecintaan kami terhadap kuliner lokal dan keinginan untuk membantu orang menemukan hidden gems di sekitar mereka.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
              {/* Logo Card */}
              <div className="order-1">
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-8 md:p-12 border border-border flex flex-col items-center justify-center">
                  <img src={logo} alt="Snappie Logo" className="w-28 h-28 md:w-32 md:h-32 mb-6 rounded-2xl shadow-lg" />
                  <div className="text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">Snappie</h3>
                    <p className="text-base text-muted-foreground">Temukan Kuliner Hidden Gems di Kotamu!</p>
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="order-2">
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Cerita Kami
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Berawal dari Rasa Penasaran
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
                  <p>
                    Snappie dimulai pada tahun 2024 ketika tim kami merasa frustrasi dengan aplikasi kuliner yang ada. Tempat-tempat yang direkomendasikan selalu sama — mainstream, ramai, dan seringkali overrated.
                  </p>
                  <p>
                    Kami percaya bahwa pengalaman kuliner terbaik seringkali tersembunyi di gang-gang kecil, warung sederhana yang dikelola turun-temurun, atau kafe indie yang belum terekspos media sosial.
                  </p>
                  <p>
                    Dari situlah Snappie lahir — platform yang menghubungkan para food explorer dengan hidden gems kuliner, dilengkapi dengan sistem gamifikasi yang membuat eksplorasi menjadi lebih seru dan rewarding.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                Tim Kami
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                Orang-orang di Balik <span className="text-secondary">Snappie</span>
              </h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Tim yang berdedikasi untuk membantu kamu menemukan pengalaman kuliner terbaik.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Team Member 1 */}
              <div className="bg-card rounded-2xl shadow-card p-8 flex flex-col items-center text-center hover:shadow-elevated transition-shadow">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary to-primary/80 rounded-3xl flex items-center justify-center shadow-lg mb-6">
                  <User className="w-20 h-20 md:w-24 md:h-24 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Marissa Ana</h3>
                <p className="text-sm text-muted-foreground mb-6">Hustler & Hipster</p>
                <div className="flex gap-3">
                  <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                    <Instagram className="w-5 h-5 text-primary group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-primary/10 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group">
                    <Linkedin className="w-5 h-5 text-primary group-hover:text-white" />
                  </a>
                </div>
              </div>

              {/* Team Member 2 */}
              <div className="bg-card rounded-2xl shadow-card p-8 flex flex-col items-center text-center hover:shadow-elevated transition-shadow">
                <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-secondary to-secondary/80 rounded-3xl flex items-center justify-center shadow-lg mb-6">
                  <User className="w-20 h-20 md:w-24 md:h-24 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">Tafif Assiddiqi</h3>
                <p className="text-sm text-muted-foreground mb-6">Hacker</p>
                <div className="flex gap-3">
                  <a href="https://instagram.com/tafif_a/" className="w-10 h-10 bg-secondary/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group">
                    <Instagram className="w-5 h-5 text-secondary group-hover:text-white" />
                  </a>
                  <a href="https://linkedin.com/in/tafifa" className="w-10 h-10 bg-secondary/10 hover:bg-secondary rounded-lg flex items-center justify-center transition-colors group">
                    <Linkedin className="w-5 h-5 text-secondary group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TentangKami;
