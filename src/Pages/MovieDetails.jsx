import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../components/API/MovieAPI';
import { MovieCard } from 'components/MovieCard/MovieCard';
import { BsFillCameraReelsFill, BsFillChatRightQuoteFill } from 'react-icons/bs';
import styled from '@emotion/styled';

const MovieDetails = () => {
  const [movieCard, setMovieCard] = useState([]);
  const { id } = useParams();
  const location = useLocation();
  const locationRef = useRef(location.state.from ?? '/movies');

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
      <BackButton to={locationRef.current}> &#8678; Back</BackButton>

      <MovieCard item={movieCard}></MovieCard>

      <List>
        <li>
          <StyledLink to="cast" state={{ from: location }}>
            	
<BsFillCameraReelsFill/> Cast
          </StyledLink>
        </li>
        <li>
          <StyledLink to="reviews" state={{ from: location }}>
           <BsFillChatRightQuoteFill/> Reviews
          </StyledLink>
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
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    color: red;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  gap: 20px;
  padding: 0;
`;

const BackButton = styled(Link)`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 20px;
  padding: 5px;
  text-decoration: none;
  transition: 400ms;
  &:hover {
    color: red;
  }
`;
export default MovieDetails;
