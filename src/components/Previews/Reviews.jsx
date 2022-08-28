import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/FetchMovies';
import { ReviewList, ReviewItem } from './Previews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getMovieReviews(movieId).then(setReviews);
  }, [movieId]);
  if (!reviews) return;

  return (
    <div>
      {reviews && (
        <ReviewList>
          {reviews.map(({ author, content, id }) => (
            <ReviewItem key={id}>
              <p>
                Author: <b>{author}</b>
              </p>
              <p>{content}</p>
            </ReviewItem>
          ))}
        </ReviewList>
      )}
      {reviews?.length === 0 && <p>There is no information</p>}
    </div>
  );
};

export default Reviews;
