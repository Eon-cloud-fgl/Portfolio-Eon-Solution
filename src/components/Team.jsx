import React from "react";
import { motion } from "framer-motion";
import "../styles/team.css";
import { a } from "framer-motion/client";

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export default function Team() {
    return (
        <section className="team-container">
            <motion.h1
                variants={titleVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                Conoce a nuestro equipo
            </motion.h1>
            <div className="team-members">
                <TeamMember
                    name="Ferch0"
                    role="Jefe de Desarrollo/Desarrollador Full Stack"
                    image="/logo_boss.png"
                    delay={0}
                    link="https://fern-portfolio.netlify.app/"
                />


                <TeamMember
                    name="Prominence"
                    role="Desarrollador Full Stack/Diseñador UX/UI"
                    image="/logo_ux_ui.png"
                    delay={0.2}
                />

                <TeamMember
                    name="Dieguinchis"
                    role="Desarrollador Frontend"
                    image="/logo_developer.png"
                    delay={0.4}
                    link="https://diego-portfolio.netlify.app/"
                />
            </div>
        </section>
    );
}

function TeamMember({ name, role, image, delay, link }) {
    return (

        <a href={link}>
            <motion.div
                className="member-container"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay }}
            >
                <div className="member-image">
                    <img src={image} alt={`Miembro del equipo ${name}`} />
                </div>

                <div className="member-info">
                    <h2>{name}</h2>
                    <p>{role}</p>
                </div>
            </motion.div>
        </a>
    );
}