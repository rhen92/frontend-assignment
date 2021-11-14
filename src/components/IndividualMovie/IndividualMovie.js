import React from 'react';
import './IndividualMovie.css';

const IndividualMovie = ({ image, title, score, handleModal }) => {
  return (
    <section className='movie-card' onClick={handleModal}>
      <p className='score'>{score}</p>
      <img className='poster-image' src={image} alt={title}/>
      <h1 className='title'>{title}</h1>
    </section>
  )
}

export default IndividualMovie;
