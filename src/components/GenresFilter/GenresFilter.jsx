import { useEffect, useState } from 'react';
import { getAllGenres } from 'service/FetchMovies';
import { GenresList, GenresItem } from './GenresFiltered.styled';

const GenresFilter = ({ onClick, selected }) => {
  const [genres, setGenres] = useState(null);
  const genreName = selected.map(({ name }) => name);

  useEffect(() => {
    getAllGenres().then(setGenres);
  }, []);

  return (
    <GenresList>
      {genres?.map(genre => {
        const currentGenre = genreName.includes(genre.name);
        return (
          <li key={genre.id}>
            <GenresItem
              type="button"
              active={currentGenre}
              onClick={() => onClick(genre)}
            >
              {genre.name}
            </GenresItem>
          </li>
        );
      })}
    </GenresList>
  );
};

export default GenresFilter;
