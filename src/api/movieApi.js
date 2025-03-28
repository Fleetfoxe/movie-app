const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;
const BASE_URL = "http://www.omdbapi.com/";

const fetchMovies = async (query) => {
  try {
    const response = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
    const data = await response.json();
    return data.Search || [];
  } catch (error) {
    console.error("Error fetching movies:", error);
    return [];
  }
};


export { fetchMovies };