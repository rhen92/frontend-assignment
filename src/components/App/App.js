import logo from '../../images/logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import getRecentMovies from '../../api-calls';
import Movies from '../Movies/Movies';
import Modal from '../Modal/Modal';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [modalSpotlight, setModalSpotlight] = useState([]);

	useEffect(() => {
		getRecentMovies()
		 	.then(data => {
				setMovies(data.results)
			})
			.catch(error => setError('Unable to show most recent movies'))
	}, [])

	const handleModal = (event) => {
		setShowModal(!showModal);
			const movieTitle = event.target.alt;
			findModalSpotlight(movieTitle);
	}

	const findModalSpotlight = (title) => {
		const spotlightMovie = movies.find(movie => movie.title === title);
		setModalSpotlight(spotlightMovie);
		if (spotlightMovie) {
			document.body.className = 'modal-body';
		} else {
			document.body.className = 'none';
		}
	}

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
			<Movies movies={movies} handleModal={handleModal} />
			{showModal && <Modal modalSpotlight={modalSpotlight} handleModal={handleModal} />}
		</main>
	)
}


export default App;
