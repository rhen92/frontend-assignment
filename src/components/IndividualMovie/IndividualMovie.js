import React from 'react';
import './IndividualMovie.css';

const IndividualMovie = ({ image, title, score}) => {
  return (
    <section className='movie-card'>
      <p className='score'>{score}</p>
      <img className='poster-image' src={image} alt={title}/>
      <h1 className='title'>{title}</h1>
    </section>
  )
}

export default IndividualMovie;
