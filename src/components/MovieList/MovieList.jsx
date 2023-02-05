import React from 'react';
import { Link } from 'react-router-dom';
import { ListItem } from './MovieList.styled';
import defaultMovie from '../../images/defaultMovie.png'

export const MovieList = ({ movie }) => {
  return (
    <ListItem key={movie.id}>
      
        <Link to={`movies/${movie.id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          width="300px"
          height={450}
        />
      </Link>
      {movie.original_title}
    </ListItem>
  );
};

export const MovieList2 = ({ movie }) => {
    return (
      <ListItem>
        
          <Link to={`${movie.id}`}>
          <img
            src={movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultMovie}
            alt={movie.title}
            width="300px"
            height={450}
          />
        </Link>
        {movie.original_title}
      </ListItem>
    );
  };

