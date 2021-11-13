const getRecentMovies = () => {
  return fetch(`${process.env.REACT_APP_API_DOMAIN}/movie/now_playing?api_key=${process.env.REACT_APP_MOVIE_DB_API_KEY}&language=en-US`)
    .then(response => response.json())
}

export default getRecentMovies;
