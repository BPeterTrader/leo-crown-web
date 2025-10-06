import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Leo Crown" className="h-12 w-auto" />
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#services" 
              className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Services
            </a>
            <a 
              href="#properties" 
              className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Properties
            </a>
            <a 
              href="#calculator" 
              className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Calculator
            </a>
            <a 
              href="#market-insights" 
              className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Market Insights
            </a>
            <a 
              href="#team" 
              className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Team
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
            >
              Contact
            </a>
          </nav>
          
          <a href="#contact">
            <Button variant="premium" size="default">
              Book Consultation
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
