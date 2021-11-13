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
				console.log(process.env.REACT_APP_API_DOMAIN)
				setMovies(data.results)
			})
			.catch(error => setError('Unable to show most recent movies'))
	}, [])

	return (
		<main>
			<img src={logo} alt="Timescale" />
			<Movies movies={movies} />
		</main>
	)
}


export default App;
