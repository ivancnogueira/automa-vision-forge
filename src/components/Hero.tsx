import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-automation.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient pt-20 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1 space-y-6 lg:space-y-8 animate-slide-in-left">
            {/* Achievement Badge */}
            <Badge className="glass-card text-primary border-primary/30 px-4 py-2 text-sm font-semibold">
              <TrendingUp className="w-4 h-4 mr-2" />
              +50 empresas atendidas
            </Badge>

            {/* Headline */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              Reduza{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                70% do Tempo
              </span>{" "}
              em Processos Repetitivos com{" "}
              <span className="text-accent">Automação I.A</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl">
              Consultoria especializada para empresas que querem crescer sem
              contratar mais pessoas
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="btn-holographic px-8 py-3 text-lg font-semibold h-auto">
                Agendar Diagnóstico
              </Button>
              <Button
                variant="outline"
                className="glass-card border-primary/30 text-foreground hover:text-primary px-8 py-3 text-lg font-semibold h-auto hover-glow"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Social Metric */}
            <div className="flex items-center gap-2 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-primary font-semibold text-lg">
                300% ROI médio em 6 meses
              </span>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2 animate-slide-in-right">
            <div className="relative">
              <div className="glass-card p-4 lg:p-8 animate-float">
                <img
                  src={heroImage}
                  alt="Automação I.A Dashboard"
                  className="w-full h-auto rounded-xl shadow-2xl"
                />
                {/* Holographic overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl pointer-events-none"></div>
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

export default Hero;