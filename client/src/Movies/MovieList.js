import React from 'react';
import {Link} from 'react-router-dom';

import MovieCard from './MovieCard';

const MovieList = props => {
  // console.log("Props (MovieList)",props);
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <Link to={`/movies/${movie.id}`} style={{ textDecoration: 'none' }}>
      <MovieCard movie={movie} />
    </Link>
  );
}

export default MovieList;
