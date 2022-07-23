const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '8302862792abaeee103b53516f1a680a';

export function fetchPopular() {
  return fetch(`${BASE_URL}trending/movie/week?api_key=${API_KEY}`)
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data =>
      data.results.map(
        ({
          id,
          title,
          name,
          genre_ids,
          backdrop_path,
          overview,
          release_date,
          vote_average,
          poster_path,
        }) => ({
          id,
          title,
          name,
          genre_ids,
          backdrop_path,
          overview,
          release_date,
          vote_average,
          poster_path,
        })
      )
    )
    .catch(error => console.log(error));
}

export function fetchMovieListByName(query) {
  return fetch(
    `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(new Error('Something went wrong'));
    })
    .then(data =>
      data.results.map(
        ({
          id,
          title,
          genre_ids,
          backdrop_path,
          overview,
          release_date,
          vote_average,
          poster_path,
        }) => ({
          id,
          title,
          genre_ids,
          backdrop_path,
          overview,
          release_date,
          vote_average,
          poster_path,
        })
      )
    )
    .catch(error => console.log(error));
}
