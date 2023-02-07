import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../API/MovieAPI';
import toast from 'react-hot-toast';
import { Form, Input, SearchingButton, List } from './SearchForm.styled';
import { MovieList } from '../MovieList/MovieList';
import { Loader } from '../Loader/Loader';

export const SearchingForm = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') || '';

  const visibleMovies = movies.filter(movie =>
    movie.title.toLowerCase().includes(movieName.toLowerCase())
  );

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const queryString = form.search.value;
    if (queryString === '') {
      return toast.error('Enter movie name');
    }
    setSearchParams({ query: queryString });
    form.reset();
  };

  useEffect(() => {
    if (movieName === '') {
      return;
    }
    setLoading(true);
    getMovieByName(movieName).then(data => setMovies(data.results));
    setLoading(false);
  }, [movieName]);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input type="text" name="search" placeholder="Find a movie" />
        <SearchingButton type="submit">&#128269; Let`s go</SearchingButton>
      </Form>

      {loading && <Loader></Loader>}

      {movies && (
        <List>
          {visibleMovies.map(movie => (
            <MovieList key={movie.id} movie={movie}></MovieList>
          ))}
        </List>
      )}
    </>
  );
};
