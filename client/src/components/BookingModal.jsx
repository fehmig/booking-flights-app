import React, { useEffect, useState } from 'react';
import '../styles/BookingModal.css';
import { FaPlane } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { showConfirmation, setCountdown } from '../redux/actions/modalActions';

const BookingModal = ({ flight, onClose, onConfirm }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countdown, showConfirmation: isConfirmationShown } = useSelector((state) => state.modal);
  const [userName, setUserName] = useState('Fehmi Günay');

  // Rezervasyon işlemleri
  const handleConfirm = () => {
    const reservationData = {
      flightName: flight.flightName,
      scheduleDateTime: flight.scheduleDateTime,
      estimatedLandingTime: flight.estimatedLandingTime,
      origins: flight.prefixIATA || 'Hata',
      destinations: flight.route?.destinations?.[0] || 'Hata',
      userName,
    };
    onConfirm(reservationData);
    dispatch(showConfirmation(true));
  };

  // Modalda rezervasyon onaylandığı takdirde yönlendirmek için işlemler (geri sayım vs.)
  useEffect(() => {
    if (isConfirmationShown) {
      const timer = setInterval(() => {
        dispatch(setCountdown(countdown - 1));
        if (countdown === 1) {
          clearInterval(timer);
          navigate('/myflights');    
        }
      }, 1000);
      
      return () => clearInterval(timer);
    }
  }, [dispatch, isConfirmationShown, countdown, navigate]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {isConfirmationShown ? (
          <>
            <div className="reservation-confirmation">
              <h2>Reservation Confirmed!</h2>
              <p>You will be redirected to My Flights page in 5 seconds...</p>
              <span>{countdown}</span>
              <div className='loading-spinner'></div>
            </div>
          </>
        ) : (
          <>
            <div className="airplane-icon">
              <FaPlane />
            </div>
            <h2>Confirm your reservation!</h2>
            <p className="modal-flight-info">
              <strong>{flight.prefixIATA} - {flight.route?.destinations?.[0]}</strong>
            </p>
            <div className="flight-info">
              <p className="modal-content-header-text">
                <span>Departure:</span> {new Date(flight.scheduleDateTime).toLocaleString()}
              </p>
              <p className="modal-content-header-text">
                <span>Arrival:</span> {new Date(flight.estimatedLandingTime).toLocaleString()}
              </p>
              <p className="modal-content-header-text">
                <span>Price:</span> ${flight.price}
              </p>
            </div>
            <div className="input-container">
              <label htmlFor="userName">Reservation Full Name:</label>
              <input
                type="text"
                id="userName"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <button onClick={handleConfirm} className="confirm-button">Confirm</button>
            <button onClick={onClose} className="close-button">Close</button>
          </>
        )}
      </div>
    </div>
  );
};

export default BookingModal;
