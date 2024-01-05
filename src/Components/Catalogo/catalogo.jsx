import './catalogo.css';
import { useEffect, useState } from 'react'

 const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU5ZDU5MzFiNThhZWIwNGQ1NzE0ZDIxZTJhZDM4ZSIsInN1YiI6IjY1OTNlYzVhYTU4OTAyNzExOTk3NmNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHDZ7xzcrZG0xcGzzX24WKxHEv6w9wPNOCxVt0pM8SE'
  }
};

function Catalogo() {
  const [films, setFilms] = useState([])
  useEffect(() => {
    const pagesToFetch = [1, 5, 6]; 
    pagesToFetch.forEach(page => {
      fetch(`https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=${page}`, options)
        .then(response => response.json())
        .then(response => setFilms(prevFilms => [...prevFilms, ...response.results]))
        .catch(err => console.error(err));
    });
  }, [])
  return (
    <div className='poster-container'>

      {films.map(film =>(<img className='poster-film' src= 
      {`https://image.tmdb.org/t/p/w500${film.backdrop_path}`} 
      key={film.id} /> ))}
    </div>
  );
}

export default Catalogo;
