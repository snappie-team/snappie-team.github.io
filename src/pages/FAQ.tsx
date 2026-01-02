import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { HelpCircle, FileText } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqCategories } from "@/data/faqData";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-primary/80 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <HelpCircle className="w-4 h-4" />
              FAQ
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Pertanyaan yang
              <span className="text-secondary block mt-2">Sering Ditanyakan</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
              Temukan jawaban untuk pertanyaan umum seputar Snappie. Belum menemukan yang kamu cari? Hubungi tim support kami.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
                  <span className={`w-10 h-10 ${categoryIndex % 2 === 0 ? 'bg-primary' : 'bg-secondary'} rounded-xl flex items-center justify-center text-white text-sm font-bold`}>
                    {categoryIndex + 1}
                  </span>
                  {category.category}
                </h2>
                
                <Accordion type="single" collapsible className="space-y-4">
                  {category.questions.map((item, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`${categoryIndex}-${index}`}
                      className="bg-card rounded-2xl shadow-card border-none px-6"
                    >
                      <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-6">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Syarat dan Ketentuan Card */}
              <div className="bg-card rounded-2xl shadow-card p-8 md:p-10">
                <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">
                  Syarat dan Ketentuan
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed text-center">
                  Pelajari lebih lanjut tentang syarat dan ketentuan penggunaan aplikasi Snappie untuk memahami hak dan kewajiban Anda sebagai pengguna.
                </p>
                <Link to="/syarat-ketentuan" className="block">
                  <Button 
                    size="lg"
                    className="gap-2 bg-primary hover:bg-primary/90 text-white w-full"
                  >
                    <FileText className="w-5 h-5" />
                    Baca Syarat & Ketentuan
                  </Button>
                </Link>
              </div>

              {/* Kebijakan Privasi Card */}
              <div className="bg-card rounded-2xl shadow-card p-8 md:p-10">
                <FileText className="w-12 h-12 text-secondary mx-auto mb-4" />
                <h2 className="text-xl md:text-2xl font-bold text-foreground mb-3 text-center">
                  Kebijakan Privasi
                </h2>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed text-center">
                  Ketahui bagaimana Snappie mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda dengan membaca kebijakan privasi kami.
                </p>
                <Link to="/kebijakan-privasi" className="block">
                  <Button 
                    size="lg"
                    className="gap-2 bg-secondary hover:bg-secondary/90 text-white w-full"
                  >
                    <FileText className="w-5 h-5" />
                    Baca Kebijakan Privasi
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
