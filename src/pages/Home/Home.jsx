import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getPopularMovies, fetchAllaGenres } from 'service/FetchMovies';
import {
  Title,
  MovieCardList,
  MovieCard,
  CardBox,
  CardTitle,
  LinkElem,
  Image,
  Section,
  ReleaseDate,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  fetchAllaGenres().then(data => console.log(data));
  return (
    <main>
      <Section>
        <Title>Trending today</Title>

        <MovieCardList>
          {movies.map(
            ({ id, title, name, poster_path, release_date: releaseDate }) => (
              <MovieCard key={id}>
                <LinkElem to={`/movies/${id}`} state={{ from: location }}>
                  <Image src={`${IMAGE_URL}${poster_path}`} alt="Movie Card" />
                  <CardBox>
                    <CardTitle>{title || name}</CardTitle>
                    {/* <ReleaseDate>{releaseDate.substr(0, 4)}</ReleaseDate> */}
                  </CardBox>
                </LinkElem>
              </MovieCard>
            )
          )}
        </MovieCardList>
        <Outlet />
      </Section>
    </main>
  );
};

export default Home;
