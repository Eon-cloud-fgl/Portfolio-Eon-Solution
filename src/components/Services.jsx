import React from "react";
import { FaLaptopCode, FaChartLine, FaLightbulb } from "react-icons/fa";
import "../styles/services.css";

export default function Services() {
    return (
        <section className="services-container">
            {/* Introducción / título de la sección */}
            <article className="services-intro">
                <div className="title-container">
                    <h1>Transformamos tu negocio </h1>
                    <span className="services-firm">-OtterSolution</span>
                </div>
                <p>
                    En EON Solutions nos enfocamos en potenciar cada aspecto de tu empresa mediante
                    estrategias personalizadas y tecnología de vanguardia. Desde el desarrollo web hasta
                    el marketing digital y la consultoría tecnológica, nuestro objetivo es crear experiencias
                    únicas que conecten con tus clientes, optimicen tus procesos internos y fortalezcan tu
                    presencia en el mercado. Trabajamos de la mano contigo para convertir ideas en resultados
                    tangibles, asegurando que cada proyecto genere valor real y crecimiento sostenido.
                </p>
            </article>

            {/* Lista de items */}
            <article className="services-items">
                <Item
                    title="Desarrollo Web"
                    description="Creamos sitios modernos y responsivos adaptados a tus necesidades."
                    Icon={FaLaptopCode}
                />
                <Item
                    title="Marketing Digital"
                    description="Impulsamos tu marca con estrategias efectivas de publicidad online."
                    Icon={FaChartLine}
                    className="glitch-item"
                />
                <Item
                    title="Consultoría Tecnológica"
                    description="Asesoramos tu negocio en la implementación de tecnología eficiente."
                    Icon={FaLightbulb}
                />
                <div className="services-line"></div>
                <span className="services-text">Nuestros Servicios</span>
            </article>
        </section>
    );
}

function Item({ title, description, Icon, className }) {
    return (
        <div className={`service-item ${className ? className : ''}`}>
            <div className="service-icon"><Icon /></div>
            <h2>{title}
                {className === 'glitch-item' && <span className="glitch-effect">{title}</span>}
            </h2>
            <p>{description}</p>
        </div>
    );
}
