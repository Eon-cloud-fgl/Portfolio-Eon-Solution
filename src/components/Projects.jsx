import { useState } from "react";
import { motion } from "framer-motion";
import "../styles/projects.css";

const projects = [
  { id: 1, title: "Propiedades Mottoso", description: "React, MySQL, PHP.", image: "/public/mottosopagina.PNG", link: "#" },
  { id: 2, title: "Otter Task", description: "PHP y MySQL.", image: "/public/otter.png", link: "#" },
  { id: 3, title: "Beretta System", description: "React, PHP, MySQL.", image: "/public/beretta.png", link: "#" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const titleVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
};

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-table">
        <div className="pt-title">
          <h2>Projecto</h2>
          <h2>Lenguajes</h2>
          <h2>Link</h2>
        </div>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((proj) => (
            <ProjectItem key={proj.id} proj={proj} />
          ))}
        </motion.div>
      </div>

      <motion.h2
        className="projects-title"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Algunos de nuestros Mejores proyectos
      </motion.h2>
    </section>
  );
}

function ProjectItem({ proj }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="project-card"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      variants={itemVariants}
    >
      {hovered ? (
        <div className="project-marquee-container">
          <div className="project-marquee">
            <span>{proj.title}</span>
            <span>{proj.title} &nbsp; {proj.title} &nbsp; {proj.title}</span>
          </div>
        </div>
      ) : (
        <>
          <h3>{proj.title}</h3>
          <p>{proj.description}</p>
          <a href={proj.link} target="_blank" rel="noreferrer">Ver más</a>
        </>
      )}

      {hovered && (
        <div className="project-preview">
          <img src={proj.image} alt={proj.title} />
        </div>
      )}
    </motion.div>
  );
}
