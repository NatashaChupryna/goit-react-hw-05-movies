import { useState, useEffect } from 'react';
import { getPopularMovies } from '../API/MovieAPI';
import { List, Title } from './PopularMovie.styled';
import {MovieList } from '../MovieList/MovieList'

export const PopularMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function createMoviesMarkup() {
      try {
        const PopularMovie = await getPopularMovies();
        if (!PopularMovie) {
          throw new Error();
        }
        setMovies(PopularMovie.results);
      } catch (error) {
        console.log(error);
      }
    }
    createMoviesMarkup();
  }, []);

  return (
    <main>
      <Title>Trending movies :</Title>
      <List>
        {movies.map(movie => (<MovieList key={movie.id} movie={movie}></MovieList>))}
      </List>
    </main>
  );
};
