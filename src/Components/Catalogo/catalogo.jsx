import "./catalogo.css";
import { useEffect, useState } from "react";
import options from "../Axios/Axios";

function Catalogo() {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const pagesToFetch = [1, 5, 6];
    pagesToFetch.forEach((page) => {
      fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`,
        options
      )
        .then((response) => response.json())
        .then((response) =>
          setFilms((prevFilms) => [...prevFilms, ...response.results])
        )
        .catch((err) => console.error(err));
    });
  }, []);
  return (
    <div className="poster-container">
      {films
        .filter((film) => film.backdrop_path) // Filtrar películas sin backdrop_path
        .map((film) => (
          <img
            className="poster-film"
            src={`https://image.tmdb.org/t/p/w500${film.backdrop_path}`}
            key={film.id}
            alt={film.title}
          />
        ))}
    </div>
  );
}

export default Catalogo;
