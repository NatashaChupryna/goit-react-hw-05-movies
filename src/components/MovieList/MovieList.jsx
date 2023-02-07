import React from 'react';
import { Link, useLocation} from 'react-router-dom';
import { ListItem } from './MovieList.styled';
import defaultMovie from '../../images/defaultMovie.png';

export const MovieList = ({ movie }) => {
  const location = useLocation();


  return (
    <ListItem key={movie.id}>
      <Link to={`movies/${movie.id}`} state={{ from: location }}>
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
              : defaultMovie
          }
          alt={movie.title}
          width="300px"
          height={450}
        />
      </Link>
      {movie.original_title}
    </ListItem>
  );
};
