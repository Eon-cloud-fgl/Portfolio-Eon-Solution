import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../../public/219932592.png';
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="nav-glass">
                <div className="nav-logo">
                   <img src={logo} alt="Mottoso" id="logo" />
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <CustomLink to="/" closeMenu={closeMenu}>Inicio</CustomLink>
                    <CustomLink to="/" closeMenu={closeMenu}>Nosotros</CustomLink>
                    <CustomLink to="/" closeMenu={closeMenu}>Habilidades</CustomLink>
                </ul>
            </nav>

        </>
    );
}

function CustomLink({ to, children, closeMenu, ...props }) {
    const path = window.location.pathname;
    return (
        <li className={path === to ? "active" : ""} onClick={closeMenu}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    );
}