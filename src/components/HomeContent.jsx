import formatoImg from "../assets/formato.png";
import moto1 from "../assets/motos/moto1.png";
import moto2 from "../assets/motos/moto2.png";
import moto3 from "../assets/motos/moto3.png";
import bg from "../assets/bg.png"

function HomeContent() {
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] text-white py-20 w-full h-full">
        <div className="w-full px-4 text-center">
          <img 
            src={formatoImg} 
            className="w-128 max-w-full h-auto mx-auto mb-16 cursor-pointer transition-all duration-300 ease-in-out hover:drop-shadow-green-glow hover:scale-105" 
            alt="Logo Formato Motos" 
          />
          <p className="text-xl md:text-2xl mb-8">Descubra a liberdade das motos elétricas de alta performance</p>
          <a
            href="#explore"
            className="inline-block bg-[#8ec54d] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#6f9e3c] hover:text-white transition-transform duration-200 ease-in-out hover:scale-105"
          >
            Explore Nossos Modelos
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="explore" className="w-full">
        <div className="bg-[#8ec54d] w-full px-4 py-4">
          <h2 className="pt-4 text-3xl font-bold text-center mb-6">Por que escolher a Formato Motos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 container mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#8ec54d]">Sustentabilidade</h3>
              <p className="text-gray-600 text-center">Nossas motos elétricas são 100% ecológicas, reduzindo sua pegada de carbono.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#8ec54d]">Performance</h3>
              <p className="text-gray-600 text-center">Aceleração instantânea e potência para uma experiência de pilotagem única.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 className="text-xl font-semibold mb-4 text-[#8ec54d]">Design Moderno</h3>
              <p className="text-gray-600 text-center">Estilo inovador que combina tecnologia e estética para destacar você na estrada.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section className="bg-gradient-to-br from-[#0d2a2c] to-[#1a1a1a] py-8 pb-32 w-full">
        <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-8">Mais vendidas</h2>
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="h-76 bg-gray-300 flex items-center justify-center aspect-[3/2]">
                <a href="">
                  <img src={moto1} alt="" className="w-full h-full object-cover hover:opacity-90 transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8ec54d]">Modelo Volt</h3>
                <p className="text-gray-600 mb-4">Perfeito para a cidade, com autonomia de até 150 km.</p>
                <a href="#volt" className="text-[#8ec54d] hover:underline hover:text-[#6f9e3c]">Saiba Mais</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="h-76 bg-gray-300 flex items-center justify-center aspect-[3/2]">
                <a href="">
                  <img src={moto2} alt="" className="w-full h-full object-cover hover:opacity-90 transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8ec54d]">Modelo Spark</h3>
                <p className="text-gray-600 mb-4">Alta performance para aventuras urbanas e além.</p>
                <a href="#spark" className="text-[#8ec54d] hover:underline hover:text-[#6f9e3c]">Saiba Mais</a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out">
              <div className="h-76 bg-gray-300 flex items-center justify-center aspect-[3/2]">
                <a href="">
                  <img src={moto3} alt="" className="w-full h-full object-cover hover:opacity-90 transition-all duration-300 ease-in-out" />
                </a>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-[#8ec54d]">Modelo Thunder</h3>
                <p className="text-gray-600 mb-4">Potência máxima para os amantes de velocidade.</p>
                <a href="#thunder" className="text-[#8ec54d] hover:underline hover:text-[#6f9e3c]">Saiba Mais</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-8 w-full bg-[#8ec54d]">
        <div className="w-full px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">O que dizem nossos clientes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 container mx-auto">
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4">"A Volt mudou minha rotina urbana!"</p>
              <p className="text-md text-[#8ec54d] font-semibold">João Silva ★★★★★</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4">"Performance incrível nas estradas!"</p>
              <p className="text-md text-[#8ec54d] font-semibold">Maria Oliveira ★★★★★</p>
            </div>
            <div className="bg-white p-10 rounded-lg shadow-lg text-center">
              <p className="text-lg text-gray-700 mb-4">"Design único e sustentável."</p>
              <p className="text-md text-[#8ec54d] font-semibold">Pedro Santos ★★★★★</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#1a1a1a] text-white py-16 w-full">
        <div className="w-full px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Pronto para a Revolução Elétrica?</h2>
          <p className="text-lg mb-8">Junte-se à comunidade Formato Motos e experimente o futuro da mobilidade.</p>
          <a
            href="#contact"
            className="inline-block bg-[#8ec54d] text-black font-semibold py-3 px-6 rounded-lg hover:bg-[#6f9e3c] hover:text-[#fafafa] transition duration-300"
          >
            Entre em Contato
          </a>
        </div>
      </section>
    </main>
  );
}

export default HomeContent;