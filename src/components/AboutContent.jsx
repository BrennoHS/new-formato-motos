import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';

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

export default function AboutContent() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c] text-white min-h-[100vh] flex items-center justify-center w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        animate={{
        background: [
        "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 50%, #0d2a2c 100%)",
        "linear-gradient(135deg, #1a1a1a 0%, #0d2a2c 50%, #1a1a1a 100%)",
        "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 50%, #0d2a2c 100%)",
          ],
        }}
      >
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
              variants={cardVariants}
            >
              Sobre a Formato Motos
            </motion.h1>
          </motion.div>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-8 text-gray-300 max-w-4xl mx-auto leading-relaxed"
            variants={cardVariants}
          >
            Somos uma empresa brasileira apaixonada por mobilidade elétrica, oferecendo scooters inovadoras, sustentáveis e acessíveis para transformar o jeito que você se move.
          </motion.p>
        </div>
      </motion.section>

      {/* Missão e Valores */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#8ec54d] via-[#7fb045] to-[#8ec54d] text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {[
              {
                title: "Nossa Missão",
                text: "Proporcionar liberdade de movimento com veículos elétricos de alta qualidade, sem necessidade de habilitação, promovendo um futuro mais verde e acessível para todos os brasileiros."
              },
              {
                title: "Nossos Valores",
                text: (
                  <ul className="list-disc list-inside text-white/90">
                    <li>Inovação: Tecnologia de ponta em cada scooter.</li>
                    <li>Sustentabilidade: Reduzir a pegada de carbono.</li>
                    <li>Qualidade: Até 2 anos de garantia em todos os modelos, com suporte excepcional.</li>
                    <li>Liderança: Líderes de mercado em Lavras, oferecendo mobilidade para todos.</li>
                  </ul>
                )
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden group relative"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  y: -10,
                  boxShadow: "0 25px 50px rgba(0, 0, 0, 0.2)"
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="p-6 sm:p-8">
                  <h2 className="text-2xl font-bold mb-3 text-white group-hover:text-[#0d2a2c] transition-colors duration-300">
                    {item.title}
                  </h2>
                  {typeof item.text === 'string' ? (
                    <p className="text-white/90 leading-relaxed">{item.text}</p>
                  ) : (
                    item.text
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Nossa História */}
      <motion.section
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#0d2a2c] via-[#1a1a1a] to-[#0d2a2c]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%238ec54d' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-6 sm:mb-8"
            variants={cardVariants}
          >
            Nossa História
          </motion.h2>
          <div className="relative border-l-4 border-[#8ec54d] pl-6">
            {[
              { year: "Março 2024 - Fundação", text: "Formato Motos nasce com a visão de revolucionar a mobilidade urbana em Lavras com scooters elétricas sustentáveis." },
              { year: "Setembro 2024 - Início das Entregas", text: "Iniciamos entregas em Lavras e região, oferecendo mobilidade acessível e ecológica." },
              { year: "Setembro 2025 - Liderança Local", text: "Em apenas 1 ano e 6 meses, nos tornamos líderes de mercado em Lavras, com modelos como X12 e MIA, e até 2 anos de garantia em todos os produtos." }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="mb-8 bg-white/10 backdrop-blur-sm p-4 rounded-xl"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(142, 197, 77, 0.15)"
                }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-xl font-semibold text-white mb-2">{event.year}</h3>
                <p className="text-gray-300 leading-relaxed">{event.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-gradient-to-br from-[#8ec54d] via-[#7fb045] to-[#8ec54d] text-white py-16 sm:py-20 lg:py-24"
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
            Junte-se à Revolução Elétrica
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl lg:text-2xl mb-8 sm:mb-12 text-white/90 leading-relaxed"
            variants={cardVariants}
          >
            Conheça nossos modelos ou entre em contato para entregas em Lavras e região!
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
            variants={cardVariants}
          >
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/modelos"
                className="inline-flex items-center gap-2 bg-white text-[#8ec54d] font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-2xl text-base sm:text-lg w-full sm:w-auto justify-center"
              >
                <Mail className="w-5 h-5" />
                Ver Modelos
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(255,255,255,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 border-2 border-white text-white font-bold py-4 px-8 sm:px-10 rounded-full hover:bg-white hover:text-[#8ec54d] transition-all duration-300 text-base sm:text-lg w-full sm:w-auto justify-center"
              >
                <Phone className="w-5 h-5" />
                Fale Conosco
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </main>
  );
}