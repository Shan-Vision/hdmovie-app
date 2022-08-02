import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'service/FetchMovies';
import styled from 'styled-components';

const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;
const ReviewItem = styled.li`
  min-width: 320px;
  padding: 10px 15px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  border-radius: 4px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
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

// {credits?.length === 0 && }
