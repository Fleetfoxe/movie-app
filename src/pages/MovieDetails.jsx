import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { Link } from "react-router";



export default function MovieDetails() {
    let params = useParams();
    console.log("params: " + JSON.stringify(params))
    const id = params.MovieId;
    console.log("ID: " + id)
    const [movie, setMovie] = useState(null);
    const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

 
  useEffect(() => {
    const fetchMovie = async () => {
      console.log("API URL: " + `https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <div>Loading...</div>;

  console.log("Movie: " + JSON.stringify(movie))

  return (
    <>
      <Link to="/">← Back to Search Results</Link>
      <h1>{movie.Title}</h1>
      <h2>{movie.Year} </h2>
      <img src={movie.Poster} alt={movie.Title} width="100" />
      <h3>{movie.Plot} </h3>
      <h4>IMDB Rating: {movie.imdbRating} </h4>
      <h4>Metascore: {movie.Metascore} </h4>
    </>
    
  );
}

 