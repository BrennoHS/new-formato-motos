import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";
import formatoImg from "../assets/formato.png";

// Animation variants
const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: "easeOut" } },
};

function Footer() {
  return (
    <motion.footer
      className="bg-[#1a1a1a] text-white py-12 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <motion.div variants={footerVariants}>
          <Link to="/" className="flex items-center mb-4">
            <img
              src={formatoImg}
              className="h-24 w-auto object-contain cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-green-glow"
              alt="Logotipo Formato Motos"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-gray-400 max-w-xs">
            Formato Motos: liderando a revolução da mobilidade elétrica com sustentabilidade e performance. <br /> <br />
            CNPJ 03.399.208/0001-13 <br />
            formatomotos@gmail.com <br />
            (35) 98800-4965 <br />
            R. Dr. Melo Viana, 11 - Santa Teresinha, Lavras - MG, 37200-000
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={footerVariants}>
          <h3 className="text-lg font-semibold text-[#A3D068] mb-4 pt-6">Navegação</h3>
          <ul className="space-y-2">
            {[
              { name: "Início", path: "/" },
              { name: "Sobre", path: "/sobre" },
              { name: "Modelos", path: "/modelos" },
              { name: "Assistência", path: "/assistencia" },
              { name: "Unidade", path: "/unidades" },
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={linkVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-[#A3D068] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A3D068] rounded"
                  aria-label={`Navegar para ${item.name}`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter and Social Media */}
        <motion.div variants={footerVariants}>
          <h3 className="text-lg font-semibold text-[#A3D068] mb-4 pt-6">Fique Conectado</h3>
          <div className="mb-6">
            <label htmlFor="newsletter" className="block text-sm text-gray-400 mb-2">
              Inscreva-se na nossa newsletter
            </label>
            <div className="flex items-center gap-2">
              <input
                id="newsletter"
                type="email"
                placeholder="Seu e-mail"
                className="bg-[#2a2a2a] text-white px-4 py-2 rounded-lg w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-[#A3D068]"
                aria-label="Insira seu e-mail para a newsletter"
              />
              <motion.button
                className="bg-[#A3D068] text-black p-2 rounded-lg hover:bg-[#6F9E3C] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Inscrever-se na newsletter"
              >
                <Mail size={20} />
              </motion.button>
            </div>
          </div>
          <div className="flex space-x-4">
            {[
              { icon: Instagram, href: "https://www.instagram.com/formatomotos/?hl=pt", label: "Instagram" },
              { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100054224751885", label: "Facebook" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#A3D068] transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
                aria-label={`Visite nosso ${social.label}`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="mt-8 pt-8 h-[2vh] border-t border-gray-700 text-center text-sm text-gray-400"
        variants={footerVariants}
      >
        <p>&copy; {new Date().getFullYear()}  Formato Motos. Todos os direitos reservados.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;