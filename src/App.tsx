import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import PropertiesPage from "./pages/PropertiesPage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import InvestmentStrategy from "./pages/services/InvestmentStrategy";
import FinancingSolutions from "./pages/services/FinancingSolutions";
import PortfolioManagement from "./pages/services/PortfolioManagement";
import LegalSupport from "./pages/services/LegalSupport";
import BlogPostPage from "./pages/BlogPostPage";
import NotFound from "./pages/NotFound";
import WhatsAppWidget from "./components/WhatsAppWidget";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <WhatsAppWidget />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/investment-strategy" element={<InvestmentStrategy />} />
          <Route path="/services/financing-solutions" element={<FinancingSolutions />} />
          <Route path="/services/portfolio-management" element={<PortfolioManagement />} />
          <Route path="/services/legal-support" element={<LegalSupport />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
