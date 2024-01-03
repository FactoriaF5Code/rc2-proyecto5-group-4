import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <section className="socialNetwork">
                <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                </a>
                <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                </a>
                <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
                    <FaInstagram />
                </a>
            </section>
            <section className="menu">
                <Link to="/audiodescripcion">Audiodescripción</Link>
                <Link to="/centroDeAyuda">Centro de ayuda</Link>
                <Link to="/tarjetasRegalo">Tarjetas regalo</Link>
                <Link to="/zonaDePrensa">Zona de prensa</Link>
                <Link to="/inversores">Inversores</Link>
                <Link to="/empleo">Empleo</Link>
                <Link to="/terminosdeuso">Términos de uso</Link>
                <Link to="/privacidad">Privacidad</Link><Link to="/menu-item-1">Menú Item 1</Link>
                <Link to="/avisosLegales">Avisos legales</Link><Link to="/menu-item-1">Menú Item 1</Link>
                <Link to="/preferenciasDeCookies">Preferencias de cookies</Link>
                <Link to="/informacionCorporativa">Información corporativa</Link>
                <Link to="/contactanos">Contáctanos</Link>
                <Link to="/opcionesDeAnuncios">Opciones de anuncios</Link>
            </section>
            <p>© 1997-2024 Netflix, Inc.</p>
        </footer>
    );
};

export default Footer;
