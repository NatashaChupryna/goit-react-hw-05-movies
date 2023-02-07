import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../API/MovieAPI';
import { Loader } from '../Loader/Loader';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();


  useEffect(() => {
    setLoading(true);
    async function fetchReviews() {
      try {
        const response = await getMovieReviews(id);
        if (!response) {
          setError('We don`t have reviews for this movie');
        }
        setReviews(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
        setError(null);
      }
    }
    fetchReviews();
  }, [id]);

  return (
    <>
      {loading && <Loader></Loader>}
      
      {!reviews.length ? <p>We don`t have reviews for this movie</p> : <ul>
        {reviews.map(item => (
          <li key={item.id}>
            <b>{item.author}</b>
            <p>
              &#8222;
              {item.content}
              &#8222;
            </p>
          </li>
        ))}
      </ul>}
      
    </>
  );
};
