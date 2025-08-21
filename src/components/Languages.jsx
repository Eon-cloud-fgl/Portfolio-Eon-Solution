import {
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiPython,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import "../styles/languages.css";

export default function Languages() {
  const languages = [
    { name: "React", icon: <SiReact /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML5", icon: <SiHtml5 /> },
    { name: "CSS3", icon: <SiCss3 /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
  ];

  // duplicamos para loop infinito
  const repeated = [...languages];

  return (
    <div className="languages-container">
      <div className="languages-track">
        {repeated.map((lang, index) => (
          <div className="language-item" key={index}>
            <div className="icon">{lang.icon}</div>
            <span>{lang.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
