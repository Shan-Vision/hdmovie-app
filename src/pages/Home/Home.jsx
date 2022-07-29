import { useEffect, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { getPopularMovies } from 'service/FetchMovies';
import { Title, MovieList } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location= useLocation()

  useEffect(() => {
    getPopularMovies()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <main>
      <Title>Trending today</Title>
      <MovieList>
        {movies.map(({ id, title, name}) => (
          <li key={id}>
            <NavLink to={`/movies/${id}`} state={{from: location}}>{title || name} </NavLink>
          </li>
        ))}
      </MovieList>
      <Outlet />
    </main>
  );
};

export default Home;
