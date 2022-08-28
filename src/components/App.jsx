import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import GlobalStyle from './GlobalStyle';
import Cast from './Cast/Cast';
import Reviews from './Previews/Reviews';
import SharedLayout from './SharedLayout';

const Home = lazy(() => import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));

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
