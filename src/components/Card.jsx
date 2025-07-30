import { FaSearchPlus, FaGithub } from "react-icons/fa";
const Card = () => {

    const projects = [
        {
            title: "Cotizador Prestamo",
            image: "img/app1.png",
            description: "Aplicacion con React para practicar el uso de useState y useEffect, calculando montos según valor y plazo ingresados.",
            link: "https://apipokelist.netlify.app/",
            repo: "https://github.com/Marc-07/React-API-ListadoProducto"
        },
        {
            title: "APP Clima",
            image: "img/app2.png",
            description: "Proyecto enfocado en la práctica de consumo de APIs externas, manejo de eventos, validación de formularios.",
            link: "https://appweatherfetchapi.netlify.app/",
            repo: "https://github.com/Marc-07/AppClima/tree/main"
        },
        {
            title: "Administrador de Empleados",
            image: "img/app3.png",
            description: "Sistema de gestión de empleados desarrollado con React, Node.js, Express y MongoDB, con autenticación JWT.",
            link: "https://devconnect-adm.netlify.app/",
            repo: "https://github.com/Marc-07/devConnect_backend"
        },
        

    ]

    return (
        <>

            {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-5">
                        <h4 className="text-lg font-semibold mb-2">{project.title}</h4>
                        <p className="text-gray-500 mb-4">
                            {project.description}
                        </p>
                        <div className="flex items-center space-x-4">
                            <a
                                href={project.link}
                                className="text-blue-600 hover:text-blue-800 flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaSearchPlus className="w-5 h-5 mr-1" />
                                Ver
                            </a>
                            <a
                                href={project.repo}
                                className="text-gray-600 hover:text-gray-800 flex items-center"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                < FaGithub className="w-5 h-5 mr-1" />
                            </a>
                        </div>
                    </div>
                </div>
            ))}

        </>

    )
}

export default Card