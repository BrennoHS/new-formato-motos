import { useParams, Link } from "react-router-dom";
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
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

// Mock images for motorcycles (consistent with ModelsContent.jsx)
const motoImages = {
  volt: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  spark: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop", 
  thunder: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  storm: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  eco: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop",
  turbo: "https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&h=400&fit=crop"
};

// Animation variants consistent with ModelsContent.jsx
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

// Model data (same as in ModelsContent.jsx to ensure consistency)
const models = [
  {
    id: "eco",
    name: "Formato Eco",
    image: motoImages.eco,
    description: "Perfeita para iniciantes, econômica e confiável para o dia a dia urbano.",
    specs: {
      autonomia: "80 km",
      velocidade: "45 km/h",
      bateria: "48V 20Ah",
      tempo_carga: "4-6h",
      peso: "65 kg",
      motor: "500W",
      torque: "20 Nm",
      freios: "Disco dianteiro e traseiro",
    },
    features: ["Freios a disco", "LED completo", "Painel digital", "Garantia 2 anos"],
    highlight: false
  },
  {
    id: "volt",
    name: "Formato Volt",
    image: motoImages.volt,
    description: "Ideal para mobilidade urbana com design moderno e tecnologia avançada.",
    specs: {
      autonomia: "150 km",
      velocidade: "65 km/h",
      bateria: "60V 32Ah",
      tempo_carga: "6-8h",
      peso: "75 kg",
      motor: "1000W",
      torque: "30 Nm",
      freios: "CBS combinado",
    },
    features: ["Sistema de frenagem CBS", "Conectividade Bluetooth", "App móvel", "Carregador inteligente"],
    highlight: true
  },
  {
    id: "spark",
    name: "Formato Spark",
    image: motoImages.spark,
    description: "Alta performance para aventuras urbanas com tecnologia de ponta.",
    specs: {
      autonomia: "180 km",
      velocidade: "80 km/h",
      bateria: "72V 40Ah",
      tempo_carga: "6-8h",
      peso: "85 kg",
      motor: "1500W",
      torque: "40 Nm",
      freios: "ABS dianteiro e traseiro",
    },
    features: ["Modo esportivo", "Suspensão ajustável", "Freios ABS", "Painel TFT colorido"],
    highlight: false
  },
  {
    id: "thunder",
    name: "Formato Thunder",
    image: motoImages.thunder,
    description: "Potência máxima para os amantes de velocidade e adrenalina.",
    specs: {
      autonomia: "200 km",
      velocidade: "100 km/h",
      bateria: "72V 50Ah",
      tempo_carga: "8-10h",
      peso: "95 kg",
      motor: "2000W",
      torque: "50 Nm",
      freios: "ABS avançado",
    },
    features: ["Motor de alta potência", "Modos de pilotagem", "Sistema de navegação", "Carregamento rápido"],
    highlight: false
  },
  {
    id: "turbo",
    name: "Formato Turbo",
    image: motoImages.turbo,
    description: "Design esportivo agressivo com performance de alto nível.",
    specs: {
      autonomia: "220 km",
      velocidade: "120 km/h",
      bateria: "84V 60Ah",
      tempo_carga: "8-10h",
      peso: "105 kg",
      motor: "2500W",
      torque: "60 Nm",
      freios: "ABS esportivo",
    },
    features: ["Chassi esportivo", "Pneus de alta performance", "Sistema de telemetria", "Controle de tração"],
    highlight: false
  },
  {
    id: "storm",
    name: "Formato Storm",
    image: motoImages.storm,
    description: "Edição limitada com recursos premium e design exclusivo.",
    specs: {
      autonomia: "250 km",
      velocidade: "130 km/h",
      bateria: "84V 70Ah",
      tempo_carga: "10-12h",
      peso: "110 kg",
      motor: "3000W",
      torque: "70 Nm",
      freios: "ABS premium",
    },
    features: ["Acabamento premium", "Sistema de som", "Conectividade 5G", "Assistente virtual"],
    highlight: true
  }
];

function ModelDetails() {
  const { id } = useParams(); // Get model ID from URL
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [specsRef, specsInView] = useInView({ threshold: 0.2, triggerOnce: true });

  // Find the model by ID
  const model = models.find((m) => m.id === id);


  return (
    <main className="w-full overflow-hidden">

      {/* Detailed Specifications */}
      <motion.section
        ref={specsRef}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] relative"
        animate={{
          background: [
            "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 50%, #0d2a2c 100%)",
            "linear-gradient(135deg, #1a1a1a 0%, #0d2a2c 50%, #1a1a1a 100%)",
            "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 50%, #0d2a2c 100%)",
          ],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image Section */}
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-xl"
              variants={cardVariants}
            >
              <img
                src={model.image}
                alt={model.name}
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Specs and Features */}
            <motion.div variants={cardVariants}>
              <h2 className="text-3xl font-bold text-white mb-6">
                Especificações Técnicas
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Autonomia: {model.specs.autonomia}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Velocidade Máx: {model.specs.velocidade}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Battery className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Bateria: {model.specs.bateria}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Tempo de Carga: {model.specs.tempo_carga}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Peso: {model.specs.peso}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Motor: {model.specs.motor}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Gauge className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Torque: {model.specs.torque}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-[#8ec54d]" />
                  <span className="text-gray-200">Freios: {model.specs.freios}</span>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">Recursos</h3>
              <div className="flex flex-wrap gap-3 mb-8">
                {model.features.map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-[#8ec54d] text-white px-4 py-2 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <motion.button
                  onClick={() => window.open("https://wa.me/35988004965?text=Ol%C3%A1,%20vi%20a%20moto%20no%20site%20e%20tenho%20interesse%20em%20saber%20mais%20sobre%20as%20especifica%C3%A7%C3%B5es,%20pre%C3%A7o%20e%20condi%C3%A7%C3%B5es.%20Poderiam%20me%20enviar%20mais%20informa%C3%A7%C3%B5es?", "_blank")}
                  className="z-10 bg-[#8ec54d] text-white font-semibold py-3 px-6 rounded-xl hover:bg-[#6f9e3c] transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Test Drive
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default ModelDetails;