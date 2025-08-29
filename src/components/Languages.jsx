import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiNextdotjs,
  SiMysql,
  SiThreedotjs,
  SiPhp,
  SiTailwindcss,
  SiBootstrap,  
  SiTypescript,
} from "react-icons/si";
import { motion } from "framer-motion";
import "../styles/languages.css";

export default function Languages() {
  const languages = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Three.js", icon: <SiThreedotjs /> },
    { name: "Mysql", icon: <SiMysql  /> },
    { name: "PHP", icon: <SiPhp /> },
    { name: "Tailwind", icon: <SiTailwindcss  /> },
    { name: "Bootstrap", icon: <SiBootstrap  /> },
    { name: "Typescript", icon: <SiTypescript   /> },
    { name: "React native", icon: <SiReact /> },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="languages-container">
      {languages.map((lang, index) => (
        <motion.div
          className="language-item"
          key={index}
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"      // dispara al entrar en pantalla
          viewport={{ once: true }}  // solo se anima la primera vez
          transition={{ delay: index * 0.15 }} // pequeña ola
        >
          <div className="icon">{lang.icon}</div>
          <span>{lang.name}</span>
        </motion.div>
      ))}
    </div>
  );
}
