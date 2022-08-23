import { NavLink, useLocation } from 'react-router-dom';
import { MovieCatalogue } from './MovieList.styled';

const MovieList = ({ movieList }) => {
  const location = useLocation();
  console.log('locationMovieList :>> ', location);
  return (
    <div>
      <MovieCatalogue>
        {movieList.map(({ id, title, release_date }) => (
          <li key={id}>
            <NavLink to={`${id}`} state={{ from: location }}>
              {title} ({Number.parseInt(release_date)})
            </NavLink>
          </li>
        ))}
      </MovieCatalogue>
    </div>
  );
};

export default MovieList;
