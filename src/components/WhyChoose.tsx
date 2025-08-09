import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, TrendingUp, Target } from "lucide-react";

const WhyChoose = () => {
  const pillars = [
    {
      title: "Especialista Experiente",
      description: "Mais de 5 anos automatizando empresas",
      icon: User,
      badge: "5+ Anos",
    },
    {
      title: "Resultados Comprovados",
      description: "Nossos clientes triplicam o retorno em 6 meses",
      icon: TrendingUp,
      badge: "3x ROI",
    },
    {
      title: "Método Exclusivo",
      description: "Sistema testado em mais de 50 empresas",
      icon: Target,
      badge: "50+ Empresas",
    },
  ];

  return (
    <section id="why-us" className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            Por que escolher a{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Automação Pro
            </span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Três pilares que garantem o sucesso da sua automação
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Card
                key={pillar.title}
                className="glass-card border-primary/20 hover-glow group animate-fade-in text-center"
                style={{
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <CardHeader className="pb-6">
                  <div className="relative mx-auto mb-4">
                    <div className="w-16 h-16 lg:w-20 lg:h-20 glass-card rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-primary" />
                    </div>
                    <Badge className="absolute -top-2 -right-2 bg-primary text-primary-foreground border-0 font-bold">
                      {pillar.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl lg:text-2xl font-bold text-foreground">
                    {pillar.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground text-base lg:text-lg">
                    {pillar.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;