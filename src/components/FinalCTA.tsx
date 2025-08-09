import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import appMockup from "@/assets/app-mockup.jpg";

const FinalCTA = () => {
  return (
    <section className="py-16 lg:py-24 hero-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column - Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-in-left">
            {/* Badge */}
            <Badge className="glass-card text-primary border-primary/30 px-4 py-2 text-sm font-semibold">
              <Calendar className="w-4 h-4 mr-2" />
              Diagnóstico Gratuito
            </Badge>

            {/* Headline */}
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Agendar Diagnóstico
              </span>{" "}
              Gratuito Agora
            </h2>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed">
              Descubra exatamente onde sua empresa pode economizar tempo e dinheiro com automação I.A. 
              Análise completa sem custo e sem compromisso.
            </p>

            {/* Benefits */}
            <div className="space-y-3">
              {[
                "✓ Análise completa em 2-3 dias",
                "✓ Identificação de oportunidades",
                "✓ Plano personalizado de automação",
                "✓ Estimativa de ROI"
              ].map((benefit, index) => (
                <div 
                  key={benefit} 
                  className="flex items-center text-foreground text-base lg:text-lg animate-fade-in"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <span className="text-primary mr-3">{benefit.split(' ')[0]}</span>
                  <span>{benefit.split(' ').slice(1).join(' ')}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-holographic px-8 py-3 text-lg font-semibold h-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Agendar Agora
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                variant="outline"
                className="glass-card border-primary/30 text-foreground hover:text-primary px-8 py-3 text-lg font-semibold h-auto hover-glow"
              >
                <Clock className="w-5 h-5 mr-2" />
                WhatsApp Direto
              </Button>
            </div>

            {/* Urgency Text */}
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Apenas 5 vagas</span> disponíveis este mês
            </p>
          </div>

          {/* Right Column - App Mockup */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="glass-card p-6 lg:p-8 animate-float">
                <img
                  src={appMockup}
                  alt="App Automação Pro"
                  className="w-full max-w-md mx-auto h-auto rounded-2xl shadow-2xl"
                />
                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl pointer-events-none"></div>
              </div>
              {/* Floating glow effects */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-xl animate-glow-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;