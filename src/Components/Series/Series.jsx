import "./Series.css";

import { useState, useEffect } from "react";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODU5ZDU5MzFiNThhZWIwNGQ1NzE0ZDIxZTJhZDM4ZSIsInN1YiI6IjY1OTNlYzVhYTU4OTAyNzExOTk3NmNmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHDZ7xzcrZG0xcGzzX24WKxHEv6w9wPNOCxVt0pM8SE",
  },
};

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
      {series.map((serie) => (
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
