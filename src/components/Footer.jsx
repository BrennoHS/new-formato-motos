import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Instagram, Facebook } from "lucide-react";
import formatoImg from "../assets/formato.png";
import { companyInfo, socialLinks } from "../data/siteConfig";

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
      className="section-dark text-white pt-16 pb-10 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={footerVariants}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
        {/* Logo and Description */}
        <motion.div variants={footerVariants} className="md:col-span-5">
          <Link to="/" className="flex items-center mb-4">
            <img
              src={formatoImg}
              className="h-20 w-auto object-contain cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-green-glow"
              alt="Logotipo Formato Motos"
              loading="lazy"
            />
          </Link>
          <p className="text-sm text-[#bfd0ca] max-w-sm leading-relaxed">
            Formato Motos: liderando a revolução da mobilidade elétrica com sustentabilidade e performance. <br /> <br />
            CNPJ {companyInfo.cnpj} <br />
            {companyInfo.email} <br />
            {companyInfo.phoneDisplay} <br />
            {companyInfo.address}
          </p>
        </motion.div>

        {/* Navigation Links */}
        <motion.div variants={footerVariants} className="md:col-span-3">
          <h3 className="text-lg font-semibold text-[#d4e8b4] mb-4">Navegação</h3>
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
                  className="text-[#bfd0ca] hover:text-[#e1efcc] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a8d376] rounded"
                  aria-label={`Navegar para ${item.name}`}
                >
                  {item.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Newsletter and Social Media */}
        <motion.div variants={footerVariants} className="md:col-span-4">
          <h3 className="text-lg font-semibold text-[#d4e8b4] mb-4">Fique Conectado</h3>
          <p className="text-sm text-[#bfd0ca] mb-4">Siga nossos canais para novidades, lançamentos e ofertas.</p>
          <div className="flex space-x-4">
            {[
              { icon: Instagram, href: socialLinks.instagram, label: "Instagram" },
              { icon: Facebook, href: socialLinks.facebook, label: "Facebook" },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center text-[#bfd0ca] hover:text-[#e1efcc] hover:border-[#a8d376]/55 transition-colors duration-200"
                whileHover={{ scale: 1.08 }}
                aria-label={`Visite nosso ${social.label}`}
              >
                <social.icon size={24} />
              </motion.a>
            ))}
          </div>
        </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        className="max-w-7xl mx-auto mt-10 pt-6 px-4 md:px-8 border-t border-white/10 text-center text-sm text-[#93aaa3]"
        variants={footerVariants}
      >
        <p>&copy; {new Date().getFullYear()}  Formato Motos. Todos os direitos reservados.</p>
      </motion.div>
    </motion.footer>
  );
}

export default Footer;