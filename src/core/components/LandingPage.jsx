import { useState, useEffect } from 'react'
import { SearchBar } from "../components/SearchBar";
import { fetchMovies } from "../../api/movieApi";
import { Container, Box, Typography } from "@mui/material";
import SearchResults from "./SearchResults";

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
  
  return (
    <>
     <Typography variant="h3" align="center" sx={{ mt: 3 }}>
      Movie Search App
    </Typography>

    <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
      <SearchBar onSearch={handleSearch} />
    </Box>
    
    <Container size={{ mt: 4 }}>
      <SearchResults movies={movies} />
    </Container>
    </>
  );
};

export default LandingPage;
