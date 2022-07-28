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

export function getMovieById(id) {
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

function mapper(data) {
  return data.results.map(({ id, title, release_date }) => ({
    id,
    title,
    release_date,
  }));
}
