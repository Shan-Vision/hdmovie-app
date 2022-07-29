import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
// import Movies from '../pages/Movies/Movies';
// import MovieDetails from '../pages/MovieDetails/MovieDetails';
// import Home from '../pages/Home/Home';
import GlobalStyle from './GlobalStyle';
import Cast from './Cast/Cast';
import Reviews from './Reviews';
import SharedLayout from './SharedLayout';

const Home = lazy(()=> import('../pages/Home/Home'))
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(()=> import('../pages/MovieDetails/MovieDetails'))

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};

/*
<>
      <Box as="header" border="1px solid black" width="100wv" py={2} px={3}>
        <Navigation>
          <NavItem to="/">Home</NavItem>
          <NavItem to="movies">Movies</NavItem>
        </Navigation>
      </Box>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>    
      <GlobalStyle/>
    </>
*/
