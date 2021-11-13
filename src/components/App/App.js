import logo from '../../images/logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import getRecentMovies from '../../api-calls';
import Movies from '../Movies/Movies';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState('');

	useEffect(() => {
		getRecentMovies()
		 	.then(data => {
				setMovies(data.results)
			})
			.catch(error => setError('Unable to show most recent movies'))
	}, [])

	return (
		<main>
			{error && <h2>{error}</h2>}
			<div className='header-style'>
				<img src={logo} alt="Timescale" />
				<div>
					<i className="fas fa-search"></i>
					<input
					type='text'
					placeholder='Search for a movie'
					/>
				</div>
			</div>
			<hr />
			<Movies movies={movies} />
		</main>
	)
}


export default App;
