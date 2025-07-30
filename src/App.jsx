import Sidebar from "./components/Sidebar"
import Hero from "./components/Hero"
import About from "./components/about"
import Skills from "./components/Skills"
import Resume from "./components/Resume"
import Footer from "./components/Footer"
import Card from "./components/Card"
import Contact from "./components/Contact"

function App() {
  
  return (
    <>
      <Sidebar />
      <main className="md:ml-64">
        <Hero/>
        <About />
        <Skills />
        <section id="resume" className="py-16 bg-white">
          <Resume/>
        </section>

        <section id="portfolio" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-12" >
              <h2 className="text-4xl font-bold text-gray-800 mb-4">Portafolio</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Algunos de los trabajos y proyectos más destacados. Explora el detalle de cada uno.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-aos="fade-up" data-aos-delay="200">
            <Card />
          </div>
          </div>
          
        </section>

        <section id="contacto" className="py-16 bg-white ">
          <Contact/>
        </section>
      </main>
      <Footer />
    </>
      
  )
}

export default App
