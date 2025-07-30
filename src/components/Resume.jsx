
const Resume = () => {
    return (
        <>
            <div className="max-w-6xl mx-auto px-4 text-center mb-12" data-aos="fade-up">
                <p className="text-gray-600 max-w-3xl mx-auto">
                    Te invito a conocer más sobre mi:
                </p>
            </div>


            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div data-aos="fade-up" data-aos-delay="100">

                    <h3 className="text-2xl font-semibold text-gray-700">Educación</h3>

                    <div className="p-6 ">
                        <h4 className="text-lg font-bold text-gray-800">Analisis y Desarrollo de Software</h4>
                        <p className="text-gray-600 mb-2"><em>Servicio Nacional de Aprendizaje</em></p>
                        <h5 className="text-sm text-gray-500">2023 - En curso</h5>

                    </div>

                    <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-800">Licenciatura en Informática</h4>
                        <p className="text-gray-600 mb-2"><em>Universidad del Magdalena</em></p>
                        <h5 className="text-sm text-gray-500 mb-2">2013 - 2018</h5>

                    </div>

                    <h3 className="text-2xl font-semibold text-gray-700">Educación Complementaria</h3>

                    <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-800">Desarrollo Web FrontEnd React & Redux</h4>
                        <p className="text-gray-600 mb-2"><em>Proyecto Mujeres Digitales</em></p>
                        <h5 className="text-sm text-gray-500 mb-2">Agosto 2024 - Noviembre 2024</h5>
                    </div>

                </div>


                <div data-aos="fade-up" data-aos-delay="100">
                    <h3 className="text-2xl font-semibold text-gray-700">Experiencia Academica</h3>
                    <div className="p-6">
                        <h4 className="text-lg font-bold text-gray-800">Hackathon Mujeres Digitales</h4>
                        <h5 className="text-sm text-gray-500 mb-2">Noviembre 2024</h5>
                        <p className="text-gray-600 mb-2"><em>Bogotá</em></p>
                        <ul className="text-gray-600 text-sm list-disc pl-5 space-y-1">
                            <li>Participación en hackathon desarrollando una solución en React para la movilidad en Bogotá.</li>
                            <li>Consumo de datos mediante la API de City Bikes para mostrar estaciones, disponibilidad y rutas óptimas.</li>
                            <li>Implementación de componentes interactivos y diseño responsivo con enfoque UX/UI.</li>
                            <li>Fortalecimiento de habilidades en trabajo en equipo, resolución de problemas y comunicación efectiva.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resume