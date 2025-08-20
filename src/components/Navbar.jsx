import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../../public/logo_blanco.png';
import { FaTimes, FaBars } from "react-icons/fa";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <>
            <nav className="nav-glass">
                <div className='nav-container'>
                <div className="nav-logo">
                   <img src={logo} alt="Mottoso" id="logo" />
                </div>

                <div className="menu-toggle" onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li className='nav-line'></li>
                    <CustomLink to="/" closeMenu={closeMenu} id="n1">INICIO</CustomLink>
                    <CustomLink to="/" closeMenu={closeMenu} id="n2">NOSOTROS</CustomLink>
                    <CustomLink to="/" closeMenu={closeMenu} id="n3">HABILIDADES</CustomLink>
                    <li className='nav-line'></li>
                </ul>
                </div>
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