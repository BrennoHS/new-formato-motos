import { FaWhatsapp } from 'react-icons/fa';
import { contactLinks } from "../data/siteConfig";

const WhatsAppButton = () => {
  return (
    <a
      href={contactLinks.whatsappDefault}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed right-5 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#1a1a1a]"
      style={{ bottom: "max(env(safe-area-inset-bottom), 0.75rem)" }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default WhatsAppButton;