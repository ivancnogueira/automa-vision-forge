import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, Settings, GraduationCap, Headphones } from "lucide-react";

const Features = () => {
  const mainFeature = {
    title: "Diagnóstico Completo",
    description: "Analisamos todos os seus processos e criamos um plano personalizado",
    icon: Search,
  };

  const secondaryFeatures = [
    {
      title: "Implementação Simples",
      description: "Configuramos tudo sem complicação técnica",
      icon: Settings,
    },
    {
      title: "Treinamento Completo",
      description: "Ensinamos sua equipe a usar tudo",
      icon: GraduationCap,
    },
    {
      title: "Suporte Técnico",
      description: "Acompanhamento por 6 meses",
      icon: Headphones,
    },
  ];

  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            <span className="text-primary">Features</span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Tudo que você precisa para automatizar e escalar seu negócio
          </p>
        </div>

        {/* Main Feature Card */}
        <div className="mb-12 lg:mb-16 animate-slide-in-left">
          <Card className="glass-card border-primary/20 hover-glow group">
            <CardHeader className="text-center pb-8">
              <div className="w-16 h-16 lg:w-20 lg:h-20 mx-auto mb-6 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <mainFeature.icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
              </div>
              <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground">
                {mainFeature.title}
              </CardTitle>
              <CardDescription className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
                {mainFeature.description}
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Secondary Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {secondaryFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={feature.title}
                className="glass-card border-primary/20 hover-glow group animate-fade-in"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader className="text-center">
                  <div className="w-12 h-12 lg:w-16 lg:h-16 mx-auto mb-4 glass-card rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6 lg:w-8 lg:h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-foreground mb-2">
                    {feature.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;