import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import formatoImg from "../assets/formato.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const [scrollPercent, setScrollPercent] = useState(0);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const controlNavbar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const nextScrollPercent = docHeight > 0
        ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100))
        : 0;

      if (scrollTop > lastScrollYRef.current && scrollTop > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = scrollTop;
      setScrollPercent(nextScrollPercent);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

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
    <>
      <nav
        className={`
          text-white fixed w-full z-50 h-20 md:h-24 px-3 md:px-6 pt-2 md:pt-3
          transition-transform duration-500 ease-in-out
          ${isVisible ? "translate-y-0" : "-translate-y-full"}
        `}
      >
      <div className="surface-glass-dark relative max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-full w-full rounded-3xl border border-white/15">
        <Link to="/" className="text-2xl font-bold text-[#a8d376]">
          <motion.img
            src={formatoImg}
            className="h-14 md:h-16 w-auto object-contain cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-green-glow"
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
                className={`relative hover:text-[#a8d376] transition-colors duration-200 focus:outline-none ${
                  location.pathname === item.path ? "text-[#a8d376] font-semibold" : ""
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.span
                    className="absolute left-0 bottom-[-4px] w-full h-[2px] bg-[#a8d376]"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </Link>
            </motion.div>
          ))}
          
        </div>

        {/* Mobile */}
        <button
          className="md:hidden rounded-xl p-2 text-white/90 hover:text-[#a8d376] transition-colors"
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
            className="md:hidden surface-glass-dark px-6 pb-6 pt-4 space-y-4 text-center"
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
                  className={`block text-lg py-2 hover:text-[#a8d376] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#a8d376] rounded ${
                    location.pathname === item.path ? "text-[#a8d376] font-semibold" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      </nav>

      <motion.div
        className="fixed top-0 left-0 right-0 z-[60] h-[2px] bg-gradient-to-r from-[#6f9e3c] via-[#a8d376] to-[#6f9e3c]"
        initial={{ scaleX: 0, opacity: 0.7 }}
        animate={{ scaleX: scrollPercent / 100, opacity: 1 }}
        style={{ transformOrigin: "left" }}
        transition={{ duration: 0.25 }}
      />
    </>
  );
}