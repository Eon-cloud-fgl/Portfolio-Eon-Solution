import React from "react";
import { FaLaptopCode, FaChartLine, FaLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";
import "../styles/services.css";

export default function Services() {
    return (
        <section className="services-container">
            {/* Introducción / título de la sección */}
            <motion.article
                className="services-intro"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8 }}
            >
                <div className="title-container">
                    <h1>Transformamos tu negocio </h1>
                    <span className="services-firm">-OtterSolution</span>
                </div>
                <img
                    className="svg-icon-2"
                    src="../../public/circle-svgrepo-com.svg"
                    alt=""
                />
                <p className="services-description">
                    En EON Solutions nos enfocamos en potenciar cada aspecto de tu empresa mediante
                    estrategias personalizadas y tecnología de vanguardia. Desde el desarrollo web hasta
                    el marketing digital y la consultoría tecnológica, nuestro objetivo es crear experiencias
                    únicas que conecten con tus clientes, optimicen tus procesos internos y fortalezcan tu
                    presencia en el mercado. Trabajamos de la mano contigo para convertir ideas en resultados
                    tangibles, asegurando que cada proyecto genere valor real y crecimiento sostenido.
                </p>
            </motion.article>

            <img
                className="svg-icon"
                src="../../public/turn-right-arrow-with-broken-line-svgrepo-com.svg"
                alt=""
            />

            {/* Lista de items */}
            <article className="services-items">
                <Item
                    title="Desarrollo Web"
                    description="Creamos sitios modernos y responsivos adaptados a tus necesidades."
                    Icon={FaLaptopCode}
                    delay={0}
                />
                <Item
                    title="Marketing Digital"
                    description="Impulsamos tu marca con estrategias efectivas de publicidad online."
                    Icon={FaChartLine}
                    className="glitch-item"
                    delay={0.2}
                />
                <Item
                    title="Consultoría Tecnológica"
                    description="Asesoramos tu negocio en la implementación de tecnología eficiente."
                    Icon={FaLightbulb}
                    delay={0.4}
                />

                <div className="services-line"></div>
                <span className="services-text">Nuestros Servicios</span>
            </article>

            <div className="service-sphere s1"></div>
            <div className="service-sphere s2"></div>
            <div className="service-sphere s3"></div>
        </section>
    );
}

function Item({ title, description, Icon, className, delay = 0 }) {
    return (
        <motion.div
            className={`service-item ${className ? className : ""}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay }}
        >
            <div className="service-icon">
                <Icon />
            </div>
            <h2>
                {title}
                {className === "glitch-item" && (
                    <span className="glitch-effect">{title}</span>
                )}
            </h2>
            <p>{description}</p>
        </motion.div>
    );
}
