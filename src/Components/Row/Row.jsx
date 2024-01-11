/* eslint-disable react/prop-types */
import { useEffect, useState, useMemo } from "react";
import Slider from "react-slick";
import "./Row.css";
import "./slick.css";
import "./slick-theme.css";
import "slick-carousel";
import options from "../Axios/Axios";

async function obtenerPeliculasPorGenero(genreId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${genreId}&language=es`,
    options
  );
  const data = await response.json();
  return data.results;
}

const Row = ({ genreId }) => {
  const generosDePeliculas = useMemo(
    () => ({
      Acción: 28,
      Comedia: 35,
      Drama: 18,
      Aventura: 12,
      Horror: 27,
      Histórica: 36,
      Western: 37,
    }),
    []
  );

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const genreMovies = await obtenerPeliculasPorGenero(
          generosDePeliculas[genreId]
        );
        setPeliculas(genreMovies);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [genreId, generosDePeliculas]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    rows: 1,
  };

  return (
    <section className="list-container">
      <h2 className="movie-tittle">{genreId}</h2>
      <Slider {...settings}>
        {peliculas.map((movie) => (
          <img
            key={movie.id}
            className="movie-poster"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
            alt={movie.title}
          />
        ))}
      </Slider>
    </section>
  );
};

export default Row;
