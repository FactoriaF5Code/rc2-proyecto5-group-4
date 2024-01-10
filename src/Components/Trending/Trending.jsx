import { useEffect, useState } from "react";
import "./Trending.css"
import "slick-carousel";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import InfoIcon from '@mui/icons-material/Info';


const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU5ZDU5MzFiNThhZWIwNGQ1NzE0ZDIxZTJhZDM4ZSIsInN1YiI6IjY1OTNlYzVhYTU4OTAyNzExOTk3NmNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHDZ7xzcrZG0xcGzzX24WKxHEv6w9wPNOCxVt0pM8SE",
    },
};


export default function Trending(){
const [films, setFilms] = useState([]);
const [showDescription, setShowDescription] = useState(false);

useEffect(() => {
    fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US', options)
  .then(response => response.json())
  .then(response => setFilms(response.results))
  .catch(err => console.error(err));
},[]
)



return(
    <div className="trending" onClick={() => setShowDescription(false)}>
        {films[0] && (
          <div className="container">
            <div className="gradiant">
                <img className="trending-image" src={`https://image.tmdb.org/t/p/w500${films[0].backdrop_path}`} alt={films[0].title} />
            </div>
            <div className="info">
                <h1 className="trending-title">{films[0].title}</h1>
            </div>

            <div className="button-container">
                <a href="https://www.youtube.com/watch?v=v0_gxsfmY4Q" target="blank">
                    <button className="play">
                        <PlayArrowIcon />  Reproducir
                    </button>
                </a>
                <button className="more-info" onClick={(e) => {e.stopPropagation(); setShowDescription(!showDescription)}}>
                        <InfoIcon /> Mas info
                    {showDescription && (
                        <div className="description-tooltip">
                            {films[0].overview}
                        </div>
                    )}
                </button>
            </div>
          </div>
        )}
    </div>
) 
}