import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from '../../components/Box';
import { getMovieListByName } from 'service/FetchMovies';
import MovieList from 'components/MovieList/MovieList';
import { Button, Form, Input } from './Movies.styled';
// import {  Outlet } from 'react-router-dom';

const Movies = () => {
  const [movieList, setMovieList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('query') ?? '';

  useEffect(() => {
    if (searchQuery === '' || searchQuery === null) return;

    getMovieListByName(searchQuery).then(setMovieList);
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    const value = form.elements.name.value;
    setSearchParams(value !== '' ? { query: value } : {});

    form.reset();
  };
  return (
    <Box as="main">
      <Form onSubmit={handleSubmit}>
        <Input type="text" placeholder="Search movie" name="name" />
        <Button type="submit">Search</Button>
      </Form>

      {movieList.length > 0 && <MovieList movieList={movieList} />}
    </Box>
  );
};

export default Movies;
