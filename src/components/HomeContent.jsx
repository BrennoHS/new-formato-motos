import formatoImg from "../assets/formato.png";
import moto1 from "../assets/motos/moto1.png";
import moto2 from "../assets/motos/moto2.png";
import moto3 from "../assets/motos/moto3.png";
import { motion } from "framer-motion";

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

function HomeContent() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] text-white py-20 w-full h-full"
      >
        <div className="w-full px-4 text-center">
          <motion.img
            src={formatoImg}
            className="w-128 max-w-full h-auto mx-auto mb-16 cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-green-glow hover:scale-105"
            alt="Logo Formato Motos"
            whileHover={{ scale: 1.05}}
            transition={{ duration: 0.1 }}
          />
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Descubra a liberdade das motos elétricas de alta performance
          </motion.p>
          <motion.a
            href="#explore"
            className="inline-block bg-[#8ec54d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6f9e3c] hover:text-white transition-transform duration-200 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Nossos Modelos
          </motion.a>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="explore"
        className="w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="bg-[#8ec54d] w-full px-4 py-8">
          <h2 className=" text-3xl font-bold text-center mb-6">Por que escolher a Formato Motos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 container mx-auto">
            {[
              { title: "Sustentabilidade", text: "Nossas motos elétricas são 100% ecológicas, reduzindo sua pegada de carbono." },
              { title: "Performance", text: "Aceleração instantânea e potência para uma experiência de pilotagem única." },
              { title: "Design Moderno", text: "Estilo inovador que combina tecnologia e estética para destacar você na estrada." },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 text-[#8ec54d]">{item.title}</h3>
                <p className="text-gray-600 text-center">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Models Section */}
      <motion.section
        className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] py-8 pb-32 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Mais vendidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { img: moto1, title: "Modelo Volt", text: "Perfeito para a cidade, com autonomia de até 150 km.", href: "#volt" },
              { img: moto2, title: "Modelo Spark", text: "Alta performance para aventuras urbanas e além.", href: "#spark" },
              { img: moto3, title: "Modelo Thunder", text: "Potência máxima para os amantes de velocidade.", href: "#thunder" },
            ].map((model, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="h-76 bg-gray-300 flex items-center justify-center aspect-[3/2]">
                  <a href={model.href}>
                    <img
                      src={model.img}
                      alt={model.title}
                      className="w-full h-full object-cover hover:opacity-90 transition-all duration-300 ease-in-out"
                    />
                  </a>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-[#8ec54d]">{model.title}</h3>
                  <p className="text-gray-600 mb-4">{model.text}</p>
                  <a href={model.href} className="text-[#8ec54d] hover:underline hover:text-[#6f9e3c]">
                    Saiba Mais
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="py-8 w-full bg-[#8ec54d]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="w-full px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 container mx-auto">
            {[
              { quote: "A Volt mudou minha rotina urbana!", name: "João Silva" },
              { quote: "Performance incrível nas estradas!", name: "Maria Oliveira" },
              { quote: "Design único e sustentável.", name: "Pedro Santos" },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-white p-10 rounded-lg shadow-lg text-center"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-lg text-gray-700 mb-4">"{testimonial.quote}"</p>
                <p className="text-md text-[#8ec54d] font-semibold">{testimonial.name} ★★★★★</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Call to Action */}
      <motion.section
        className="bg-[#1a1a1a] text-white py-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="w-full px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para a Revolução Elétrica?</h2>
          <p className="text-lg mb-8">Junte-se à comunidade Formato Motos e experimente o futuro da mobilidade.</p>
          <motion.a
            href="#contact"
            className="inline-block bg-[#8ec54d] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#6f9e3c] hover:text-[#fafafa] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Entre em Contato
          </motion.a>
        </div>
      </motion.section>
    </main>
  );
}

export default HomeContent;