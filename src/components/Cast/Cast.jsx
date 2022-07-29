import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/FetchMovies';
import { CastItemInfo, InfoBox, CastList } from './Cast.styled'

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    getMovieCredits(movieId).then(cast => setCredits(cast));
  }, [movieId]);
  if (!credits) return;

  return (
    <CastList>
      {credits.map(({ character, original_name, profile_path, id }) => (
        <CastItemInfo key={id}>
          <img
            src={`${IMAGE_URL}${profile_path}`}
            alt={original_name}
            width="150"
          />
          <InfoBox>
            <p>
              <b>{original_name}</b>
            </p>
            <p>{character}</p>
          </InfoBox>
        </CastItemInfo>
      ))}
    </CastList>
  );
};

export default Cast;
