import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Marquee from '../components/Separator';
import '../styles/news.css';

// Base de datos JSON
const newsDatabase = [
    {
      id: 4,
      img: '/news/mejora-modal.png',
      title: 'Mejora en Modales de OtterTask',
      text: 'Hemos implementado una mejora significativa en los modales de varias tareas de OtterTask para optimizar la experiencia del usuario y facilitar la gestión de tareas.',
      category: 'Actualización',
      date: '15 Dic 2025'
    },
    {
    id: 3,
      img: '/news/ottertask.png',
      title: 'Migracion de OtterTask a React',
      text: 'Nos complace anunciar la migración de OtterTask a React, una decisión estratégica para mejorar el rendimiento, la escalabilidad y la experiencia del usuario de nuestra plataforma de gestión de tareas.',
      category: 'Tecnología',
      date: '25 Nov 2025'
    },
    {
    id: 2,
    img: '/news/portfolio.png',
    title: 'Portfolio Corporativo',
    text: 'Presentamos nuestro portfolio completo, una muestra exhaustiva de nuestros mejores trabajos, proyectos innovadores y casos de éxito.',
    category: 'Desarrollo',
    date: '17 Ago 2025'
  },
  {
    id: 1,
    img: '/logo_blanco.png',
    title: 'Nueva Identidad Visual',
    text: 'Estamos encantados de presentar nuestro nuevo logo, que refleja nuestra identidad y valores renovados como empresa líder en soluciones tecnológicas.',
    category: 'Diseño',
    date: '10 Jul 2025'
  },
];

export default function NewsPortal() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNews = newsDatabase[activeIndex];

  return (
    <>

      <div className="news-portal">
        <Marquee title="OtterSolution - Innovación y Tecnología al Servicio de tu Empresa" />

        {/* Header minimalista */}
        <div className="news-header">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="news-badge">Novedades</span>
            <h1 className="news-title-main">Centro de Noticias</h1>
          </motion.div>
        </div>

        {/* Layout split screen */}
        <div className="news-split-layout">
          {/* Lado izquierdo - Lista de noticias */}
          <div className="news-list">
            {newsDatabase.map((news, index) => (
              <motion.div
                key={news.id}
                className={`news-item ${activeIndex === index ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="news-item-number">{String(index + 1).padStart(2, '0')}</div>
                <div className="news-item-content">
                  <span className="news-item-category">{news.category}</span>
                  <h3 className="news-item-title">{news.title}</h3>
                  <span className="news-item-date">{news.date}</span>
                </div>
                <div className="news-item-indicator"></div>
              </motion.div>
            ))}
          </div>

          {/* Lado derecho - Vista detallada */}
          <div className="news-detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeNews.id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="news-detail-container"
              >
                <div className="news-detail-image">
                  <img src={activeNews.img} alt={activeNews.title} />
                  <div className="news-detail-overlay"></div>
                </div>

                <div className="news-detail-content">
                  <div className="news-detail-meta">
                    <span className="detail-category">{activeNews.category}</span>
                    <span className="detail-date">{activeNews.date}</span>
                  </div>
                  <h2 className="news-detail-title">{activeNews.title}</h2>
                  <p className="news-detail-text">{activeNews.text}</p>

                  {/* <div className="news-detail-action">
                    <button className="read-more-btn">
                      Leer artículo completo
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>



      </div>
    </>
  );
}