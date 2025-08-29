import { useState, useRef } from 'react';
import Marquee from '../components/Separator';
import '../styles/news.css';
import { motion, AnimatePresence, useInView } from "framer-motion";

export default function News() {
  const [activeNews, setActiveNews] = useState({
    img: '/logo_blanco.png',
    title: 'Novedades',
    text: 'Mantente al dia con las ultimas noticias y actualizaciones de OtterSolution Team.'
  });

  const newsData = [
    {
      id: 1,
      img: '/logo_blanco.png',
      title: 'Nuevo logo',
      text: 'Estamos encantados de presentar nuestro nuevo logo, que refleja nuestra identidad y valores renovados.'
    },
    {
      id: 2,
      img: '/portfolio.png',
      title: 'Portfolio finalizado',
      text: 'Presentamos nuestro portfolio, una muestra de nuestros mejores trabajos y proyectos.'
    }
  ];

  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <div className="news-container" ref={containerRef}>
      <motion.div 
        className="news-main"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={contentVariants}
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeNews.img}
            className="news-main-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img src={activeNews.img} alt="main" />
          </motion.div>

          <motion.div 
            className="news-main-content"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            <p>
              <span className="news-main-title">{activeNews.title}</span>
              <br /><span><span className='news-text'>-Novedades</span></span>
            </p>
            <p className="news-main-text">{activeNews.text}</p>
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <div className="image-stack">
        {newsData.map((news) => (
          <div
            key={news.id}
            className="image-stack-item"
            id={`img-${news.id}`}
            onMouseEnter={() =>
              setActiveNews({
                img: news.img,
                title: news.title,
                text: news.text
              })
            }
          >
            <img src={news.img} alt={news.title} />
          </div>
        ))}
      </div>

      <Marquee title="OTTERSOLUTIONS" />
    </div>
  );
}
