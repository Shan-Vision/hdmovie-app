// import { useState } from 'react';
import { useEffect, useState } from 'react';
import { useParams, Outlet } from 'react-router-dom';
import { getMovieById } from 'service/FetchMovies';
import MovieExtraInfo from 'components/MovieExtraInfo/MovieExtraInfo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 15px 0;
  border-bottom: 2px solid #ccc;
`;
const MovieInfo = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const List = styled.ul`
  display: flex;
  gap: 10px;
`;

const MovieDetails = () => {
  const { movieId } = useParams();
  const [detail, setDetail] = useState([]);
  const genreList = [];
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    getMovieById(movieId).then(movie => setDetail(movie));
  }, [movieId]);

  if (!detail.genres) {
    return null;
  }
  detail.genres.map(genre => genreList.push(genre.name));

  return (
    <main>
      <button type="button">Go back</button>
      <Container>
        <img
          src={`${IMAGE_URL}${detail.poster_path}`}
          alt={detail.origin_title}
        />
        <MovieInfo>
          <h1>
            {detail.original_title} ({Number.parseInt(detail.release_date)})
          </h1>
          <p>User Score: 100% </p>
          <h2>Overview</h2>
          <p>{detail.overview}</p>
          <h3>Genres</h3>
          <List>
            {genreList.length > 0 &&
              genreList.map(genre => <li key={genre}>{genre}</li>)}
          </List>
        </MovieInfo>
      </Container>
      <MovieExtraInfo />
      <Outlet />
    </main>
  );
};

export default MovieDetails;
