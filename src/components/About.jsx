import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import '../styles/about.css';

export default function About() {
    return (
        <>
            <section className='about-container'>
                <article className='about-info'>
                    <h1>Por qué Elegirnos ?</h1>

                    {/* Lista de motivos */}
                    <ul className="reasons-list mt-6 space-y-4">
                        <li className="flex items-center gap-3">
                            <FaLightbulb className="text-purple-400 w-6 h-6" />
                            <div>
                                <h3>Creatividad</h3>
                                <span>Brindamos soluciones creativas e innovadoras</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaUsers className="text-blue-400 w-6 h-6" />
                            <div>
                                <h3>Union</h3>
                                <span>Contamos con un equipo colaborativo que cada dia busca mejorar</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaShieldAlt className="text-green-400 w-6 h-6" />
                            <div>
                                <h3>Compromiso</h3>
                                <span>Nos involucramos de verdad con tu proyecto, como si fuese nuestro</span>
                            </div>
                        </li>
                        <li className="flex items-center gap-3">
                            <FaRocket className="text-pink-400 w-6 h-6" />
                            <div>
                                <h3>Enfoque</h3>
                                <span>Nos centramos en impulsar tu proyecto al siguiente nivel</span>
                            </div>
                        </li>
                    </ul>
                </article>

                <article>
                    <OtterAbout />
                </article>
            </section>
        </>
    )
}

function OtterAbout() {
    return (
        <div className='otter-about-container'>
            <h3>
                <span>Más</span>
                <span>Allá</span>
                <span>de los</span>
                <span>Limites</span>
            </h3>

            <img src="/logo_blanco.png" alt="" />
        </div>
    );
}
