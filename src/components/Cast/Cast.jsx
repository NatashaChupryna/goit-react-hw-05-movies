import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { nanoid } from 'nanoid';
import { CastList, CastListItem, CastName, CastRole } from './Cast.styled';
import defaultCast from '../../images/defaultCast.png';
import { Loader } from '../Loader/Loader';
import { getMovieCredits } from '../API/MovieAPI';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    async function fetchMovieCredits(id) {
      try {
        const response = await getMovieCredits(id);
        setCast(response.cast);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchMovieCredits(id);
  }, [id]);

  return (
    <>
      {loading && <Loader></Loader>}
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
    </>
  );
};

export default Cast