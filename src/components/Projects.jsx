import { useState } from "react";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "Propiedades Mottoso",
    description: "Sitio Web de una inmobiliaria en React y PHP.",
    image: "/public/mottosopagina.PNG",
    link: "#",
  },
  {
    id: 2,
    title: "Otter Task",
    description: "Aplicación de gestión de stock y ventas en React y PHP.",
    image: "/public/otter.png",
    link: "#",
  },
];

export default function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="projects">
      <h2 className="projects-title">Nuestros Proyectos</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <div
            key={proj.id}
            className="project-card"
            onMouseEnter={() => setHovered(proj.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <a href={proj.link} target="_blank" rel="noreferrer">
              Ver más
            </a>

            {/* Preview solo en el card hovered */}
            {hovered === proj.id && (
              <div className="project-preview">
                <img src={proj.image} alt={proj.title} />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}