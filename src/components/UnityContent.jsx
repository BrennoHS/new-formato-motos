import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ChevronDown, MapPin, Phone, Mail } from 'lucide-react';

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
    y: [-10, 10, -10],
    transition: {
      duration: 6,
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

export default function UnidadesContent() {
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [locationsRef, locationsInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const locations = [
    { 
      title: "Lavras - Centro", 
      text: "Nossa loja principal, localizada no coração de Lavras, oferece atendimento completo para vendas, assistência e test drives.", 
      address: "Rua Dr. Melo Viana, 11 – Centro, Lavras – MG",
      mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.7884309551793!2d-44.99775312462531!3d-21.145349180513486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b4a7d7b5a0d3b%3A0x5a5b5a5b5a5b5a5b!2sR.+Dr.+Melo+Viana%2C+11+-+Centro%2C+Lavras+-+MG%2C+37200-000%2C+Brazil!5e0!3m2!1sen!2sus!4v1726592126589" 
    },
  ];

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] text-white min-h-screen flex items-center justify-center w-full"
        animate={{
          background: [
            "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 50%, #0d2a2c 100%)",
            "linear-gradient(135deg, #1a1a1a 0%, #0d2a2c 50%, #1a1a1a 100%)",
            "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 50%, #0d2a2c 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >


        <div className="z-10 w-full mx-auto text-center">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.img
             
            />
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#8ec54d] to-white bg-clip-text text-transparent leading-tight"
            variants={floatingVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Nossa Unidade
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Encontre nossa loja e descubra o futuro da mobilidade elétrica
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#unidades"
              className="sm:w-auto inline-flex items-center gap-2 bg-gradient-to-r from-[#8ec54d] to-[#6f9e3c] text-white font-bold py-4 px-8 sm:px-10 rounded-full hover:from-[#6f9e3c] hover:to-[#5a7d30] transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center hover:text-white"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(142, 197, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <MapPin className="w-5 h-5" />
              Ver Unidade
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={scrollIndicatorVariants}
            animate="animate"
            className="absolute bottom-24 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[#8ec54d]" />
          </motion.div>
        </div>
      </motion.section>

      {/* Locations Section */}
      <motion.section
        id="unidades"
        ref={locationsRef}
        className="w-full"
        initial="hidden"
        animate={locationsInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-[#8ec54d] via-[#7fb045] to-[#8ec54d] w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-white"
              variants={cardVariants}
            >
              Nossa Loja
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-center mb-12 sm:mb-16 text-white/90 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Visite nossa unidade em Lavras e descubra o mundo das motos elétricas
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-1 gap-8 lg:gap-12">
              {locations.map((location, index) => (
                <motion.div
                  key={index}
                  className="bg-white/95 backdrop-blur-sm p-8 sm:p-10 rounded-2xl shadow-xl text-center group hover:bg-white"
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                  }}
                >
                  <motion.div
                    className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#8ec54d] to-[#6f9e3c] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-4 text-[#0d2a2c]">{location.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg mb-4">{location.text}</p>
                  <p className="text-gray-600 mb-6">{location.address}</p>
                  <iframe
                    src={location.mapSrc}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        ref={ctaRef}
        className="bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] text-white py-16 sm:py-20 lg:py-24 w-full relative"
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

            Pronto para Visitar?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 leading-relaxed"
            variants={cardVariants}
          >
            Venha conhecer nossa loja e experimente nossas motos elétricas
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={cardVariants}
          >
            <motion.a
              href="mailto:formatomotos@gmail.com?subject=Gostaria de saber mais sobre a moto elétrica&body=Olá, vi a moto (Especifique o Modelo) no site e tenho interesse em saber mais sobre as especificações, preço e condições. Poderiam me enviar mais informações?"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-[#8ec54d] to-[#6f9e3c] text-white font-bold py-4 px-8 sm:px-10 rounded-full hover:from-[#6f9e3c] hover:to-[#5a7d30] transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center hover:text-white"
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
              href="https://wa.me/35988004965?text=Olá, gostaria de agendar uma visita à unidade de Lavras."
              className="inline-flex items-center gap-2 border-2 border-[#8ec54d] text-[#8ec54d] font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-[#8ec54d] hover:text-white transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(142, 197, 77, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              Contato
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}