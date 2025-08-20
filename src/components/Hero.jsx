import { motion } from "framer-motion";
import '../styles/hero.css';
import { useRef, useEffect } from 'react';

export default function Hero() {
  return (
    <section className="hero">
      {/* Contenido principal */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="glitch"
          data-text="EON SOLUTIONS"
        >
          EON SOLUTIONS
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-hero"
        >
          Innovación y estrategia para tu negocio
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cta-button"
        >
          Work with Us
        </motion.button>
      </div>

      {/* Esfera decorativa */}
      <motion.div
        className="hero-sphere"
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </section>
  );
}
