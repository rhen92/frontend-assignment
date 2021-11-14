import React from 'react';
import './Movies.css';
import IndividualMovie from '../IndividualMovie/IndividualMovie';

const Movies = ({ movies, handleModal }) => {
  const allMovies = movies.map((movie, index) => {
    return (
      <IndividualMovie
      key={index}
      image={process.env.REACT_APP_API_BASE_IMAGE_URL + movie.poster_path}
      title={movie.title}
      score={movie.vote_average}
      handleModal={handleModal}
      />
    )
  })
  return (
      <div className='movies-grid'>
        {allMovies}
      </div>
  )
}

export default Movies;
