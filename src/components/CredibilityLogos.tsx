import { Badge } from "@/components/ui/badge";
import { Cloud, Shield, Zap } from "lucide-react";

const CredibilityLogos = () => {
  const partners = [
    {
      name: "Microsoft Partner",
      icon: Shield,
      description: "Certified Azure Solutions"
    },
    {
      name: "AWS Certified",
      icon: Cloud,
      description: "Advanced Cloud Architecture"
    },
    {
      name: "Google Cloud Partner",
      icon: Zap,
      description: "Professional Cloud Developer"
    }
  ];

  return (
    <section className="py-12 lg:py-16 border-b border-border/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-muted-foreground text-sm lg:text-base">
            Certificados pelas principais plataformas tecnológicas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {partners.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="flex flex-col items-center group hover-glow"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="glass-card p-6 rounded-2xl mb-4 group-hover:scale-105 transition-transform duration-300">
                  <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary mx-auto" />
                </div>
                <Badge className="glass-card border-primary/30 text-primary font-semibold mb-2">
                  {partner.name}
                </Badge>
                <p className="text-muted-foreground text-sm text-center">
                  {partner.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CredibilityLogos;