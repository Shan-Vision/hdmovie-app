import GenresFilter from 'components/GenresFilter';
import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { getPopularMovies, getGenreListById } from 'service/FetchMovies';
import {
  Title,
  MovieCardList,
  MovieCard,
  CardBox,
  CardTitle,
  LinkElem,
  Image,
  Section,
} from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState(null);
  const [activeGenre, setActiveGenre] = useState([]);
  const location = useLocation();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    const genresId = activeGenre.map(({ id }) => id.toString());
    getGenreListById(genresId).then(setMovies);
  }, [activeGenre]);

  const handleSelectGenre = genre => {
    const { name } = genre;
    const GenreSelectedName = activeGenre.map(({ name }) => name);
    if (GenreSelectedName.includes(name)) {
      const ToggleSelectedGenre = activeGenre.filter(
        genre => genre.name !== name
      );
      setActiveGenre(ToggleSelectedGenre);
      return;
    }
    setActiveGenre(activeGerne => [...activeGenre, genre]);
  };
console.log('activeGenre :>> ', activeGenre);
  return (
    <main>
      <Section>
        <Title>Trending today</Title>
        <GenresFilter onClick={handleSelectGenre} selected={activeGenre} />

        <MovieCardList>
          {movies &&
            movies.map(({ id, title, name, poster_path }) => (
              <MovieCard key={id}>
                <LinkElem to={`/movies/${id}`} state={{ from: location }}>
                  <Image src={`${IMAGE_URL}${poster_path}`} alt="Movie Card" />
                  <CardBox>
                    <CardTitle>{title || name}</CardTitle>
                  </CardBox>
                </LinkElem>
              </MovieCard>
            ))}
        </MovieCardList>
        <Outlet />
      </Section>
    </main>
  );
};

export default Home;
