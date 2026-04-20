const PHONE_NUMBER = "35988004965";

const buildMailto = (email, subject, body) =>
  `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

export const companyInfo = {
  name: "Formato Motos",
  cnpj: "03.399.208/0001-13",
  email: "formatomotos@gmail.com",
  assistanceEmail: "assistencia@formatomotos.com",
  phoneNumber: PHONE_NUMBER,
  phoneDisplay: "(35) 98800-4965",
  address: "R. Dr. Melo Viana, 11 - Santa Teresinha, Lavras - MG, 37200-000",
};

export const socialLinks = {
  instagram: "https://www.instagram.com/formatomotos/?hl=pt",
  facebook: "https://www.facebook.com/profile.php?id=100054224751885",
};

export const messages = {
  whatsappDefault: "Olá! Gostaria de mais informações sobre seus produtos.",
  whatsappSales:
    "Olá, vi a moto no site e tenho interesse em saber mais sobre as especificações, preço e condições. Poderiam me enviar mais informações?",
  whatsappAssistance:
    "Olá, tenho interesse em agendar uma assistência para minha moto elétrica. Poderiam me enviar mais detalhes?",
  whatsappVisit: "Olá, gostaria de agendar uma visita à unidade de Lavras.",
  mailSalesBody:
    "Olá, vi a moto (Especifique o Modelo) no site e tenho interesse em saber mais sobre as especificações, preço e condições. Poderiam me enviar mais informações?",
  mailAssistanceBody:
    "Olá, gostaria de agendar uma assistência para minha moto elétrica. Poderiam me enviar mais detalhes?",
  mailProposalBody: "Olá, gostaria de receber uma proposta de uma moto elétrica.",
};

export const createWhatsAppUrl = (message) =>
  `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`;

export const contactLinks = {
  whatsappDefault: createWhatsAppUrl(messages.whatsappDefault),
  whatsappSales: createWhatsAppUrl(messages.whatsappSales),
  whatsappAssistance: createWhatsAppUrl(messages.whatsappAssistance),
  whatsappVisit: createWhatsAppUrl(messages.whatsappVisit),
  mailSales: buildMailto(companyInfo.email, "Gostaria de saber mais sobre a moto elétrica", messages.mailSalesBody),
  mailAssistance: buildMailto(
    companyInfo.assistanceEmail,
    "Agendamento de Assistência",
    messages.mailAssistanceBody,
  ),
  mailProposal: buildMailto(companyInfo.email, "Solicitar proposta", messages.mailProposalBody),
};
