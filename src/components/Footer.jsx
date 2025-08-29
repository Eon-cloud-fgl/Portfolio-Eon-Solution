import "../styles/footer.css";
import { LiaOtterSolid } from "react-icons/lia";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <p id="title-footer">MAKE YOUR DREAMS COME TRUE.</p>
      </div>
      <div className="footer-right">
        <div className="footer-top">
        <span id="title-top">¿Tienes un proyecto en mente?, </span><span><a className="footer-button">Contactanos</a> </span>
        </div>
        <div className="footer-bottom">
        <p>
          <ul id="footer-links">
            <li>
            <a class="cta" href="https://www.instagram.com/ottersolutions" target="_blank" rel="noopener noreferrer">
              <span class="hover-underline-animation"> INSTAGRAM </span>
            </a>
            </li>
            <li>
            <a class="cta" href="https://www.facebook.com/ottersolutions" target="_blank" rel="noopener noreferrer">
              <span class="hover-underline-animation"> FACEBOOK </span>
            </a>
            </li>
                        <li>
            <a class="cta" href="https://www.x.com/ottersolutions" target="_blank" rel="noopener noreferrer">
              <span class="hover-underline-animation"> TWITTER </span>
            </a>
            </li>
          </ul>
        </p>
        </div>
        <div className="footer-copyright">
        <p id="footer-date"> &copy; {new Date().getFullYear()} Otter Solutions Team <LiaOtterSolid id="otter-icon"/></p>
        </div>
      </div>
    </footer>
  );
}