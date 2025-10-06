import logo from "@/assets/logo.svg";
import { Facebook, Instagram, Linkedin, X } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <img src={logo} alt="Leo Crown" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-white/70 mb-6">
              Your trusted partner in building wealth through strategic real estate investments.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://www.facebook.com/p/Leo-Crown-Estate-61579186532142/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/leocrownestate/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://ae.linkedin.com/company/leo-crown" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/thecrownestate?lang=en" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-primary transition-colors flex items-center justify-center"
              >
                <X className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-white/70 hover:text-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-white/70 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-white/70 hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services/investment-strategy" className="text-white/70 hover:text-primary transition-colors">
                  Investment Strategy
                </Link>
              </li>
              <li>
                <Link to="/services/financing-solutions" className="text-white/70 hover:text-primary transition-colors">
                  Financing Solutions
                </Link>
              </li>
              <li>
                <Link to="/services/portfolio-management" className="text-white/70 hover:text-primary transition-colors">
                  Portfolio Management
                </Link>
              </li>
              <li>
                <Link to="/services/legal-support" className="text-white/70 hover:text-primary transition-colors">
                  Legal Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-white/70">
              <li>123 Main Street<br />Suite 456<br />City, ST 12345</li>
              <li>+1 (555) 123-4567</li>
              <li>contact@realestate.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-white/60">
          <p>&copy; {new Date().getFullYear()} Leo Crown. All rights reserved. | "We only recommend investments we'd personally back."</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
