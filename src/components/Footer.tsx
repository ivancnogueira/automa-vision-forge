import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Linkedin, Instagram, Facebook, Zap } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Facebook, href: "#", label: "Facebook" },
  ];

  return (
    <footer className="border-t border-border/20 bg-card/50">
      <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo and Copyright */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              <span className="text-xl font-bold text-foreground">Automação Pro</span>
            </div>
            <Separator orientation="vertical" className="h-6 hidden md:block" />
            <span className="text-muted-foreground">© 2025</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground text-sm hidden sm:block">
              Siga-nos:
            </span>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <Button
                    key={social.label}
                    variant="ghost"
                    size="icon"
                    className="hover:bg-primary/10 hover:text-primary transition-colors"
                    asChild
                  >
                    <a
                      href={social.href}
                      aria-label={social.label}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;