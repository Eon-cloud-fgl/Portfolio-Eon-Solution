import { FaLightbulb, FaUsers, FaShieldAlt, FaRocket } from "react-icons/fa";
import { motion } from "framer-motion";
import '../styles/about.css';

export default function About() {
    const reasons = [
        {
            icon: <FaLightbulb className="text-purple-400 w-6 h-6" />,
            title: "Creatividad",
            description: "Brindamos soluciones creativas e innovadoras"
        },
        {
            icon: <FaUsers className="text-blue-400 w-6 h-6" />,
            title: "Union",
            description: "Contamos con un equipo colaborativo que cada dia busca mejorar"
        },
        {
            icon: <FaShieldAlt className="text-green-400 w-6 h-6" />,
            title: "Compromiso",
            description: "Nos involucramos de verdad con tu proyecto, como si fuese nuestro"
        },
        {
            icon: <FaRocket className="text-pink-400 w-6 h-6" />,
            title: "Enfoque",
            description: "Nos centramos en impulsar tu proyecto al siguiente nivel"
        }
    ];

    return (
        <>
            <section className='about-container'>
                <article className='about-info'>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        Por qué Elegirnos ?
                    </motion.h1>

                    {/* Lista de motivos con animación escalonada */}
                    <ul className="reasons-list mt-6 space-y-4">
                        {reasons.map((reason, index) => (
                            <motion.li
                                key={reason.title}
                                className="flex items-center gap-3"
                                initial={{ opacity: 0, x: -40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, amount: 0.3 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                {reason.icon}
                                <div>
                                    <h3>{reason.title}</h3>
                                    <span>{reason.description}</span>
                                </div>
                            </motion.li>
                        ))}
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
        <motion.div
            className='otter-about-container'
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
        >
            <h3>
                <span>Más</span>
                <span>Allá</span>
                <span>de los</span>
                <span>Limites</span>
            </h3>

            <motion.div
                className="otter-about-img-wrapper"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <img
                    src="/otter-marmol-head.png"
                    alt=""
                    style={{
                        position: "absolute",
                        width: "170px",
                        height: "180px",
                        bottom: 0,
                        left: 0,
                        transform: "translate(-40%, 40%) scaleX(-1)"
                    }}
                />
            </motion.div>
        </motion.div>
    );
}
