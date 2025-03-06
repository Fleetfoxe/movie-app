import { useState, useEffect } from 'react'
import { SearchBar } from "../components/SearchBar";
import { fetchMovies } from "../../api/movieApi";
import { Link } from "react-router";

const LandingPage = () => {

    const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    
    if (results) {
      setMovies(results);
      sessionStorage.setItem("movies", JSON.stringify(results));
    }
  };

  useEffect(() => {
    const savedMovies = sessionStorage.getItem("movies");
    if (savedMovies) {
      setMovies(JSON.parse(savedMovies));
    }
  }, []);
  
  return <>{
    <div>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} width="100" />
              <Link to={`/movie/${movie.imdbID}`}>Movie details</Link>
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      </div>
  }</>;
};

export default LandingPage;
