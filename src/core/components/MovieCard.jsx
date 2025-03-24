import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import BrokenImageIcon from "@mui/icons-material/BrokenImage";

const MovieCard = ({ movie }) => {
  return (
    <Card sx={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", padding: 2, marginBottom: 2 }}>
      {movie.Poster !== "N/A" ? (
        <CardMedia
          component="img"
          sx={{ width: 120, height: 180, borderRadius: 1 }}
          image={movie.Poster}
          alt={movie.Title}
          onError={(e) => (e.target.src = "")}
        />
      ) : (
        <Box
          sx={{
            width: 120,
            height: 180,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#f0f0f0",
            borderRadius: 1,
          }}
        >
          <BrokenImageIcon sx={{ fontSize: 50, color: "#9e9e9e" }} />
        </Box>
      )}

      <CardContent sx={{ flex: 1, paddingLeft: 2 }}>
        <Typography data-testid="movie-title" variant="h6">{movie.Title}</Typography>
        <Typography variant="body2" color="textSecondary">
          {movie.Year}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
