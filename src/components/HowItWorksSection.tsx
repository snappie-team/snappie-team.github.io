import { Download, Camera, Star } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Download,
    title: "Download & Register",
    description: "Create your account in seconds.",
  },
  {
    number: "2",
    icon: Camera,
    title: "Explore & Validate",
    description: "Find a gem, visit it, and check-in with a real-time photo to validate your discovery and earn points.",
  },
  {
    number: "3",
    icon: Star,
    title: "Claim Rewards",
    description: "Bank your points from check-ins and reviews, then redeem them for real-world rewards at our partner merchants.",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Start Your Adventure in 3 Simple Steps
          </h2>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-primary/20 -translate-y-1/2"></div>
            
            <div className="grid md:grid-cols-3 gap-12 relative">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div 
                    key={index} 
                    className="text-center animate-fade-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="relative inline-flex items-center justify-center mb-6">
                      <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-elevated relative z-10">
                        <Icon className="w-12 h-12 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground font-bold text-lg shadow-card">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
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
