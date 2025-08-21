import "../styles/projects.css";


export default function Projects() {
    const projectList = [
  {
    title: "Propiedades Mottoso",
    description: "Sitio Web de una inmobiliaria en React y PHP.",
    image: " ",
    link: " ",
  },
  {
    title: "Otter Task",
    description: "Aplicación de gestión de stock y ventas en React y PHP.",
    image: " " ,
    link: " ",
  }
];

    return (
        <> 
        <section className="projects">
            <div className="projects-inner">
            <h2 className="projects-title neon">Nuestros Proyectos</h2>

            <div className="projects-grid">
            <article className="project-card">
                <div className="project-image project-otter" />
                    <div className="project-body">
                    <h3>Otter Task</h3>
                    <p>Sistema Web para gestionar stock hecha con React y PHP.</p>
                    <a className="btn-ghost" href="#">Ver más</a>
                </div>
            </article>

            <article className="project-card">
                <div className="project-image project-realestate" />
                    <div className="project-body">
                        <h3>Sitio Web “Inmobiliaria Mottoso”</h3>
                        <p>Sitio web con panel de control, hecho con React y PHP.</p>
                        <a className="btn-ghost" href="#">Ver más</a>
                    </div>
            </article>
                </div>
            </div>
        </section>
        </>
    );
}


