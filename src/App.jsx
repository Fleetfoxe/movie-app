import { useState } from 'react'
import { SearchBar } from "./components/SearchBar";
import { fetchMovies } from "./api/movieApi";

function App() {
  const [movies, setMovies] = useState([]);

  const handleSearch = async (query) => {
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <>
      <div>
      <h1>Movie Search App</h1>
      <SearchBar onSearch={handleSearch} />
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.imdbID}>
              <h3>{movie.Title}</h3>
              <img src={movie.Poster} alt={movie.Title} width="100" />
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      </div>
            
    </>
  )
}

export default App
