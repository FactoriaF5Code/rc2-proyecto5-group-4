import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logoNetflix.png";

export default function Header() {
  return (
    <header>
      <section className="headerContainer">
        <img src={logo} alt="Netflix" className="logo" />
        <nav>
          <Link to="Peliculas" className="navLink">Inicio</Link>
          <Link to="Series" className="navLink">Series</Link>
          <Link to="Peliculas" className="navLink">Películas</Link>
          <Link to="Series" className="navLink">Explorar por idiomas</Link>
        </nav>
      </section>
    </header>
  );
}
