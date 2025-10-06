import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/properties", label: "Properties" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={closeMenu}
        />
      )}

      {/* Mobile Menu Slide Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-background border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-bold text-lg">Menu</span>
            <button
              onClick={closeMenu}
              className="p-2 hover:bg-accent rounded-md"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <div className="space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMenu}
                  className={`block px-4 py-3 rounded-md transition-colors ${
                    isActive(link.path)
                      ? "bg-primary text-white"
                      : "hover:bg-accent"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Service Submenu */}
            <div className="mt-6">
              <p className="px-4 py-2 text-sm font-semibold text-muted-foreground">
                Services
              </p>
              <div className="space-y-1">
                <Link
                  to="/services/investment-strategy"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  Investment Strategy
                </Link>
                <Link
                  to="/services/financing-solutions"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  Financing Solutions
                </Link>
                <Link
                  to="/services/portfolio-management"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  Portfolio Management
                </Link>
                <Link
                  to="/services/legal-support"
                  onClick={closeMenu}
                  className="block px-4 py-2 text-sm hover:bg-accent rounded-md transition-colors"
                >
                  Legal Support
                </Link>
              </div>
            </div>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-border">
            <Link to="/contact" onClick={closeMenu}>
              <Button variant="premium" className="w-full">
                Book Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
