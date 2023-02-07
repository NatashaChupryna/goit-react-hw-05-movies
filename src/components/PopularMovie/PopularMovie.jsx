import { useState, useEffect } from 'react';
import { getPopularMovies } from '../API/MovieAPI';
import { List, Title } from './PopularMovie.styled';
import {MovieList } from '../MovieList/MovieList'
import { Loader } from '../Loader/Loader';

export const PopularMovie = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function createMoviesMarkup() {
      setLoading(true)
      try {
        const PopularMovie = await getPopularMovies();
        if (!PopularMovie) {
          throw new Error();
        }
        setMovies(PopularMovie.results);
      } catch (error) {
        console.log(error);
      }finally{
        setLoading(false)
      }
    }
    createMoviesMarkup();
  }, []);

  return (
    <>
    {loading && <Loader></Loader>}
      <Title>Trending movies </Title>
      <List>
        {movies.map(movie => (<MovieList key={movie.id} movie={movie}></MovieList>))}
      </List>
    </>
  );
};
