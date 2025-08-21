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
            <h2 className="projects-title">Nuestros Proyectos</h2>

            <div className="projects-grid">

                
                <div className="project-card">
                    <div className="project-image"> 
                        
                    </div>

                        <h3>Otter Task</h3>
                        <p>Sistema Web para gestionar stock hecha con React y PHP.</p>
                        <a href="#">Ver más</a>
                    </div>

                    
                <div className="project-card">
                    <div className="project-image">
                        
                    </div>
                        <h3>Sitio Web "Inmobiliaria Mottoso"</h3>
                        <p>Sitio web con panel de control para una inmobiliaria, hecho con React y PHP.</p>
                        <a href="#">Ver más</a>
                    </div>
            </div>
    </section>
        </>
    );
}


