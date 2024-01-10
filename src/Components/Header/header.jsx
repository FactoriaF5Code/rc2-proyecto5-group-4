import { useState, useEffect } from 'react';
import "./header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logoNetflix.png";
import SearchIcon from '@mui/icons-material/Search';
import options from "../Axios/Axios"





/* const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU5ZDU5MzFiNThhZWIwNGQ1NzE0ZDIxZTJhZDM4ZSIsInN1YiI6IjY1OTNlYzVhYTU4OTAyNzExOTk3NmNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHDZ7xzcrZG0xcGzzX24WKxHEv6w9wPNOCxVt0pM8SE",
  },
}; */

export default function Header() {
  const [showInput, setShowInput] = useState(false);
  const [searchValue, setSearchValue] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      fetch(`https://api.themoviedb.org/3/search/multi?include_adult=false&language=es-ES&&query=${searchValue}`, options)
        .then(response => response.json())
        .then(data => {
          setSearchResults(data.results);
        })
        .catch(err => console.error(err));
    }
  }, [searchValue]);

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
        <input className='buscador' type="search" placeholder="Buscar" value={searchValue} onChange={handleSearchChange} />
      )}
      {searchValue && (
  <ul className="search-results">
    {searchResults.slice(0, 3).map(result => (
      <li key={result.id}>
        <div className="result-container">
          <h2>{result.title || result.name}</h2>
          <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.title || result.name} />
        </div>
      </li>
    ))}
  </ul>
)}
    </div>
      </section>
    </header>
  );
}
