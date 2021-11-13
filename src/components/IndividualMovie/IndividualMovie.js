import React from 'react';
import './IndividualMovie.css';

const IndividualMovie = ({ image, title, score}) => {
  return (
    <section>
      <p>{score}</p>
      <img src={image} alt={title}/>
      <h1>{title}</h1>
    </section>
  )
}

export default IndividualMovie;
