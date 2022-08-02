import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'service/FetchMovies';
import { CastItemInfo, InfoBox, CastList } from './Cast.styled';
import ImageDefault from '../../poster/poster.jpg';

const Cast = () => {
  const [credits, setCredits] = useState([]);
  const { movieId } = useParams();

  const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getMovieCredits(movieId).then(cast => setCredits(cast));
  }, [movieId]);
  if (!credits) return;

  return (
    <>
      {credits && (
        <CastList>
          {credits
            .slice(0, 21)
            .map(({ character, original_name, profile_path: avatar, id }) => (
              <CastItemInfo key={id}>
                <img
                  src={avatar ? `${IMAGE_URL}${avatar}` : ImageDefault}
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
      )}
      {credits?.length === 0 && <p>There is no information</p>}
    </>
  );
};

export default Cast;
