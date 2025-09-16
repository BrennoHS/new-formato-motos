import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import formatoImg from "../assets/formato.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const controlNavbar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollTop > lastScrollY && scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(scrollTop);
      setScrollPercent(scrollPercent);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2, ease: "easeIn" } },
  };

  const navItems = [
    { name: "Início", path: "/" },
    { name: "Sobre", path: "/sobre" },
    { name: "Modelos", path: "/modelos" },
    { name: "Assistência", path: "/assistencia" },
    { name: "Unidades", path: "/unidades" },
  ];

  return (
    <nav
      className={`
        bg-[#1a1a1a] text-white fixed w-full z-50 shadow-soft h-20 md:h-24
        transition-transform duration-500 ease-in-out
        ${isVisible ? "translate-y-0" : "-translate-y-full"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-full w-full">
        <Link to="/" className="text-2xl font-bold text-[#A3D068]">
          <motion.img
            src={formatoImg}
            className="h-16 md:h-20 w-auto object-contain cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-green-glow"
            alt="Logotipo Formato Motos"
            whileHover={{ scale: 1.05 }}
            loading="lazy"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-10 text-base font-medium items-center">
          {navItems.map((item, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
              <Link
                to={item.path}
                className={`relative hover:text-[#A3D068] transition-colors duration-200 focus:outline-none ${
                  location.pathname === item.path ? "text-[#A3D068] font-semibold" : ""
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#A3D068]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          <motion.a
            href="/contato"
            className="inline-block bg-[#6f9e3c] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#6F9E3C] hover:text-[#FAFAFA] transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contato
          </motion.a>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden hover:border-[#6F9E3C]"
          onClick={toggleMenu}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
        >
          <motion.div whileTap={{ scale: 0.9 }}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[#1a1a1a] px-6 pb-6 pt-4 space-y-4 text-center"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {navItems.map((item, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { delay: index * 0.1 } },
                }}
              >
                <Link
                  to={item.path}
                  onClick={toggleMenu}
                  className={`block text-lg py-2 hover:text-[#A3D068] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#A3D068] rounded ${
                    location.pathname === item.path ? "text-[#A3D068] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* barra de progresso do scroll */}
      <div className="fixed top-20 md:top-24 left-0 w-full h-1 bg-[#2a2a2a] z-50">
        <motion.div
          className="h-full bg-[#A3D068]"
          initial={{ width: 0 }}
          animate={{ width: `${scrollPercent}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </nav>
  );
}