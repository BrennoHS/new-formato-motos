import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Animation variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Animation for cards
const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function AboutContent() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] text-white py-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        animate={{
        background: [
        "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 100%)",
        "linear-gradient(135deg, #1a1a1a 0%, #0d2a2c 100%)",
        "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 100%)",
    ],
  }}
  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="text-center px-4 sm:px-6 lg:px-40">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-[#8ec54d] mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Sobre a Formato Motos
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Somos uma empresa brasileira apaixonada por mobilidade elétrica, oferecendo scooters inovadoras, sustentáveis e acessíveis para transformar o jeito que você se move.
          </motion.p>
        </div>
      </motion.section>

      {/* Missão e Valores */}
      <motion.section
        className="bg-[#8ec54d] py-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 sm:px-6 lg:px-40 container mx-auto">
          {[
            {
              title: "Nossa Missão",
              text: "Proporcionar liberdade de movimento com veículos elétricos de alta qualidade, sem necessidade de habilitação, promovendo um futuro mais verde e acessível para todos os brasileiros."
            },
            {
              title: "Nossos Valores",
              text: (
                <ul className="list-disc list-inside text-gray-600">
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
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-semibold text-[#8ec54d] mb-4">{item.title}</h2>
              {typeof item.text === 'string' ? (
                <p className="text-gray-600">{item.text}</p>
              ) : (
                item.text
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Nossa História */}
      <motion.section
        className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] py-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
        animate={{
        background: [
        "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 100%)",
        "linear-gradient(135deg, #1a1a1a 0%, #0d2a2c 100%)",
        "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 100%)",
    ],
  }}
  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-40">
          <h2 className="text-3xl font-bold text-center text-white mb-6">Nossa História</h2>
          <div className="relative border-l-4 border-[#8ec54d] pl-6">
            {[
              { year: "Março 2024 - Fundação", text: "Formato Motos nasce com a visão de revolucionar a mobilidade urbana em Lavras com scooters elétricas sustentáveis." },
              { year: "Setembro 2024 - Início das Entregas", text: "Iniciamos entregas em Lavras e região, oferecendo mobilidade acessível e ecológica." },
              { year: "Setembro 2025 - Liderança Local", text: "Em apenas 1 ano e 6 meses, nos tornamos líderes de mercado em Lavras, com modelos como X12 e MIA, e até 2 anos de garantia em todos os produtos." }
            ].map((event, index) => (
              <motion.div
                key={index}
                className="mb-8"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-white">{event.year}</h3>
                <p className="text-gray-300">{event.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-[#8ec54d] py-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="text-center px-4 sm:px-6 lg:px-40">
          <h2 className="text-2xl font-semibold text-white mb-4">Junte-se à Revolução Elétrica</h2>
          <p className="text-gray-600 mb-6">Conheça nossos modelos ou entre em contato para entregas em Lavras e região!</p>
          <div className="flex justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/modelos"
                className="bg-white text-[#8ec54d] px-6 py-3 rounded-lg font-semibold hover:bg-[#fafafa] transition-colors"
              >
                Ver Modelos
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contato"
                className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#8ec54d] transition-colors"
              >
                Fale Conosco
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </main>
  );
}