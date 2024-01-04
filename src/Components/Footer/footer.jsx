import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

import "./Footer.css";

const Footer = () => {
    return (
        <footer>
            <div className="pagefoot">
                <section className="socialNetwork">
                    <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
                        <FaFacebook style={{ color: "#ffffff" }} />
                    </a>
                    <a href="https://twitter.com/tucuenta" target="_blank" rel="noopener noreferrer">
                        <FaTwitter style={{ color: " #ffffff" }} />
                    </a>
                    <a href="https://www.instagram.com/tucuenta" target="_blank" rel="noopener noreferrer">
                        <FaInstagram style={{ color: "#ffffff " }} />
                    </a>
                </section>
                <section className="menu">
                    <h6>Audiodescripción</h6>
                    <h6>Centro de ayuda</h6>
                    <h6>Tarjetas regalo</h6>
                    <h6>Zona de prensa</h6>
                    <h6>Inversores</h6>
                    <h6>Empleo</h6>
                    <h6>Términos de uso</h6>
                    <h6>Privacidad</h6>
                    <h6>Avisos legales</h6>
                    <h6>Preferencias de cookies</h6>
                    <h6>Información corporativa</h6>
                    <h6>Contáctanos</h6>
                </section>
                <section>
                    <p>© 1997-2024 Netflix, Inc.</p>
                </section>
            </div>
        </footer>
    );
};

export default Footer;

