import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { CastList, CastListItem, CastName, CastRole } from './Cast.styled';
import defaultCast from '../../images/defaultCast.png';

import { getMovieCredits } from '../API/MovieAPI';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { id } = useParams();

console.log('Cast id', id)

  useEffect(() => {
    async function fetchMovieCredits(id) {
      try {
        const response = await getMovieCredits(id);
        setCast(response.cast);
      } catch (error) {
        console.error(error);
      }
    }
    fetchMovieCredits(id);
  }, [id]);

  return (
    <CastList>
      {cast.map(actor => (
        <CastListItem key={nanoid()}>
          <img
            src={
              actor.profile_path
                ? `https://image.tmdb.org/t/p/w500${actor.profile_path}`
                : defaultCast
            }
            alt={actor.name}
            width={120}
            height={180}
          />
          <CastName>{actor.name}</CastName>
          <CastRole>{actor.character}</CastRole>
        </CastListItem>
      ))}
    </CastList>
  );
};
