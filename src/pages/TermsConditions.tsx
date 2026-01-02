import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { FileText, Shield } from "lucide-react";

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <FileText className="w-4 h-4" />
              Legal
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Syarat dan Ketentuan
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Mohon baca syarat dan ketentuan ini dengan seksama sebelum menggunakan aplikasi Snappie.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl shadow-card p-8 md:p-12 mb-8">
              <div className="prose prose-sm md:prose-base max-w-none">
                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">1</span>
                    Penggunaan Aplikasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Aplikasi Snappie memungkinkan pengguna untuk mencari tempat kuliner hidden gems di sekitar mereka. Anda setuju untuk menggunakan aplikasi ini hanya untuk tujuan yang sah dan tidak melanggar hukum yang berlaku.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">2</span>
                    Akun Pengguna
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Untuk mengakses fitur tertentu aplikasi Snappie, Anda diminta untuk membuat akun pengguna. Anda bertanggung jawab penuh untuk menjaga kerahasiaan informasi akun dan kata sandi Anda. Anda juga bertanggung jawab atas semua aktivitas yang terjadi di akun Anda.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">3</span>
                    Hak Kekayaan Intelektual
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Semua konten yang ada dalam aplikasi Snappie, termasuk namun tidak terbatas pada teks, gambar, logo, dan desain aplikasi, adalah hak milik Snappie atau pemegang lisensi kami. Anda tidak diperbolehkan untuk menyalin, mendistribusikan, atau menggubah konten tanpa izin kami.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">4</span>
                    Data Pribadi dan Privasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami mengumpulkan data pribadi Anda sesuai dengan Kebijakan Privasi yang kami sediakan. Dengan menggunakan aplikasi ini, Anda setuju untuk memberikan data pribadi Anda sebagaimana dijelaskan dalam Kebijakan Privasi kami.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">5</span>
                    Pembatasan Tanggung Jawab
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Snappie tidak bertanggung jawab atas kerusakan atau kerugian yang timbul akibat penggunaan aplikasi, termasuk namun tidak terbatas pada kehilangan data, gangguan layanan, atau kerugian perangkat. Semua informasi yang disediakan melalui aplikasi ini bersifat umum dan kami tidak menjamin keakuratan atau kelengkapan informasi tersebut.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">6</span>
                    Pembaruan dan Perubahan Aplikasi
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Snappie dapat memperbarui atau memodifikasi aplikasi dari waktu ke waktu, termasuk menambahkan atau menghapus fitur. Kami berhak untuk menghentikan layanan aplikasi atau layanan kapan saja tanpa pemberitahuan sebelumnya.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">7</span>
                    Penghentian Akses
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami berhak untuk menangguhkan atau menghentikan akses Anda ke aplikasi Snappie jika Anda melanggar syarat dan ketentuan ini atau jika kami merasa perlu untuk melindungi keamanan aplikasi dan pengguna lainnya.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">8</span>
                    Perubahan Syarat dan Ketentuan
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Kami dapat memperbarui syarat dan ketentuan ini dari waktu ke waktu. Setiap perubahan akan diumumkan melalui pembaruan aplikasi atau pemberitahuan langsung kepada Anda. Penggunaan aplikasi setelah perubahan syarat dan ketentuan berarti Anda menerima perubahan tersebut.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">9</span>
                    Hukum yang Berlaku
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Syarat dan ketentuan ini diatur oleh hukum yang berlaku di Indonesia. Setiap sengketa yang timbul terkait dengan aplikasi ini akan diselesaikan melalui proses hukum yang berlaku di Indonesia.
                  </p>
                </div>

                <div className="mb-10">
                  <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
                    <span className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white text-sm font-bold">10</span>
                    Kontak
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Jika Anda memiliki pertanyaan atau masalah terkait dengan syarat dan ketentuan ini, Anda dapat menghubungi kami di alamat email.
                  </p>
                </div>
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
                <div className="flex items-start gap-4">
                  <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-sm text-foreground leading-relaxed">
                    Dengan menggunakan aplikasi Snappie, Anda menyetujui untuk mematuhi semua syarat dan ketentuan yang tercantum di atas.
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

export default TermsConditions;
