import {useEffect, useState} from 'react';
import axios from '../Axios/Axios';
import './Row.css';
import PropTypes from 'prop-types';

const base_url = "https://image.tmdb.org/t/p/original/";


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
            const catalogo = await axios.get(fetchUrl);
            setMovies(catalogo.data.results);
            return catalogo; 
        }
        fetchData();
    }, [fetchUrl]);
    
    console.log(movies);
    
    return (
        <div className="row">
            <h2>{title}</h2>
            
            <div className="row__posters">
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}

Row.propTypes = {
    title: PropTypes.string.isRequired,
    fetchUrl: PropTypes.string.isRequired,
    isLargeRow: PropTypes.bool
  };

export default Row