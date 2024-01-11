import "./Series.css";
import { useState, useEffect } from "react";
import options from "../Axios/Axios";

export default function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const pagesToFetch = [1, 5, 6];
    pagesToFetch.forEach((page) => {
      fetch(
        `https://api.themoviedb.org/3/discover/tv?language=en-US&sort_by=popularity.desc&page=${page}`,
        options
      )
        .then((response) => response.json())
        .then((response) =>
          setSeries((prevSeries) => [...prevSeries, ...response.results])
        )
        .catch((err) => console.error(err));
    });
  }, []);

  return (
    <div className="poster-container">
      {series
        .filter((series) => series.backdrop_path) 
        .map((serie) => (
          <img
            className="poster-serie"
            src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
            key={serie.id}
            alt={serie.name}
          />
        ))}
    </div>
  );
}
