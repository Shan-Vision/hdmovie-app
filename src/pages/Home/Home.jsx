import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { getPopularMovies } from 'service/FetchMovies';
import { Title, MovieList } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(({ id, title, name, release_date }) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`}>{title || name} </NavLink>
          </li>
        ))}
      </MovieList>
      <Outlet />
    </main>
  );
};

export default Home;
