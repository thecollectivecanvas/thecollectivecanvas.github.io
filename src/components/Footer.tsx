import { Instagram } from "lucide-react";

const Footer = () => {
  return <footer className="bg-primary text-primary-foreground py-12 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 watercolor-texture" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex items-center justify-between gap-4 py-4">
          <a href="https://www.instagram.com/mollyramona/" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors flex-shrink-0" aria-label="Instagram">
            <Instagram size={24} />
          </a>
          <span className="text-primary-foreground/70 text-xs md:text-sm text-right">
            © {new Date().getFullYear()} The Collective Canvas. All rights reserved.
          </span>
        </div>
      </div>
    </footer>;
};
export default Footer;