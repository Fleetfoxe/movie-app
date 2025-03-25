import { useParams } from "react-router";
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from "react-router";
import {
  Container,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function MovieDetails() {
  let params = useParams();
  const id = params.MovieId;
  const [movie, setMovie] = useState(null);
  const API_KEY = import.meta.env.VITE_MOVIE_API_KEY;

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`);
      const data = await response.json();
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return (
      <Container sx={{ textAlign: 'center', mt: 5 }}>
        <CircularProgress />
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Button
        variant="outlined"
        startIcon={<ArrowBackIcon />}
        component={RouterLink}
        to="/"
        sx={{ mb: 2 }}
      >
        Back to Search Results
      </Button>

      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
        <CardMedia
          component="img"
          image={movie.Poster !== 'N/A' ? movie.Poster : '/no-image.jpg'}
          alt={movie.Title}
          sx={{ width: { xs: '100%', sm: 300 }, objectFit: 'cover' }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{movie.Title}</Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {movie.Year} | {movie.Genre} | {movie.Runtime}
          </Typography>
          <Typography variant="body1" paragraph>{movie.Plot}</Typography>
          <Typography variant="body2"><strong>IMDB Rating:</strong> {movie.imdbRating}</Typography>
          <Typography variant="body2"><strong>Metascore:</strong> {movie.Metascore}</Typography>
          <Typography variant="body2" sx={{ mt: 1 }}><strong>Director:</strong> {movie.Director}</Typography>
          <Typography variant="body2"><strong>Actors:</strong> {movie.Actors}</Typography>
        </CardContent>
      </Card>
    </Container>
  );
}
