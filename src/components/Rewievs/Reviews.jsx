import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from '../API/MovieAPI';


export const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { id } = useParams;

  console.log('Reviews id', id);
  
  useEffect(() => {
    async function fetchReviews() {
      try {
        const response = await getMovieReviews(505642);
        setReviews(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchReviews(505642);
  }, [id]);

  return (
    <ul>
      {reviews.map(item => (
        <li key={item.id}>
          {' '}
          <b>{item.author}</b>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
};
