import formatoImg from "../assets/formato.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { homeModels } from "../data/models";
import { companyInfo, contactLinks } from "../data/siteConfig";
import { ChevronDown, Zap, Leaf, Palette, Star, Phone, Mail } from "lucide-react";

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
        className="relative section-dark text-white hero-viewport flex items-center justify-center w-full"
      >
        <div className="hero-premium-bg">
          <div className="hero-premium-grid" />
          <div className="hero-premium-orb hero-premium-orb-a" />
          <div className="hero-premium-orb hero-premium-orb-b" />
          <div className="hero-premium-orb hero-premium-orb-c" />
          <div className="hero-premium-vignette" />
        </div>

        <div className="hero-compact z-10 w-full mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center">

          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-7"
          >
            <motion.img
              src={formatoImg}
              className="hero-logo w-[clamp(23rem,92vw,62rem)] h-auto mx-auto"
              alt="Logo Formato Motos"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              style={{ filter: "drop-shadow(0 0 28px rgba(142, 197, 77, 0.45))" }}
            />
          </motion.div>

          <motion.h1
            className="text-[1.5rem] sm:text-[1.95rem] md:text-[2.35rem] font-bold leading-[1.08]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            O Futuro da Mobilidade
            <span className="block hero-title-premium">
              com presença e elegância
            </span>
          </motion.h1>

          <motion.p
            className="mt-3 text-[0.8rem] sm:text-[0.88rem] text-[#c8d4d1] max-w-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            Descubra motos elétricas de alta performance com design refinado, baixo custo operacional e tecnologia que valoriza cada trajeto.
          </motion.p>

          <div className="hero-secondary-chips mt-3 flex flex-wrap items-center justify-center gap-2 text-[0.64rem] sm:text-[0.68rem] text-[#c6d8d3]">
            <span className="rounded-full border border-white/20 px-3 py-1">Autonomia até 250 km</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Garantia de 2 anos</span>
            <span className="rounded-full border border-white/20 px-3 py-1">Zero emissão</span>
          </div>

          <motion.div
            className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.div
              whileHover={{
                scale: 1.03,
                boxShadow: "0 20px 38px rgba(142, 197, 77, 0.22)"
              }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                to="/modelos"
                className="inline-block btn-brand-primary font-bold py-2.5 px-5 rounded-full transition-all duration-300 text-xs sm:text-sm text-center"
              >
                Explore Nossos Modelos
              </Link>
            </motion.div>

            <motion.a
              href="#explore"
              className="inline-block btn-brand-secondary font-bold py-2.5 px-5 rounded-full transition-all duration-300 text-xs sm:text-sm text-center"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              Saiba Mais
            </motion.a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={scrollIndicatorVariants}
            animate="animate"
            className="hero-scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDown className="w-8 h-8 text-[#8ec54d]" />
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="explore"
        ref={featuresRef}
        className="w-full section-light viewport-section"
        initial="hidden"
        animate={featuresInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="max-w-7xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-4 text-brand-strong"
              variants={cardVariants}
            >
              Por que escolher a Formato Motos?
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-center mb-12 sm:mb-16 text-brand-soft max-w-3xl mx-auto"
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
                    className="surface-glass p-8 sm:p-10 rounded-2xl text-center group"
                    variants={cardVariants}
                    whileHover={{ 
                      y: -8,
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

      {/* Models Section */}
      <motion.section
        id="modelos"
        ref={modelsRef}
        className="section-dark py-16 sm:py-20 lg:py-24 w-full relative"
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
            {homeModels.map((model, index) => (
              <motion.div
                key={index}
                className="surface-glass rounded-2xl overflow-hidden group"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 45px rgba(16, 30, 28, 0.34)"
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
                    className="inline-flex items-center text-[#5d7c39] hover:text-[#45602a] font-semibold text-base group-hover:underline transition-all duration-300"
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
        className="py-16 sm:py-20 lg:py-24 w-full section-light"
        initial="hidden"
        animate={testimonialsInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-brand-strong"
            variants={cardVariants}
          >
            O que dizem nossos clientes
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl mb-12 sm:mb-16 text-brand-soft max-w-3xl mx-auto"
            variants={cardVariants}
          >
            Histórias reais de quem já faz parte da revolução elétrica
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="surface-glass p-8 sm:p-10 rounded-2xl text-center group"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(15, 32, 29, 0.14)"
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
                  <p className="text-[#5d7c39] font-semibold">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="section-dark text-white py-16 sm:py-20 lg:py-24 w-full relative section-micro"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
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
              href={contactLinks.mailSales}
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
              href={contactLinks.whatsappSales}
              className="inline-flex items-center gap-2 btn-brand-secondary font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(142, 197, 77, 0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5" />
              {companyInfo.phoneDisplay}
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default HomeContent;