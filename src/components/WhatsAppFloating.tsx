import { MessageCircle } from "lucide-react";

const WhatsAppFloating = () => {
  const phoneNumber = "7677672641";
  const whatsappUrl = `https://wa.me/91${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-4 md:right-6 z-50 w-12 h-12 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 group animate-bounce-slow"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-6 h-6 md:w-7 md:h-7 text-white" />
      <span className="absolute -top-12 right-0 bg-foreground text-background text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppFloating;

