import { useState, useEffect } from 'react'
import { SearchBar } from "../components/SearchBar";
import { fetchMovies } from "../../api/movieApi";
import { Link } from "react-router";
import Button from '@mui/material/Button';

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
            <div key={movie.imdbID} className="movie-item">
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} width="100" />
              <Link to={`/movie/${movie.imdbID}`}><Button variant="contained">See more</Button></Link>
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
