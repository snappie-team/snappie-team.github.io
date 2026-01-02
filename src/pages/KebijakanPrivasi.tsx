import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Shield, Lock } from "lucide-react";

const KebijakanPrivasi = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-secondary to-secondary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Shield className="w-4 h-4" />
              Privasi
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Kebijakan Privasi
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Adanya kebijakan privasi ini adalah komitmen nyata dari Snappie untuk melindungi privasi Anda saat menikmati aplikasi kami.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 mb-8">
              <div className="mb-8">
                <p className="text-muted-foreground leading-relaxed">
                  Kebijakan Privasi ini menjelaskan bagaimana Snappie mengumpulkan, menggunakan, melindungi, dan membagikan informasi pribadi Anda.
                </p>
              </div>

              <div className="prose prose-sm md:prose-base max-w-none">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">1</span>
                    Informasi yang Kami Kumpulkan
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Kami mengumpulkan informasi berikut saat Anda menggunakan aplikasi Snappie:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span><strong>Informasi Pribadi:</strong> Nama, alamat email, dan informasi lain yang Anda berikan saat mendaftar melalui interaksi dengan aplikasi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span><strong>Informasi Lokasi:</strong> Kami mengakses data lokasi untuk membantu Anda menemukan tempat kuliner terdekat.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span><strong>Data Penggunaan:</strong> Kami mengumpulkan informasi terkait bagaimana Anda menggunakan aplikasi, seperti jenis perangkat, waktu penggunaan, dan interaksi dengan konten.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">2</span>
                    Penggunaan Informasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    Informasi yang kami kumpulkan digunakan untuk:
                  </p>
                  <ul className="space-y-2 text-muted-foreground ml-4">
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Menyediakan dan mempersonalisasi layanan aplikasi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Meningkatkan pengalaman pengguna dengan memberikan rekomendasi tempat kuliner yang relevan.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-secondary mt-1">•</span>
                      <span>Mengumpulkan pembatuan atau informasi terkait aplikasi.</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">3</span>
                    Keamanan Informasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami berkomitmen untuk menjaga keamanan informasi pribadi Anda dengan menggunakan protokol keamanan yang sesuai. Meskipun kami berusaha keras untuk melindungi data Anda, tidak ada metode transmisi data melalui internet yang sepenuhnya aman.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">4</span>
                    Berbagi Informasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami tidak akan membagikan informasi pribadi Anda kepada pihak ketiga tanpa izin Anda, kecuali jika diwajibkan oleh hukum atau untuk memberikan layanan yang Anda minta (misalnya, berbagi informasi dengan penyedia layanan atau mitra yang membantu aplikasi kami).
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">5</span>
                    Pengaturan Privasi Anda
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Anda dapat mengelola preferensi privasi Anda, termasuk memperbarui atau menghapus informasi pribadi melalui pengaturan aplikasi. Jika Anda tidak ingin berbagi data lokasi, Anda dapat menonaktifkan fitur tersebut di pengaturan perangkat Anda.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">6</span>
                    Perubahan pada Kebijakan Privasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Setiap perubahan akan diumumkan melalui pembaruan aplikasi atau pemberitahuan langsung.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center text-white text-sm font-bold">7</span>
                    Kontak
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, Anda dapat menghubungi kami di alamat email.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-secondary/5 border border-secondary/20 rounded-xl">
                <div className="flex items-start gap-4">
                  <Lock className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground leading-relaxed">
                    Dengan menggunakan aplikasi Snappie, Anda menyetujui pengumpulan dan penggunaan data Anda sebagaimana dijelaskan dalam Kebijakan Privasi ini.
                  </p>
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

export default KebijakanPrivasi;
