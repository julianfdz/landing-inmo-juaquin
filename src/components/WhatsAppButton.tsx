import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+34660034238";
  const message = "¡Hola! Vengo de tu web";
  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
};

export default WhatsAppButton;
