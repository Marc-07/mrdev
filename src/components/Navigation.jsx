

const Navigation = () => {
  return (
    <>
        <nav id="navmenu" className="mt-8">
            <ul className="flex flex-col gap-4 text-l  pb-6 items-center lg:items-start  lg:text-xl lg:pl-8">

                <li>
                    <a href="#hero" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span>Inicio</span>
                    </a>
                </li>
                <li>
                    <a href="#about" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span>Sobre mi</span>
                    </a>
                </li>
                <li>
                    <a href="#resume" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span>Resumen</span>
                    </a>
                </li>
                <li>
                    <a href="#portfolio" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span>Portfolio</span>
                    </a>
                </li>
                <li>
                    <a href="#contacto" className="flex items-center gap-3 hover:text-blue-400 transition-colors">
                        <span>Contacto</span>
                    </a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navigation