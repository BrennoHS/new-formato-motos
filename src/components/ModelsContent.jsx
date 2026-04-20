import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { models } from "../data/models";
import { contactLinks } from "../data/siteConfig";
import { 
  Zap, 
  Battery, 
  Gauge, 
  MapPin, 
  Clock, 
  Shield, 
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

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

function Models() {
  const [heroRef] = useInView({ threshold: 0.3, triggerOnce: true });
  const [modelsRef] = useInView({ threshold: 0.1, triggerOnce: true });

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

        <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-8">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 hero-title-premium leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Nossos Modelos
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Descubra a linha completa de motos elétricas Formato. Cada modelo foi desenvolvido para atender diferentes necessidades e estilos de vida.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <div className="surface-glass-dark flex items-center gap-2 px-4 py-2 rounded-full">
              <Battery className="w-5 h-5 text-[#8ec54d]" />
              <span className="text-sm font-medium">100% Elétrica</span>
            </div>
            <div className="surface-glass-dark flex items-center gap-2 px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#8ec54d]" />
              <span className="text-sm font-medium">Garantia Estendida</span>
            </div>
            <div className="surface-glass-dark flex items-center gap-2 px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-[#8ec54d]" />
              <span className="text-sm font-medium">Zero Emissão</span>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <span>
        <div className="w-full brand-divider h-1"></div>
      </span>
      
      {/* Models Grid */}
      <motion.section
        ref={modelsRef}
        className="py-16 sm:py-20 lg:py-24 section-dark relative"
      >
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M50 5L90 25L90 75L50 95L10 75L10 25Z' fill='none' stroke='%238ec54d' stroke-width='1'/%3E%3C/svg%3E")`
            }}
          ></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {models.map((model) => (
              <motion.div
                key={model.id}
                className="surface-glass rounded-2xl overflow-hidden group relative"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0 20px 42px rgba(16, 30, 28, 0.34)"
                }}
                transition={{ duration: 0.3 }}
              >

                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <motion.img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#0d2a2c] group-hover:text-[#5d7c39] transition-colors duration-300">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#5d7c39]" />
                      <span className="text-sm text-gray-600">{model.specs.autonomia}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#5d7c39]" />
                      <span className="text-sm text-gray-600">{model.specs.velocidade}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-[#5d7c39]" />
                      <span className="text-sm text-gray-600">{model.specs.bateria}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#5d7c39]" />
                      <span className="text-sm text-gray-600">{model.specs.tempo_carga}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6 min-h-[85px] max-h-[85px]">
                    <h4 className="font-semibold text-[#0d2a2c] mb-3">Principais recursos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                      {model.features.length > 2 && (
                        <span className="text-[#5d7c39] text-sm font-medium">
                          +{model.features.length - 2} recursos
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Link
                      to={`/modelos/${model.id}`}
                      className="flex-1 btn-brand-primary font-semibold py-3 px-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Call to Action */}
      <motion.section
        className="relative section-dark text-white section-micro flex items-center justify-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8"
            variants={cardVariants}
          >
            Encontrou Seu Modelo Ideal?
          </motion.h2>
          <motion.p 
            className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-white/90 leading-relaxed"
            variants={cardVariants}
          >
            Entre em contato conosco para agendar um test drive ou esclarecer suas dúvidas. Nossa equipe está pronta para ajudar você a escolher a moto elétrica perfeita.
          </motion.p>
          
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={cardVariants}
          >
            <motion.a
              href={contactLinks.mailProposal}
              className="inline-flex items-center gap-2 btn-brand-primary font-bold py-4 px-8 sm:px-10 rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(142, 197, 77, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Solicitar Proposta
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
              Agendar Test Drive
            </motion.a>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}

export default Models;