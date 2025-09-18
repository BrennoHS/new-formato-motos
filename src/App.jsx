import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Modelos from "./pages/Modelos"
import Unidades from "./pages/Unidades"
import Assistencia from "./pages/Assistencia"
import Contato from "./pages/Contato"
import WhatsappButton from "./components/WhatsappButton"

export default function App() {
  return (
    <Router>
      <Navbar />
      <main className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/modelos" element={<Modelos />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/assistencia" element={<Assistencia />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>
      <WhatsappButton/>
      <Footer />
    </Router>
  )
}
