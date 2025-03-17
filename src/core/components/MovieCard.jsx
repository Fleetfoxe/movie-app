import React from "react";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";

export default function MovieCard({ movie }) {
  return (
    <Card
      sx={{
        display: "flex",
        width: "100%",
        borderRadius: 2,
        boxShadow: 3,
        p: 1, // Padding based on size
      }}
      size="small" // Adjust card size dynamically
    >
      {/* Movie Poster */}
      <CardMedia
        component="img"
        sx={{ width: 80, height: 120, objectFit: "cover" }}
        image={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/100x150"}
        alt={movie.Title}
      />

      {/* Movie Details */}
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", padding: 1 }}>
        <Typography variant="h6" size="medium">{movie.Title}</Typography>
        <Typography variant="body2" color="gray" size="small">
          {movie.Year}
        </Typography>
      </Box>
    </Card>
  );
}
