const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8302862792abaeee103b53516f1a680a';

export function getPopularMovies() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data => mapper(data))
    .catch(error => console.log(error));
}

export function getMovieDetails(id) {
  return fetch(`${BASE_URL}movie/${id}?api_key=${API_KEY}&language=en-US`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(
      ({
        backdrop_path,
        genres,
        original_title,
        overview,
        release_date,
        poster_path,
      }) => ({
        backdrop_path,
        genres,
        original_title,
        overview,
        release_date,
        poster_path,
      })
    )
    .catch(error => console.log(error));
}

export function getMovieListByName(query) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&include_adult=false`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data => mapper(data))
    .catch(error => console.log(error));
}

export function getMovieCredits(id) {
  return fetch(
    `${BASE_URL}movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data => data.cast)
    .catch(error => console.log(error));
}

export function getMovieReviews(id) {
  return fetch(
    `${BASE_URL}movie/${id}/reviews?api_key=${API_KEY}&language=en-US`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data => data.results)
    .catch(error => console.log(error));
}

export function getAllGenres() {
  return fetch(`${BASE_URL}genre/movie/list?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data => data.genres)
    .catch(error => console.log(error));
}

export function getGenreListById(id) {
  return fetch(
    `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${id}&with_watch_monetization_types=flatrate`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data => data.results)
    .catch(error => console.log(error));
}

function mapper(data) {
  return data.results.map(
    ({ id, title, release_date, poster_path, overview, genre_ids }) => ({
      id,
      title,
      release_date,
      poster_path,
      overview,
      genre_ids,
    })
  );
}
