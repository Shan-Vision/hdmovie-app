import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getPopularMovies } from 'service/FetchMovies';
import {
  Title,
  MovieCardList,
  MovieCard,
  CardBox,
  CardTitle,
  LinkElem,
  Image,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
  const style = { borderRadius: '4px' };

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  console.log('movies :>> ', movies);
  return (
    <main>
      <Title>Trending today</Title>

      <MovieCardList>
        {movies.map(({ id, title, name, poster_path }) => (
          <MovieCard key={id}>
            <LinkElem to={`/movies/${id}`} state={{ from: location }}>
              <div>
                <Image src={`${IMAGE_URL}${poster_path}`} alt="Movie Card" />
                <CardBox>
                  <CardTitle>{title || name}</CardTitle>
                </CardBox>
              </div>
            </LinkElem>
          </MovieCard>
        ))}
      </MovieCardList>
      <Outlet />
    </main>
  );
};

export default Home;
