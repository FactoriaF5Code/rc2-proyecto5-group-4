import "./Series.css";

import { useEffect, useState } from "react";

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
    fetch(
      "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => setSeries(response.results))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="poster-container">
      {series.map((serie) => (
        <img
          className="poster-serie"
          src={`https://image.tmdb.org/t/p/w500${serie.backdrop_path}`}
          key={serie.id}
        />
      ))}
    </div>
  );
}
