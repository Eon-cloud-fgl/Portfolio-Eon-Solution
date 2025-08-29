import "../styles/footer.css";
import { LiaOtterSolid } from "react-icons/lia";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  return (
    <footer className="footer" ref={footerRef}>
      <motion.div
        className="footer-left"
        custom={0}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <p id="title-footer">MAKE YOUR DREAMS COME TRUE.</p>
      </motion.div>

      <motion.div
        className="footer-right"
        custom={1}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={itemVariants}
      >
        <div className="footer-top">
          <span id="title-top">¿Tienes un proyecto en mente?, </span>
          <span>
            <a className="footer-button">Contactanos</a>
          </span>
        </div>

        <div className="footer-bottom">
          <p>
            <ul id="footer-links">
              <li>
                <a className="cta" href="https://www.instagram.com/ottersolutions" target="_blank" rel="noopener noreferrer">
                  <span className="hover-underline-animation"> INSTAGRAM </span>
                </a>
              </li>
              <li>
                <a className="cta" href="https://www.facebook.com/ottersolutions" target="_blank" rel="noopener noreferrer">
                  <span className="hover-underline-animation"> FACEBOOK </span>
                </a>
              </li>
              <li>
                <a className="cta" href="https://www.x.com/ottersolutions" target="_blank" rel="noopener noreferrer">
                  <span className="hover-underline-animation"> TWITTER </span>
                </a>
              </li>
            </ul>
          </p>
        </div>

        <motion.div
          className="footer-copyright"
          custom={2}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <p id="footer-date">
            &copy; {new Date().getFullYear()} Otter Solutions Team <LiaOtterSolid id="otter-icon"/>
          </p>
        </motion.div>
      </motion.div>
    </footer>
  );
}
