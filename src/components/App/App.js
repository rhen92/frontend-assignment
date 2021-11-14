import logo from '../../images/logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import { getRecentMovies, searchDatabaseMovies} from '../../api-calls';
import Movies from '../Movies/Movies';
import Modal from '../Modal/Modal';

const App = () => {
	const [movies, setMovies] = useState([]);
	const [error, setError] = useState('');
	const [showModal, setShowModal] = useState(false);
	const [modalSpotlight, setModalSpotlight] = useState([]);
	const [searchedMovies, setSearchedMovies] = useState([]);
	const [noMatches, setNoMatches] = useState('');

	useEffect(() => {
		getRecentMovies()
		 	.then(data => setMovies(data.results))
			.catch(error => setError('Unable to show most recent movies'))
	}, [])

	const handleModal = (event) => {
		setShowModal(!showModal);
			const movieTitle = event.target.alt;
			findModalSpotlight(movieTitle);
	}

	const findModalSpotlight = (title) => {
		if (searchedMovies.length) {
			var spotlightMovie = searchedMovies.find(searchedMovie => searchedMovie.title === title);
			setModalSpotlight(spotlightMovie);
		} else {
			var spotlightMovie = movies.find(movie => movie.title === title);
			setModalSpotlight(spotlightMovie);
		}
		if (spotlightMovie) {
			document.body.className = 'modal-body';
		} else {
			document.body.className = 'none';
		}
	}

	const handleKeyPress = (event) => {
		if (event.key === 'Enter') {
			handleSearch(event);
		} else if (event.keyCode === 8 && event.target.value.length === 1) {
			setSearchedMovies([]);
			setNoMatches('');
		}
	}

	const handleSearch = (event) => {
		searchMovies(event.target.value);
	}

	const searchMovies = (movieTitle) => {
		searchDatabaseMovies(movieTitle)
			.then(data => {
				setSearchedMovies(data.results);
				if (!data.results.length) {
					setNoMatches('Couldn\'t find any movie matches');
				}
			})
			.catch(error => setError('Unable to find that movie'))
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
					name='searchedTitle'
					onKeyDown={handleKeyPress}
					/>
					{noMatches && <p>{noMatches}</p>}
				</div>
			</div>
			<hr />
			{!searchedMovies.length ? <h1 className='recent-movies-title'>Most Recent Movies</h1> : <h1 className='recent-movies-title'>Searched Movies</h1>}
			<Movies movies={searchedMovies.length ? searchedMovies : movies} handleModal={handleModal} />
			{showModal && <Modal modalSpotlight={modalSpotlight} handleModal={handleModal} />}
		</main>
	)
}


export default App;
