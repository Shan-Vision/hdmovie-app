import { Routes, Route, Outlet } from 'react-router-dom';
import Movies from '../pages/Movies';
import MovieDetails from './MovieDetails';
import Home from './Home';
import { Box } from './Box';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NavItem = styled(NavLink)`
  border-radius: 4px;
  text-decoration: none;
  color: #2a2a2a;

  &.active {
    color: tomato;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: green;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const App = () => {
  return (
    <>
      <Box as="header" border="1px solid black" width="100wv" py={2} px={3}>
        <Navigation>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Navigation>
      </Box>

      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/movies" element={<Movies />}>
            <Route path=":movieId" element={<MovieDetails />}>
              <Route path="cast" element={<div> Cast</div>} />
              <Route path="reviews" element={<div> Reviews</div>} />
            </Route>
          </Route>

      </Routes>
    </>
  );
};
