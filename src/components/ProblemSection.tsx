import featureDiscover from "@/assets/feature-discover.jpg";

const ProblemSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 animate-slide-in">
            <img 
              src={featureDiscover} 
              alt="Cozy hidden gem restaurant with warm lighting and intimate atmosphere"
              className="w-full h-auto rounded-2xl shadow-card"
            />
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-up">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tired of the Same Mainstream Restaurants?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Mainstream spots are crowded and predictable. The best culinary experiences are often hidden in small alleys or simple shops not listed on major apps.
            </p>
            <p className="text-lg text-foreground font-semibold mt-4">
              "Snappie: Hidden Gems Kulinar" is your guide to finding them.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
