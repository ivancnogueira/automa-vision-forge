import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CredibilityLogos from "@/components/CredibilityLogos";
import Features from "@/components/Features";
import WhyChoose from "@/components/WhyChoose";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <CredibilityLogos />
      <Features />
      <WhyChoose />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
