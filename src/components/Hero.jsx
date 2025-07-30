import { useEffect } from 'react';
import Icons from './Icons';

const Hero = () => {

    const typedItems = ["Desarrolladora Front-End", "Licenciada en Informática"];

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            const typedText = document.getElementById('typed-text');
            if (typedText) {
                typedText.textContent = typedItems[index];
                index = (index + 1) % typedItems.length;
            }
        }, 2000);

        return () => clearInterval(interval); 
    }, []);

  return (
    <section id="hero" className="relative w-full h-[70vh] bg-gray-100 overflow-hidden lg:h-screen">
            <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center max-w-2xl px-4">
                    <h2 className="text-3xl font-bold text-gray-700 mb-4 lg:text-5xl" >María Angélica Ramos</h2>
                    <p className="text-3xl text-gray-700">
                        <span id="typed-text" className="font-semibold text-blue-600 text-3xl"> Desarrolladora Front-End</span>
                    </p>
                    <Icons />
                </div>
            </div>
        </section>
  )
}

export default Hero