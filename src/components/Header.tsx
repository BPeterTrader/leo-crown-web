import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo.svg";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Leo Crown" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive('/') ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/properties" 
              className={`text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive('/properties') ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Properties
            </Link>
            <Link 
              to="/services" 
              className={`text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive('/services') ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive('/about') ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive('/blog') ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all ${
                isActive('/contact') ? 'text-primary after:w-full' : 'after:w-0 hover:after:w-full'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:block">
              <Button variant="premium" size="default">
                Book Consultation
              </Button>
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
