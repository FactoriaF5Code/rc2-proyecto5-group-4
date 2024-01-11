import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="pagefoot">
        <section className="socialNetwork">
          <a
            href="https://www.facebook.com/tupagina"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook style={{ color: "#ffffff" }} />
          </a>
          <a
            href="https://twitter.com/tucuenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter style={{ color: " #ffffff" }} />
          </a>
          <a
            href="https://www.instagram.com/tucuenta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram style={{ color: "#ffffff " }} />
          </a>
        </section>
        <section className="menu">
          <h6>
            <a href="https://devices.netflix.com/es/">Audiodescripción</a>
          </h6>
          <h6>
            <a href="https://help.netflix.com/">Centro de ayuda</a>
          </h6>
          <h6>
            <a href="https://www.netflix.com/gift-cards">Tarjetas regalo</a>
          </h6>
          <h6>
            <a href="https://media.netflix.com/">Zona de prensa</a>
          </h6>
          <h6>
            <a href="https://ir.netflix.net/ir-overview/profile/default.aspx">
              Inversores
            </a>
          </h6>
          <h6>
            <a href="https://jobs.netflix.com/jobs">Empleo</a>
          </h6>
          <h6>
            <a href="https://help.netflix.com/legal/termsofuse">
              Términos de uso
            </a>
          </h6>
          <h6>
            <a href="https://help.netflix.com/legal/privacy">Privacidad</a>
          </h6>
          <h6>
            <a href="https://help.netflix.com/legal/notices">Avisos legales</a>
          </h6>
          <h6>
            <a href="https://www.netflix.com/es/">Preferencias de cookies</a>
          </h6>
          <h6>
            <a href="https://help.netflix.com/legal/corpinfo">
              Información corporativa
            </a>
          </h6>
          <h6>
            <a href="https://help.netflix.com/contactus">Contáctanos</a>
          </h6>
        </section>
        <section>
          <p>© 1997-2024 Netflix, Inc.</p>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
