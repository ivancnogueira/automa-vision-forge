import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqData = [
    {
      question: "Como funciona o diagnóstico inicial?",
      answer: "Fazemos uma análise completa em 2-3 dias para identificar onde você pode melhorar. Nossa equipe especializada mapeia todos os seus processos atuais, identifica gargalos e oportunidades de automação, e apresenta um plano detalhado com estimativas de economia de tempo e recursos."
    }
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16 animate-fade-in">
          <div className="flex items-center justify-center gap-3 mb-4">
            <HelpCircle className="w-8 h-8 text-primary" />
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold">
              Perguntas{" "}
              <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Frequentes
              </span>
            </h2>
          </div>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl mx-auto">
            Tire suas dúvidas sobre nosso processo de automação
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto animate-slide-in-left">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="glass-card border-primary/20 rounded-2xl px-6 hover-glow"
              >
                <AccordionTrigger className="text-left text-lg lg:text-xl font-semibold text-foreground py-6 hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base lg:text-lg leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;