import { FaWhatsapp } from 'react-icons/fa';
import { createPortal } from 'react-dom';
import { contactLinks } from "../data/siteConfig";

const WhatsAppButton = () => {
  const button = (
    <a
      href={contactLinks.whatsappDefault}
      target="_blank"
      rel="noopener noreferrer"
      className="z-50 bg-[#25D366] text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#1a1a1a]"
      style={{ position: "fixed", right: "1.25rem", bottom: "1rem" }}
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={26} />
    </a>
  );

  return createPortal(button, document.body);
};

export default WhatsAppButton;