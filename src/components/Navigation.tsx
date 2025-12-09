import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
const Navigation = () => {
  return <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-2 md:px-4 py-2 md:py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="The Collective Canvas" className="h-12 md:h-16" />
          </Link>
          <div className="flex gap-2 md:gap-8 text-xs md:text-sm font-medium">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/knowledge-network" className="text-foreground hover:text-primary transition-colors">
              Resources
            </Link>
            <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/donate" className="text-foreground hover:text-primary transition-colors">Support</Link>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;