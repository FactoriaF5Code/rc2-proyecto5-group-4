import "./SearchTool.css";
import { useState, useEffect } from "react";
import options from "../Axios/Axios.jsx";

export default function SearchTool() {
  const [searchValue, setSearchValue] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  useEffect(() => {
    if (searchValue) {
      fetch(
        `https://api.themoviedb.org/3/search/multi?include_adult=false&language=es-ES&&query=${searchValue}`,
        options
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchResults(data.results);
        })
        .catch((err) => console.error(err));
    }
  }, [searchValue]);

  return (
    <div className="search-tool-container">
      <div className="search">
        <input
          className="buscador"
          type="search"
          placeholder="Buscar"
          value={searchValue}
          onChange={handleSearchChange}
        />
      </div>

      {searchValue && (
        <section className="search-results">
          {searchResults.map((result) => (
            <article className="result-container" key={result.id}>
              <h2 className="result-title-name">
                {result.title || result.name}
              </h2>
              <img
                className="result-poster"
                src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                alt={result.title || result.name}
              />
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
