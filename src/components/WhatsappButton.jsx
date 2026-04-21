import { FaWhatsapp } from 'react-icons/fa';
import { contactLinks } from "../data/siteConfig";

const WhatsAppButton = () => {
  return (
    <a
      href={contactLinks.whatsappDefault}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-14 sm:bottom-8 right-5 sm:right-6 z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#1a1a1a]"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );
};

export default WhatsAppButton;