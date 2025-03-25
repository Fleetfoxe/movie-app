import React from "react";
import { Link } from "react-router";
import { List, ListItem, Divider } from "@mui/material";
import MovieCard from "./MovieCard";

export default function SearchResults({ movies }) {
  return (
    <List size="large" sx={{ width: "100%", bgcolor: "background.paper", mt: 3, ml: 1 }}>
      {movies.length > 0 ? (
        movies.map((movie, index) => (
          <React.Fragment key={movie.imdbID}>
            <Link data-testid="search-item" to={`/movie/${movie.imdbID}`} style={{ textDecoration: "none", color: "inherit" }}>
              <ListItem size="medium">
                <MovieCard movie={movie} />
              </ListItem>
            </Link>
            {index < movies.length - 1 && <Divider />}
          </React.Fragment>
        ))
      ) : (
        <ListItem size="small" sx={{ textAlign: "center", color: "gray" }}>
          No movies found.
        </ListItem>
      )}
    </List>
  );
}
