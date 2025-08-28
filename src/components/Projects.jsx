import { useState, useEffect } from "react";
import "../styles/projects.css";

const projects = [
  {
    id: 1,
    title: "Propiedades Mottoso",
    description: "React, MySQL y PHP.",
    image: "/public/mottosopagina.PNG",
    link: "#",
  },
  {
    id: 2,
    title: "Otter Task",
    description: "PHP y MySQL.",
    image: "/public/otter.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section className="projects">
        <div className="projects-table">
          <div className="pt-title">
            <h2>Projecto</h2>
            <h2>Lenguajes</h2>
            <h2>Link</h2>
          </div>
          <ProjectItem />
        {/* <button className="project-btn">Ver Lista</button> */}
      </div>


      <h2 className="projects-title">Algunos de nuestros Mejores proyectos</h2>
    </section>
  );
}

function ProjectItem() {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="projects-grid">
      {projects.map((proj) => (
        <div
          key={proj.id}
          className="project-card"
          onMouseEnter={() => setHovered(proj.id)}
          onMouseLeave={() => setHovered(null)}
        >
          {hovered === proj.id ? (
            <div className="project-marquee-container">
              <div className="project-marquee">
                <span>
                  {proj.title}
                </span>
                <span>
                  {proj.title} &nbsp; {proj.title} &nbsp; {proj.title}
                </span>
              </div>
            </div>
          ) : (
            <>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <a href={proj.link} target="_blank" rel="noreferrer">
                Ver más
              </a>
            </>
          )}

          {hovered === proj.id && (
            <div className="project-preview">
              <img src={proj.image} alt={proj.title} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}