import { useEffect, useState } from 'react';
import './Row.css'

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU5ZDU5MzFiNThhZWIwNGQ1NzE0ZDIxZTJhZDM4ZSIsInN1YiI6IjY1OTNlYzVhYTU4OTAyNzExOTk3NmNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHDZ7xzcrZG0xcGzzX24WKxHEv6w9wPNOCxVt0pM8SE'
  }
};

async function obtenerPeliculasPorGenero(genreId) {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=&with_genres=${genreId}`, options);
    const data = await response.json();
    return data.results;
}

const Row = () => {
    const generosDePeliculas = {
        accion: 28,
        comedia: 35,
        drama: 18,
        cienciaFiccion: 878,
        aventura: 12,
    };

    const [peliculas, setPeliculas] = useState({});

    useEffect(() => {
        const fetchMovies = async () => {
            const newMovies = {};
            for (const genre in generosDePeliculas) {
                const genreId = generosDePeliculas[genre];
                newMovies[genre] = await obtenerPeliculasPorGenero(genreId);
            }
            setPeliculas(newMovies);
        };

        fetchMovies();
    }, []);

    return (
        <div>
            {Object.keys(peliculas).map((genre) => (
                <div key={genre}>
                    <h2>{genre}</h2>
                    {peliculas[genre].map((movie) => (
                        <img
                            key={movie.id}
                            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                            alt={movie.title}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Row;