import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  // --- INFORMAÇÕES CONFIGURÁVEIS ---
  const phoneNumber = '35988004965'; // Insira seu número com código do país (55 para Brasil)
  const message = 'Olá! Gostaria de mais informações sobre seus produtos.'; // Mensagem pré-definida

  // Codifica a mensagem para ser usada na URL
  const encodedMessage = encodeURIComponent(message);

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 hover:text-[#1a1a1a]"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp size={28} />
    </a>
  );
};

export default WhatsAppButton;