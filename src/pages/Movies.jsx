import { useEffect } from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import { Box } from '../components/Box';
import { fetchMovieListByName } from 'service/FetchMovies';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
  margin-left: 5px;
  border: none;
  background-color: #46a4fc;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 29px;
  width: 70px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 4px;
`;

const Input = styled.input`
  border-radius: 4px;
  background-color: #f3f3f3;
  border: none;
  border: 1px solid black;
  width: 300px;
  height: 25px;
`;

const Movies = () => {
  const [query, setQuery] = useState('');
  const [movieList, setMovieList] = useState([]);

  const handleQueryChange = event => {
    const { value } = event.target;
    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(query);
    fetchMovieListByName(query).then(setMovieList);
    setQuery('');
  };

  if (movieList.length < 0) {
    return null;
  }

  return (
    <Box as="main" p={3}>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Search movie"
          name={query}
          value={query}
          onChange={handleQueryChange}
        />
        <Button type="submit">Search</Button>
      </form>

      {movieList.length > 0 && (
        <div>
          <ul>
            {movieList.map(({ id, title }) => (
              <li>
                <NavLink key={id} to={`${id}`}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Box>
  );
};

export default Movies;
