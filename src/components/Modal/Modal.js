import React from 'react';
import closeIcon from '../../images/close-icon.svg';
import './Modal.css';

const Modal = ({ modalSpotlight, handleModal }) => {
  const modalDate = new Date(modalSpotlight.release_date);
  const month = modalDate.toLocaleString('default', { month: 'long' })
  return (
    <section className='modal-style'>
      <div className='modal-header-style'>
        <h1>{modalSpotlight.title}</h1>
        <img className='x-button' onClick={handleModal} src={closeIcon} alt='close-button' />
      </div>
      <div className='modal-paragraph-style'>
        <img className= 'modal-image' src={process.env.REACT_APP_API_BASE_IMAGE_URL + modalSpotlight.poster_path} alt={modalSpotlight.title} />
        <div>
          <p className='bold-p'><b>Release date:</b> {month} {modalDate.getDate()}, {modalDate.getFullYear()}</p>
          <p>{modalSpotlight.overview}</p>
          <p className='bold-p'><b>{modalSpotlight.vote_average}</b>/10 ({modalSpotlight.vote_count} total votes)</p>
        </div>
      </div>
    </section>
  )
}

export default Modal;
