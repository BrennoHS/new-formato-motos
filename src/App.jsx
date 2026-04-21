import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Home from "./pages/Home"
import Sobre from "./pages/Sobre"
import Modelos from "./pages/Modelos"
import Unidades from "./pages/Unidades"
import Assistencia from "./pages/Assistencia"
import WhatsappButton from "./components/WhatsappButton"
import ModelDetails from "./pages/ModelDetails";
import { useEffect } from "react";

function ScrollToTopOnRouteChange() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTopOnRouteChange />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/modelos" element={<Modelos />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/assistencia" element={<Assistencia />} />
          <Route path="/modelos/:id" element={<ModelDetails />} />
        </Routes>
      </main>
      <WhatsappButton/>
      <Footer />
    </Router>
  )
}
