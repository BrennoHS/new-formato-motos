import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { 
  Zap, 
  Battery, 
  Gauge, 
  MapPin, 
  Clock, 
  Shield, 
  Star,
  Phone,
  Mail,
  ArrowRight,
  Filter,
  ChevronDown
} from "lucide-react";

// Mock images for motorcycles (you can replace these with actual images)
const motoImages = {
  volt: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  spark: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop", 
  thunder: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  storm: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  eco: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  turbo: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop"
};

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
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [modelsRef, modelsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [specsRef, specsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  const models = [
    {
      id: "eco",
      name: "Formato Eco",
      category: "Básica",
      price: "R$ 9.990",
      image: motoImages.eco,
      description: "Perfeita para iniciantes, econômica e confiável para o dia a dia urbano.",
      specs: {
        autonomia: "80 km",
        velocidade: "45 km/h",
        bateria: "48V 20Ah",
        tempo_carga: "4-6h",
        peso: "65 kg"
      },
      features: ["Freios a disco", "LED completo", "Painel digital", "Garantia 2 anos"],
      highlight: false
    },
    {
      id: "volt",
      name: "Formato Volt",
      category: "Urbana",
      price: "R$ 12.990",
      image: motoImages.volt,
      description: "Ideal para mobilidade urbana com design moderno e tecnologia avançada.",
      specs: {
        autonomia: "150 km",
        velocidade: "65 km/h",
        bateria: "60V 32Ah",
        tempo_carga: "6-8h",
        peso: "75 kg"
      },
      features: ["Sistema de frenagem CBS", "Conectividade Bluetooth", "App móvel", "Carregador inteligente"],
      highlight: true
    },
    {
      id: "spark",
      name: "Formato Spark",
      category: "Performance",
      price: "R$ 18.990",
      image: motoImages.spark,
      description: "Alta performance para aventuras urbanas com tecnologia de ponta.",
      specs: {
        autonomia: "180 km",
        velocidade: "80 km/h",
        bateria: "72V 40Ah",
        tempo_carga: "6-8h",
        peso: "85 kg"
      },
      features: ["Modo esportivo", "Suspensão ajustável", "Freios ABS", "Painel TFT colorido"],
      highlight: false
    },
    {
      id: "thunder",
      name: "Formato Thunder",
      category: "Alta Performance",
      price: "R$ 24.990",
      image: motoImages.thunder,
      description: "Potência máxima para os amantes de velocidade e adrenalina.",
      specs: {
        autonomia: "200 km",
        velocidade: "100 km/h",
        bateria: "72V 50Ah",
        tempo_carga: "8-10h",
        peso: "95 kg"
      },
      features: ["Motor de alta potência", "Modos de pilotagem", "Sistema de navegação", "Carregamento rápido"],
      highlight: false
    },
    {
      id: "turbo",
      name: "Formato Turbo",
      category: "Esportiva",
      price: "R$ 28.990",
      image: motoImages.turbo,
      description: "Design esportivo agressivo com performance de alto nível.",
      specs: {
        autonomia: "220 km",
        velocidade: "120 km/h",
        bateria: "84V 60Ah",
        tempo_carga: "8-10h",
        peso: "105 kg"
      },
      features: ["Chassi esportivo", "Pneus de alta performance", "Sistema de telemetria", "Controle de tração"],
      highlight: false
    },
    {
      id: "storm",
      name: "Formato Storm",
      category: "Premium",
      price: "R$ 32.990",
      image: motoImages.storm,
      description: "Edição limitada com recursos premium e design exclusivo.",
      specs: {
        autonomia: "250 km",
        velocidade: "130 km/h",
        bateria: "84V 70Ah",
        tempo_carga: "10-12h",
        peso: "110 kg"
      },
      features: ["Acabamento premium", "Sistema de som", "Conectividade 5G", "Assistente virtual"],
      highlight: true
    }
  ];

  const categories = ["Todas", "Básica", "Urbana", "Performance", "Alta Performance", "Esportiva", "Premium"];

  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] text-white min-h-[100vh] flex items-center justify-center w-full"
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

        <div className="z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={floatingVariants}
            animate="animate"
            className="mb-8"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-[#8ec54d] to-white bg-clip-text text-transparent leading-tight"
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
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Battery className="w-5 h-5 text-[#8ec54d]" />
              <span className="text-sm font-medium">100% Elétrica</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Shield className="w-5 h-5 text-[#8ec54d]" />
              <span className="text-sm font-medium">Garantia Estendida</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Zap className="w-5 h-5 text-[#8ec54d]" />
              <span className="text-sm font-medium">Zero Emissão</span>
            </div>
          </motion.div>
        </div>
      </motion.section>


      {/* Models Grid */}
      <motion.section
        ref={modelsRef}
        className="py-16 sm:py-20 lg:py-24 bg-[#1a1a1a]"
        initial="hidden"
        animate={modelsInView ? "visible" : "hidden"}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
            {models.map((model, index) => (
              <motion.div
                key={model.id}
                className={`bg-white rounded-2xl shadow-xl overflow-hidden group relative ${
                  model.highlight ? 'ring-2 ring-[#8ec54d]' : ''
                }`}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(142, 197, 77, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                {model.highlight && (
                  <div className="absolute top-4 left-4 z-10 bg-[#8ec54d] text-white px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                    <Star className="w-4 h-4 fill-current" />
                    Destaque
                  </div>
                )}

                <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                  <motion.img
                    src={model.image}
                    alt={model.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0d2a2c] px-3 py-1 rounded-full text-lg font-bold">
                    {model.price}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-[#8ec54d] text-white px-3 py-1 rounded-full text-sm font-medium">
                    {model.category}
                  </div>
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-2xl font-bold mb-3 text-[#0d2a2c] group-hover:text-[#8ec54d] transition-colors duration-300">
                    {model.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {model.description}
                  </p>

                  {/* Quick Specs */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#8ec54d]" />
                      <span className="text-sm text-gray-600">{model.specs.autonomia}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="w-4 h-4 text-[#8ec54d]" />
                      <span className="text-sm text-gray-600">{model.specs.velocidade}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Battery className="w-4 h-4 text-[#8ec54d]" />
                      <span className="text-sm text-gray-600">{model.specs.bateria}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#8ec54d]" />
                      <span className="text-sm text-gray-600">{model.specs.tempo_carga}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-[#0d2a2c] mb-3">Principais recursos:</h4>
                    <div className="flex flex-wrap gap-2">
                      {model.features.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                      {model.features.length > 2 && (
                        <span className="text-[#8ec54d] text-sm font-medium">
                          +{model.features.length - 2} mais
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <motion.button 
                      className="flex-1 bg-[#8ec54d] text-white font-semibold py-3 px-4 rounded-xl hover:bg-[#6f9e3c] transition-all duration-300 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Ver Detalhes
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                    <motion.button 
                      className="border-2 border-[#8ec54d] text-[#8ec54d] font-semibold py-3 px-4 rounded-xl hover:bg-[#8ec54d] hover:text-white transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Test Drive
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>


      {/* Call to Action */}
      <motion.section
        className="relative bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] text-white text-white py-16 sm:py-20 lg:py-24"
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
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-[#8ec54d] font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center hover:text-black"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Solicitar Proposta
            </motion.a>
            
            <motion.a
              href="tel:+5511999999999"
              className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-white hover:text-[#8ec54d] transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
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