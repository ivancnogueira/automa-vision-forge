import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import avatarMaria from "@/assets/avatar-maria.jpg";

const Testimonials = () => {
  const testimonial = {
    name: "Maria Santos",
    role: "Diretora da TechCorp",
    avatar: avatarMaria,
    rating: 5,
    text: "Conseguimos automatizar 80% dos processos e economizar R$ 50 mil por mês"
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4">
            O que nossos{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              clientes dizem
            </span>
          </h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Resultados reais de empresas que transformaram seus processos
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto animate-slide-in-left">
          <Card className="glass-card border-primary/20 hover-glow group">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-8">
                {/* Avatar */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-20 h-20 lg:w-24 lg:h-24 rounded-2xl object-cover glass-card p-1"
                    />
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                      <Quote className="w-4 h-4 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Rating */}
                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
                    "{testimonial.text}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2">
                    <Badge className="glass-card border-primary/30 text-primary font-semibold">
                      {testimonial.name}
                    </Badge>
                    <span className="text-muted-foreground">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-12 lg:mt-16 max-w-4xl mx-auto">
          {[
            { value: "R$ 50k+", label: "Economia Mensal" },
            { value: "80%", label: "Processos Automatizados" },
            { value: "6 meses", label: "Tempo de ROI" }
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center animate-fade-in"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <div className="text-2xl lg:text-3xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;