import { useState } from 'react';
import '../styles/news.css';

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

  return (
    <div className="news-container">
      <div className="news-main">
        <div className="news-main-image">
          <img src={activeNews.img} alt="main" />
        </div>
        <div className="news-main-content">
          <p>
            <span className="news-main-title">{activeNews.title}</span>
            <br /><span><span className='news-text'>-Novedades</span></span>
          </p>
          <p className="news-main-text">{activeNews.text}</p>
        </div>
      </div>

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
    </div>
  );
}
