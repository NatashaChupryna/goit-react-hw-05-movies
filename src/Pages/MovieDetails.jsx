import { useState, useEffect } from 'react';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { getMovieDetails } from '../components/API/MovieAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import styled from '@emotion/styled';

export const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState({});
  const navigate = useNavigate()
  const { id } = useParams();

const goBack = () => navigate('/', {replace: true})

  useEffect(() => {
    async function createMovieCard(id) {
      try {
        const movie = await getMovieDetails(id);
        setMovieCard(movie.data);
      } catch (error) {
        console.log(error);
      }
    }
    createMovieCard(id);
  }, [id]);

  return (
  <>
  <BackButton onClick={goBack}> &#8678; Go back</BackButton>
      <MovieCard item={movieCard}></MovieCard>

      <List>
        <li>
          <StyledLink to="cast">Cast</StyledLink>
        </li>
        <li>
          <StyledLink to="reviews">Reviews</StyledLink>
        </li>
      </List>
      <Outlet />
      </>
  );
};

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  transition: 300ms;
  &:hover{
    color: red;
  }
`
const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`
const BackButton = styled.button`
    background-color: transparent;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    margin-bottom: 14px;
    padding: 5px;
`