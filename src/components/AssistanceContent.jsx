import { motion } from "framer-motion";
import { Wrench, Clock, Phone } from "lucide-react";

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

function AssistanceContent() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <motion.section
        className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] text-white py-28 md:py-36 w-full"
        animate={{
          background: [
            "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 100%)",
            "linear-gradient(135deg, #1a1a1a 0%, #0d2a2c 100%)",
            "linear-gradient(135deg, #0d2a2c 0%, #1a1a1a 100%)",
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Assistência Formato Motos
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-10 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Suporte técnico especializado para sua moto elétrica
          </motion.p>
          <motion.a
            href="#contact"
            className="inline-block bg-[#8ec54d] text-black font-semibold py-4 px-10 rounded-2xl shadow-lg hover:bg-[#6f9e3c] transition-transform duration-200 ease-in-out text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Agendar Assistência
          </motion.a>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="w-full py-20 bg-[#8ec54d]"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 max-w-7xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 text-[#0d2a2c]">
            Nossos Serviços de Assistência
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { title: "Manutenção Preventiva", text: "Revisões regulares para garantir o desempenho ideal da sua moto.", icon: <Wrench className="w-14 h-14 mx-auto mb-6 text-[#8ec54d]" /> },
              { title: "Suporte 24/7", text: "Atendimento rápido e eficiente a qualquer hora do dia.", icon: <Clock className="w-14 h-14 mx-auto mb-6 text-[#8ec54d]" /> },
              { title: "Reparos Especializados", text: "Técnicos capacitados para resolver qualquer problema técnico.", icon: <Phone className="w-14 h-14 mx-auto mb-6 text-[#8ec54d]" /> },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 p-8 rounded-2xl shadow-md text-center border border-gray-200"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {item.icon}
                <h3 className="text-xl md:text-2xl font-semibold mb-4 text-[#0d2a2c]">{item.title}</h3>
                <p className="text-gray-600 text-base md:text-lg">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-[#0d2a2c] text-white py-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={sectionVariants}
      >
        <div className="container mx-auto px-6 text-center max-w-3xl">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Precisa de Assistência?</h2>
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Nossa equipe está pronta para ajudar com qualquer necessidade da sua moto elétrica.
          </p>
          <motion.a
            href="#contact"
            className="inline-block bg-[#8ec54d] text-black font-semibold py-4 px-10 rounded-2xl shadow-lg hover:bg-[#6f9e3c] transition-transform duration-200 text-lg"
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

export default AssistanceContent;
