import { FaHSquare } from "react-icons/fa";

const About = () => {
  return (
    <>
        <section id="about" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-4 text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-800 mb-4">Sobre mi</h2>
                <p className="text-gray-600  mx-auto text-l">
                    ¡Hola! Soy María
                
                    Soy estudiante de Análisis y Desarrollo de Software y disfruto muchísimo dar vida a mis ideas con código.Me apasiona la programación creativa, esa que te da la confianza de imaginar y construir cosas increíbles desde
                    cero.
                </p>
            </div>
        
            <div className="max-w-5xl mx-auto px-4 flex flex-col lg:flex-row items-start gap-10">
        
                
                  <div className="flex-shrink-0 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 xl:w-1/4 mx-auto lg:mx-0">
                      <img
                          src="/img/hero-foto.jpeg"
                          alt="Profile"
                          className="rounded-xl shadow-2xl w-full h-auto object-cover"
                      />
                  </div>

        
                
                <div className="w-full lg:w-3/4">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">Desarrolladora Front-End</h3>
                    <p className="italic text-gray-600 mb-6">
                        Actualmente me encanta profundizar en React, diseñar interfaces con Tailwind CSS y me emociona la idea de convertirme en una experta en Node.js. Apenas estoy comenzando este camino, pero ya descubrí que este mundo es tan emocionante como desafiante
                    </p>
        
                    <p className="italic text-gray-600 mt-6">
                        Como licenciada, creo firmemente que educar es sembrar posibilidades. Enseñar y aprender van de la mano, y compartir
                        lo que sé es una de las cosas que más me llena.
                        Además, me encantaría que más chicas y niñas se animen a programar, a crear, a explorar sin miedo este universo tan
                        lleno de oportunidades. 💻💜

                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default About