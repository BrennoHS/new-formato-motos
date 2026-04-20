import { useParams, Link } from "react-router-dom";
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
  ArrowRight,
} from "lucide-react";

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


function ModelDetails() {
  const { id } = useParams(); // Get model ID from URL
  const [specsRef] = useInView({ threshold: 0.2, triggerOnce: true });

  // Find the model by ID
  const model = models.find((m) => m.id === id);

  if (!model) {
    return (
      <main className="w-full overflow-hidden">
        <section className="min-h-[70vh] bg-gradient-to-br from-[#0f1716] via-[#172725] to-[#10201d] text-white flex items-center justify-center px-4">
          <div className="max-w-xl text-center">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">Modelo não encontrado</h1>
            <p className="text-gray-300 mb-8">
              O modelo solicitado não existe ou foi removido. Volte para a lista para escolher outra moto.
            </p>
            <Link
              to="/modelos"
              className="inline-flex items-center gap-2 btn-brand-primary font-semibold py-3 px-6 rounded-xl transition-colors duration-300"
            >
              Ver modelos
            </Link>
          </div>
        </section>
      </main>
    );
  }


  return (
    <main className="w-full overflow-hidden">

      {/* Detailed Specifications */}
      <motion.section
        ref={specsRef}
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0f1716] via-[#172725] to-[#10201d] relative"
        animate={{
          background: [
            "linear-gradient(135deg, #0f1716 0%, #172725 52%, #10201d 100%)",
            "linear-gradient(135deg, #10201d 0%, #172725 48%, #0f1716 100%)",
            "linear-gradient(135deg, #0f1716 0%, #172725 52%, #10201d 100%)",
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
                    className="btn-brand-primary px-4 py-2 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <motion.a
                  href={contactLinks.whatsappSales}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 btn-brand-primary font-semibold py-3 px-6 rounded-xl transition-all duration-300 flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Agendar Test Drive
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

export default ModelDetails;