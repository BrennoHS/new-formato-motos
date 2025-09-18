import formatoImg from "../assets/formato.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown, Zap, Leaf, Palette, Star, Phone, Mail } from "lucide-react";

// Mock images for motorcycles (you can replace these with actual images)
const moto1 = "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop";
const moto2 = "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=400&h=300&fit=crop";
const moto3 = "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=400&h=300&fit=crop";

// Animation variants for sections
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

// Animation for cards with stagger
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

// Floating animation for hero elements
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

// Scroll indicator animation
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

function HomeContent() {
  const [heroRef] = useInView({ threshold: 0.3, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [modelsRef, modelsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [testimonialsRef, testimonialsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const features = [
    { 
      icon: Leaf, 
      title: "Sustentabilidade", 
      text: "Nossas motos elétricas são 100% ecológicas, reduzindo sua pegada de carbono e contribuindo para um futuro mais limpo." 
    },
    { 
      icon: Zap, 
      title: "Performance", 
      text: "Aceleração instantânea e potência excepcional para uma experiência de pilotagem única e emocionante." 
    },
    { 
      icon: Palette, 
      title: "Design Moderno", 
      text: "Estilo inovador que combina tecnologia avançada e estética contemporânea para destacar você na estrada." 
    },
  ];

  const models = [
    { 
      img: moto3, 
      title: "Modelo Volt", 
      text: "Perfeito para a cidade, com autonomia de até 150 km e design compacto.", 
      href: "#volt" 
    },
    { 
      img: moto3, 
      title: "Modelo Spark", 
      text: "Alta performance para aventuras urbanas e além, com tecnologia de ponta.", 
      href: "#spark" 
    },
    { 
      img: moto3, 
      title: "Modelo Thunder", 
      text: "Potência máxima para os amantes de velocidade e adrenalina.", 
      href: "#thunder" 
    },
    { 
      img: moto3, 
      title: "Modelo Storm", 
      text: "Edição limitada com recursos premium e design exclusivo.", 
      href: "#storm" 
    },
  ];

  const testimonials = [
    { 
      quote: "A LYS-30 mudou minha rotina! Economia e sustentabilidade em perfeita harmonia.", 
      name: "Janaina Soares",
      role: "Fisioterapeuta"
    },
    { 
      quote: "Performance incrível nas estradas! A Falcão 86 superou todas as minhas expectativas. ", 
      name: "Telma Teixeira",
      role: "Educadora Física"
    },
    { 
      quote: "Design único e sustentável. Recebo elogios onde quer que eu vá com minha Falcão 86.", 
      name: "Kayo Nascimento",
      role: "Professor"
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
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0" 
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238ec54d' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="z-10 w-full mx-auto text-center">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8 sm:mb-12 lg:mb-16"
          >
            <motion.img
              src={formatoImg}
              className="mt-18 w-96 sm:w-80 md:w-96 lg:w-[46rem] max-w-full h-auto mx-auto cursor-pointer transition-all duration-500 ease-in-out hover:drop-shadow-2xl"
              alt="Logo Formato Motos"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              whileHover={{ 
                scale: 1.05,
                filter: "drop-shadow(0 0 30px rgba(142, 197, 77, 0.5))"
              }}
            />
          </motion.div>

          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-white via-[#8ec54d] to-white bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            O Futuro da Mobilidade
          </motion.h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl lg:text-2xl mb-8 sm:mb-10 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            Descubra a liberdade das motos elétricas de alta performance
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <motion.a
              href="#modelos"
              className="inline-block bg-gradient-to-r from-[#8ec54d] to-[#6f9e3c] text-white font-bold py-4 px-8 sm:px-10 rounded-full hover:from-[#6f9e3c] hover:to-[#5a7d30] transition-all duration-300 ease-in-out shadow-lg hover:shadow-2xl hover:text-white text-base sm:text-lg sm:w-auto text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(142, 197, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Nossos Modelos
            </motion.a>
            
            <motion.a
              href="#explore"
              className="inline-block border-2 border-[#8ec54d] text-[#8ec54d] font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-[#8ec54d] hover:text-white transition-all duration-300 ease-in-out text-base sm:text-lg sm:w-auto text-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(142, 197, 77, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={scrollIndicatorVariants}
            animate="animate"
            className="absolute  bottom-24 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[#8ec54d]" />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="explore"
        ref={featuresRef}
        className="w-full"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="bg-gradient-to-br from-[#8ec54d] via-[#7fb045] to-[#8ec54d] w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-white"
              variants={cardVariants}
            >
              Por que escolher a Formato Motos?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-center mb-12 sm:mb-16 text-white/90 max-w-3xl mx-auto"
              variants={cardVariants}
            >
              Inovação, sustentabilidade e performance se encontram em cada uma de nossas motos elétricas
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {features.map((item, index) => {
                const IconComponent = item.icon;
                return (
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

      {/* Models Section */}
      <motion.section
        id="modelos"
        ref={modelsRef}
        className="bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] py-16 sm:py-20 lg:py-24 w-full relative"
        initial="hidden"
        animate={modelsInView ? "visible" : "hidden"}
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

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div className="text-center mb-12 sm:mb-16" variants={cardVariants}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white">
              Mais Vendidas
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
              Descubra nossa linha premium de motos elétricas, cada uma projetada para diferentes estilos de vida
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {models.map((model, index) => (
              <motion.div
                key={index}
                className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(142, 197, 77, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative h-48 sm:h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <motion.img
                    src={model.img}
                    alt={model.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    whileHover={{ scale: 1.1 }}
                  />
                </div>
                
                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3 text-[#0d2a2c] group-hover:text-[#8ec54d] transition-colors duration-300">
                    {model.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                    {model.text}
                  </p>
                  <motion.a 
                    href={model.href} 
                    className="inline-flex items-center text-[#8ec54d] hover:text-[#6f9e3c] font-semibold text-base group-hover:underline transition-all duration-300"
                    whileHover={{ x: 5 }}
                  >
                    Saiba Mais →
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        ref={testimonialsRef}
        className="py-16 sm:py-20 lg:py-24 w-full bg-gradient-to-br from-[#8ec54d] via-[#7fb045] to-[#8ec54d]"
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
            variants={cardVariants}
          >
            O que dizem nossos clientes
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl mb-12 sm:mb-16 text-white/90 max-w-3xl mx-auto"
            variants={cardVariants}
          >
            Histórias reais de quem já faz parte da revolução elétrica
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
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
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#8ec54d] fill-current" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-gray-700 mb-6 italic leading-relaxed">
                  &quot;{testimonial.quote}&quot;
                </p>
                <div className="border-t border-gray-200 pt-6">
                  <p className="text-lg font-bold text-[#0d2a2c] mb-1">{testimonial.name}</p>
                  <p className="text-[#8ec54d] font-semibold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] text-white py-16 sm:py-20 lg:py-24 w-full relative"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#8ec54d] rounded-full opacity-10 blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#8ec54d] rounded-full opacity-10 blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
            variants={cardVariants}
          >
            Pronto para a Revolução Elétrica?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-gray-300 leading-relaxed"
            variants={cardVariants}
          >
            Junte-se à comunidade Formato Motos e experimente o futuro da mobilidade urbana sustentável
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
              href="https://wa.me/35988004965?text=Ol%C3%A1,%20vi%20a%20moto%20no%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20as%20especifica%C3%A7%C3%B5es,%20pre%C3%A7o%20e%20condi%C3%A7%C3%B5es.%20Poderiam%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?"
              className="inline-flex items-center gap-2 border-2 border-[#8ec54d] text-[#8ec54d] font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-[#8ec54d] hover:text-white transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(142, 197, 77, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              (35) 98800-4965
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default HomeContent;