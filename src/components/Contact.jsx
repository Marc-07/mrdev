import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaWhatsapp } from 'react-icons/fa';

const Contact = () => {

    useEffect(() => {
        AOS.init({
            duration: 800, // duración de la animación en ms
            once: true,    // si quieres que se anime solo una vez
        });
    }, []);



  return (
    <div className="max-w-2xl mx-auto text-center " data-aos="fade-up">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">¿Hablamos?</h2>
      <p className="text-gray-600 mb-8 text-lg">
        Si tienes una idea, proyecto o simplemente quieres saludar,<br /> ¡escríbeme por WhatsApp!
      </p>

      <div className="relative inline-block group">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400 via-green-500 to-green-700 blur-sm opacity-0 group-hover:opacity-100 transition duration-500 animate-spin-slow z-0"></div>

        <a
          href="https://wa.me/573002118334"
          target="_blank"
          rel="noopener noreferrer"
          className="relative z-10 inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
        >
          <FaWhatsapp className="text-2xl" />
          300 211 8334
        </a>
      </div>
    </div>
  );
};

export default Contact;

