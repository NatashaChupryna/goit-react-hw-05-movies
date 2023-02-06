import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getMovieByName } from '../API/MovieAPI';
import toast from 'react-hot-toast';
import { Form, Input, SearchingButton, List } from './SearchForm.styled';
import { MovieList2 } from '../MovieList/MovieList';

export const SearchingForm = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  //   const visibleMovies = movies.filter((movie) =>
  //   movie.title.toLowerCase().includes(query.toLowerCase())
  // );

  const handleQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
    setSearchParams({ query: event.target.value });
  };

  // const updateQueryString = (query) => {
  //   const nextParams = query !== "" ? {query} : {};
  //   setSearchParams(nextParams);
  // };

  console.log(searchParams);

  const handleSubmit = async event => {
    event.preventDefault();
    if (movieName === '') {
      toast.error('Please enter your request');
      return;
    }
    const movie = await getMovieByName(movieName);
    if (!movie) {
      throw new Error();
    }
    setMovies(movie.results);
    event.target.reset();
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={movieName}
          placeholder="Find a movie"
          onChange={handleQueryChange}
        />
        <SearchingButton type="submit">&#128269; Let`s go</SearchingButton>
      </Form>

      {movies && (
        <List>
          {movies.map(movie => (
            <MovieList2 key={movie.id} movie={movie}></MovieList2>
          ))}
        </List>
      )}
    </>
  );
};
