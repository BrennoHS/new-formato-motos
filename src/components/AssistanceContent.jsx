import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, Wrench, Clock, Phone, Mail } from 'lucide-react';
import { contactLinks } from "../data/siteConfig";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      ease: "easeOut",
      staggerChildren: 0.1
    } 
  },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    } 
  },
};

const floatingVariants = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const scrollIndicatorVariants = {
  animate: {
    y: [0, 10, 0],
    opacity: [0.5, 1, 0.5],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function AssistanceContent() {
  const [heroRef] = useInView({ threshold: 0.3, triggerOnce: true });
  const [servicesRef, servicesInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const services = [
    {
      icon: Wrench,
      title: "Manutenção Preventiva",
      text: "Revisões regulares para garantir o desempenho ideal da sua moto."
    },
    {
      icon: Clock,
      title: "Suporte",
      text: "Atendimento rápido e eficiente a qualquer hora do dia pelo WhatsApp."
    },
    {
      icon: Phone,
      title: "Reparos Especializados",
      text: "Reparo especializado é na própria loja, a assistência é marcada pelo WhatsApp."
    }
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative section-dark text-white hero-viewport flex items-center justify-center w-full"
      >
        <div className="hero-premium-bg">
          <div className="hero-premium-grid" />
          <div className="hero-premium-orb hero-premium-orb-a" />
          <div className="hero-premium-orb hero-premium-orb-b" />
          <div className="hero-premium-orb hero-premium-orb-c" />
          <div className="hero-premium-vignette" />
        </div>

        <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title-premium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
          >
            Assistência Formato Motos
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Suporte técnico especializado para sua moto elétrica
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href={contactLinks.whatsappAssistance}
              className="inline-flex items-center gap-2 btn-brand-primary font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(142, 197, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </motion.a>
            
            <motion.a
              href="#services"
              className="inline-flex items-center gap-2 btn-brand-secondary font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(142, 197, 77, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Ver Serviços
            </motion.a>
          </motion.div>

          <motion.div
            variants={scrollIndicatorVariants}
            animate="animate"
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[#8ec54d]" />
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        ref={servicesRef}
        className="w-full section-light viewport-section"
        initial="hidden"
        animate={servicesInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-[#12221f]"
              variants={cardVariants}
            >
              Nossos Serviços de Assistência
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-center mb-12 sm:mb-16 text-[#4f6560] max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Soluções especializadas para manter sua moto elétrica em perfeitas condições
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {services.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="surface-glass p-8 sm:p-10 rounded-2xl shadow-xl text-center group"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -10,
                      boxShadow: "0 20px 40px rgba(15, 32, 29, 0.12)"
                    }}
                  >
                    <motion.div
                      className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8ec54d] to-[#6f9e3c] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <IconComponent className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </motion.div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0d2a2c]">{item.title}</h3>
                    <p className="text-gray-700 leading-relaxed text-base sm:text-lg">{item.text}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="relative section-dark text-white py-16 sm:py-20 lg:py-24 w-full section-micro"
        initial="hidden"
        animate={ctaInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L90 25L90 75L50 95L10 75L10 25Z' fill='none' stroke='%238ec54d' stroke-width='1'/%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
            variants={cardVariants}
          >
            Precisa de Assistência?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 leading-relaxed"
            variants={cardVariants}
          >
            Nossa equipe está pronta para ajudar com qualquer necessidade da sua moto elétrica. Agende sua assistência pelo WhatsApp!
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={cardVariants}
          >
            <motion.a
              href={contactLinks.mailAssistance}
              className="inline-flex items-center gap-2 btn-brand-primary font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(142, 197, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Entre em Contato
            </motion.a>
            
            <motion.a
              href={contactLinks.whatsappAssistance}
              className="inline-flex items-center gap-2 btn-brand-secondary font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(142, 197, 77, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Agendar pelo WhatsApp
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}