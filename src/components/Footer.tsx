import { Flame, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <Flame className="w-6 h-6 text-primary flame-flicker" />
            <span className="font-display text-xl font-semibold text-foreground">
              Glow & Shine
            </span>
          </a>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#home" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Home
            </a>
            <a href="#products" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Products
            </a>
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              About
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors text-sm">
              Contact
            </a>
          </div>

          {/* Copyright */}
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-accent fill-accent" /> in India
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Glow & Shine. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
