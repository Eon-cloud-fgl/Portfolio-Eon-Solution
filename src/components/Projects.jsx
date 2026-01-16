import { useState, useMemo, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import '../styles/projects.css';

// Base de datos JSON con más detalles
const projects = [
  { 
    id: 1, 
    title: "Otter Task v2", 
    description: "React, PHP, REST API, MySQL", 
    fullDescription: "Migración y modernización de Otter Task a arquitectura SPA. Frontend completamente reescrito en React consumiendo API RESTful en PHP. Incluye nuevas funcionalidades: generación de tickets, sistema de QR, modal de ventas mejorado y flujos más profesionales.",
    image: "works/ott-v2.png", 
    link: "#",
    year: "2025-2026",
    category: "Task Panel"
  },
  { 
    id: 2, 
    title: "CPA Refrigeración", 
    description: "React, PHP, CSS, MySQL", 
    fullDescription: "Sistema integral con app móvil para técnicos de refrigeración y panel de administración web. Permite registrar visitas técnicas, estado de equipos, incidencias y generar reportes. Desplegado en infraestructura propia.",
    image: "works/cpa-ref.png", 
    link: "#",
    year: "2025",
    category: "Panel + App Mobile"
  },
  { 
    id: 3, 
    title: "CPA Desinfección", 
    description: "Angular, Node.js, Mobile", 
    fullDescription: "Mantenimiento y evolución de sistema legacy (5 años) con app móvil y panel web en Angular, y API en Node.js. Actualización de librerías obsoletas, corrección de bugs críticos, implementación de nuevas funcionalidades y refactorización de módulos completos.",
    image: "works/cpa-des.png", 
    link: "#",
    year: "2025",
    category: "Mobile System"
  },
  { 
    id: 4, 
    title: "Mottoso Propiedades", 
    description: "React, PHP, CSS, MySQL", 
    fullDescription: "Plataforma inmobiliaria completa con catálogo de propiedades para compra y alquiler, sistema de tasaciones, integración de mapas interactivos, formularios de contacto y panel de administración. Desplegado en infraestructura propia con Nginx.",
    image: "works/mott.png", 
    link: "#",
    year: "2025",
    category: "Inmobiliaria"
  },
  { 
    id: 5, 
    title: "Beretta Logística", 
    description: "React, PHP, Tailwind CSS", 
    fullDescription: "Panel de control logístico para empresa de transporte de cargas. Gestión de flota vehicular, historial de mantenimiento, planificación de rutas, control de combustible, administración de empleados y sistema de roles de acceso.",
    image: "works/bett.png", 
    link: "#",
    year: "2025",
    category: "Control de Transporte"
  },
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

// Optimizar animaciones del modal
const modalOverlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modalContentVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1, 
    transition: { 
      type: "spring", 
      damping: 30, 
      stiffness: 300,
      duration: 0.3
    } 
  },
  exit: { 
    scale: 0.95, 
    opacity: 0, 
    transition: { duration: 0.2 } 
  }
};

// Componente modal memoizado
const ProjectModal = memo(({ project, onClose }) => {
  const handleOverlayClick = useCallback(() => {
    onClose();
  }, [onClose]);

  const handleModalClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleLinkClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.div
      className="project-modal-overlay"
      variants={modalOverlayVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={handleOverlayClick}
    >
      <motion.div
        className="project-modal"
        variants={modalContentVariants}
        onClick={handleModalClick}
      >
        <button 
          className="modal-close"
          onClick={onClose}
        >
          ✕
        </button>

        <div className="modal-image-container">
          <img 
            src={project.image} 
            alt={project.title}
            loading="lazy"
          />
          <div className="modal-gradient-overlay"></div>
        </div>

        <div className="modal-content-wrapper">
          <div className="modal-badges">
            <span className="modal-category">{project.category}</span>
            <span className="modal-year">{project.year}</span>
          </div>

          <h2 className="modal-title">{project.title}</h2>
          <p className="modal-description">{project.fullDescription}</p>

          <div className="modal-tech">
            <span className="modal-tech-label">Tecnologías:</span>
            <span className="modal-tech-value">{project.description}</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
});

ProjectModal.displayName = 'ProjectModal';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const handleSelectProject = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const projectsList = useMemo(() => (
    projects.map((proj) => (
      <ProjectItem 
        key={proj.id} 
        proj={proj}
        onViewDetails={handleSelectProject}
      />
    ))
  ), [handleSelectProject]);

  return (
    <>
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
            {projectsList}
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

      {/* Modal de detalles optimizado */}
      <AnimatePresence mode="wait">
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}

// Componente ProjectItem memoizado
const ProjectItem = memo(({ proj, onViewDetails }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setHovered(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHovered(false);
  }, []);

  const handleClick = useCallback(() => {
    onViewDetails(proj);
  }, [onViewDetails, proj]);

  const handleLinkClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  return (
    <motion.div
      className="project-card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
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
          <a href={proj.link} onClick={handleLinkClick}>Ver más</a>
        </>
      )}

      {hovered && (
        <div className="project-preview">
          <img src={proj.image} alt={proj.title} loading="lazy" />
        </div>
      )}
    </motion.div>
  );
});

ProjectItem.displayName = 'ProjectItem';