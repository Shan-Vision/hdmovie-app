import { NavLink } from 'react-router-dom';
import { MovieCatalogue } from './MovieList.styled';

const MovieList = ({ movieList }) => {
  return (
    <div>
      <MovieCatalogue>
        {movieList.map(({ id, title, release_date }) => (
          <li key={id}>
            <NavLink to={`${id}`}>
              {title} ({Number.parseInt(release_date)})
            </NavLink>
          </li>
        ))}
      </MovieCatalogue>
    </div>
  );
};

export default MovieList;
