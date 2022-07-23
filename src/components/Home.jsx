import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { fetchPopular } from 'service/FetchMovies';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchPopular()
      .then(setMovies)
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      <ul>
        {movies.map(({ id, title, name }) => (
          <li key={id}>
            <Link to={`/movies/${id}`}>{title || name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
};

export default Home;
