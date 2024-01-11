import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logoNetflix.png";
import SearchIcon from "@mui/icons-material/Search";
import { grey } from "@mui/material/colors";

export default function Header() {
  return (
    <header>
      <section className="headerContainer">
        <nav>
          <Link to="/">
            <img src={logo} alt="Netflix" className="logo" />
          </Link>
          <Link to="/" className="navLink">
            Inicio
          </Link>
          <Link to="Series" className="navLink">
            Series
          </Link>
          <Link to="Peliculas" className="navLink">
            Películas
          </Link>
        </nav>
        <div className="right-container">
          <Link to="Busqueda">
            <SearchIcon
              sx={{
                color: grey[300],
                fontSize: 30,
                "&:hover": {
                  color: grey[500],
                },
              }}
            />
          </Link>
        </div>
      </section>
    </header>
  );
}
