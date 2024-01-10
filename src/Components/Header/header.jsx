import { useState } from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logoNetflix.png";
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
  const [showInput, setShowInput] = useState(false);

  return (
    <header>
      <section className="headerContainer">
        <img src={logo} alt="Netflix" className="logo" />
        <nav>
          <Link to="/" className="navLink">Inicio</Link>
          <Link to="Series" className="navLink">Series</Link>
          <Link to="Peliculas" className="navLink">Películas</Link>
        </nav>
        <div className="search">
          <SearchIcon className="icon" onClick={() => setShowInput(!showInput)} />
          {showInput && (
            <input className='buscador' type="text" placeholder="Buscar" />
          )}
        </div>
      </section>
    </header>
  );
}
