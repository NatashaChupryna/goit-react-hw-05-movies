import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { getMovieReviews } from '../API/MovieAPI';
import { Loader } from '../Loader/Loader';
import { ReviewsList, AuthorName, AuthorText } from './Reviews.styled';

const Reviews = () => {
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

      {!reviews.length ? (
        <p>We don`t have reviews for this movie</p>
      ) : (
        <ReviewsList>
          {reviews.map(item => (
            <li key={item.id}>
              <AuthorName>
                <BsFillPersonFill /> {item.author}
              </AuthorName>
              <AuthorText>{item.content}</AuthorText>
            </li>
          ))}
        </ReviewsList>
      )}
    </>
  );
};

export default Reviews;
