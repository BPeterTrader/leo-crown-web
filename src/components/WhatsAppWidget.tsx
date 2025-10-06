import { MessageCircle } from "lucide-react";
import { useState } from "react";

const WhatsAppWidget = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  // WhatsApp number for Drupad (format: country code + number without + or spaces)
  const whatsappNumber = "971501234567"; // Replace with actual Drupad's number
  const message = encodeURIComponent("Hi, I'm interested in learning more about Leo Crown properties.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative">
        {/* Tooltip */}
        <div 
          className={`absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-background border border-border px-4 py-2 rounded-lg shadow-lg whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
          }`}
        >
          <span className="text-sm font-medium">Chat with Drupad</span>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rotate-45 w-2 h-2 bg-background border-r border-b border-border"></div>
        </div>

        {/* WhatsApp Button */}
        <div className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
          <MessageCircle className="h-7 w-7" />
        </div>

        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></div>
      </div>
    </a>
  );
};

export default WhatsAppWidget;
