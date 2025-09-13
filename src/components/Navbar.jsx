import { useState } from "react"
import { Link } from "react-router-dom"
import { Menu, X } from "lucide-react"
import formatoImg from "../assets/formato.png"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => setIsOpen(!isOpen)

  return (
    <nav className="bg-[#1a1a1a] text-white fixed w-full z-50 shadow-md h-26">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-full">
        <Link to="/" className="text-2xl font-bold text-green-400">
          <img className="h-28 w-auto object-contain" src={formatoImg} alt="Logotipo Formato Motos" />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex space-x-12 text-lg">
          <Link to="/" className="hover:text-[#8ec54d] transition-transform duration-50 hover:scale-105">Início</Link>
          <Link to="/sobre" className="hover:text-[#8ec54d] transition-transform duration-50 hover:scale-105">Sobre</Link>
          <Link to="/modelos" className="hover:text-[#8ec54d] transition-transform duration-50 hover:scale-105">Modelos</Link>
          <Link to="/assistencia" className="hover:text-[#8ec54d] transition-transform duration-50 hover:scale-105">Assistência</Link>
          <Link to="/unidades" className="hover:text-[#8ec54d] transition-transform duration-50 hover:scale-105">Unidades</Link>
          <Link to="/contato" className="hover:text-[#8ec54d] transition-transform duration-50 hover:scale-105  ">Contato</Link>
        </div>

        {/* Mobile */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white-800 px-6 pb-4 space-y-6 text-center">
          <Link to="/" onClick={toggleMenu} className="block hover:text-[#8ec54d]">Início</Link>
          <Link to="/sobre" onClick={toggleMenu} className="block hover:text-[#8ec54d]">Sobre</Link>
          <Link to="/modelos" onClick={toggleMenu} className="block hover:text-[#8ec54d]">Modelos</Link>
          <Link to="/assistencia" onClick={toggleMenu} className="block hover:text-[#8ec54d]">Assistência</Link>
          <Link to="/unidades" onClick={toggleMenu} className="block hover:text-[#8ec54d]">Unidades</Link>
          <Link to="/contato" onClick={toggleMenu} className="block hover:text-[#8ec54d]">Contato</Link>
        </div>
      )}
    </nav>
  )
}