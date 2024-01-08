import { useEffect, useState} from "react";
import Slider from "react-slick";
import "./Row.css";


const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU5ZDU5MzFiNThhZWIwNGQ1NzE0ZDIxZTJhZDM4ZSIsInN1YiI6IjY1OTNlYzVhYTU4OTAyNzExOTk3NmNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHDZ7xzcrZG0xcGzzX24WKxHEv6w9wPNOCxVt0pM8SE",
  },
};

async function obtenerPeliculasPorGenero(genreId) {
  const response = await fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${genreId}&language=es`,
    options
  );
  const data = await response.json();
  return data.results;
}

const Row = ({ genreId }) => {
  const generosDePeliculas = {
    Acción: 28,
    Comedia: 35,
    Drama: 18,
    Aventura: 12,
    Horror: 27,
    Histórica: 36,
    Western: 37,
  };

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
  }, [genreId]);

  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    rows: 1,
    
   };

    return (
      <section className="list-container">
        <h2 className="movie-tittle">{genreId}</h2>
        <Slider {...settings} >
          <article className="movie-container">
            {peliculas.map((movie) => (
              <img
                key={movie.id}
                className="movie-poster"
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title}
              />
            ))}
          </article>
        </Slider>
      </section>
    );
  }

export default Row;
