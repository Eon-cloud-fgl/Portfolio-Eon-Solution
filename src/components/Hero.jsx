import { motion } from "framer-motion";
import '../styles/hero.css';
import { useRef, useEffect } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";

function Mouse() {
  return (
    <div className="scroll-indicator">
      <div className="mouse">
        <div className="wheel"></div>
      </div>
      <div className="line"></div>
      <div className="arrow"></div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="hero">
      {/* Contenido principal */}
      <div className="hero-content">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-pretitle"
        >
          Somos
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glitch"
          data-text="OTHER"
        >
          OTTER SOLUTIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-hero"
        >
          Combinamos innovación y estrategia para transformar tu negocio y potenciar su crecimiento
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          <FaArrowRightLong />
        </motion.button>
      </div>

      {/* Esfera decorativa */}
      <motion.div
        className="hero-sphere"
        initial={{ opacity: 0, x: 120 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 2 }}
      />

      <article className="mouse-container">
        <Mouse />
      </article>
    </section>
  );
}