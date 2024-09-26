import React, { useEffect } from 'react';
import { addReservation } from '../redux/actions/reservationActions';
import { setCurrentPage } from '../redux/actions/paginationActions';
import { setSelectedFlight, toggleModal } from '../redux/actions/modalActions';
import { useDispatch, useSelector } from 'react-redux';
import { listFlights } from '../redux/actions/flightsActions';
import BookingModal from './BookingModal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../styles/FlightList.css';
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { FaPlane } from "react-icons/fa";

function FlightList() {

  const dispatch = useDispatch();

  //store'dan state çağırma işlemleri
  const flightList = useSelector((state) => state.flightList);
  const pagination = useSelector((state) => state.pagination);
  const modal = useSelector((state) => state.modal);
  const filter = useSelector((state) => state.filter);
  const { loading, error, flights } = flightList;
  const { currentPage, flightsPerPage } = pagination;
  const { selectedFlight, isModalOpen } = modal;

  useEffect(() => {
    dispatch(listFlights());
  }, [dispatch]);


  const handleReservation = (reservationData) => {
    dispatch(addReservation(reservationData));
    toast.success('Rezervasyon onaylandı!', {
      autoClose: 4000,
    });
  };

  const formatDateOnly = (dateTime) => {
    const date = new Date(dateTime);
    return date.toISOString().split('T')[0];
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
  };

  const calculateFlightDuration = (departureTime, arrivalTime) => {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const durationMs = arrival - departure;

    const hours = Math.floor(durationMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  // filtreleme işlemleri
  const filteredFlights = flights.filter(flight => {
    const flightDate = formatDateOnly(flight.scheduleDateTime);
    const { from, to, departureDate } = filter;

    return (
      (!from || flight.prefixIATA.includes(from)) &&
      (!to || flight.route?.destinations?.includes(to)) &&
      (!departureDate || flightDate === departureDate)
    );
  });

  // sayfalama
  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlights.slice(indexOfFirstFlight, indexOfLastFlight);

  const paginate = (pageNumber) => dispatch(setCurrentPage(pageNumber));


  return (
    <div className="container">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} closeOnClick pauseOnHover draggable />

      {/* uçuş listesi */}

      <div className="flights-section">
        {loading ? (
          <p>Yükleniyor...</p>
        ) : error ? (
          <p>Hata: {error}</p>
        ) : (
          <>
            {currentFlights.map((flight) => (
              <div key={flight.id} className="flight-card">
                <div className="flight-details">
                  <h2>
                    {flight.prefixIATA} - {flight.route?.destinations?.[0] || 'Unknown'}
                  </h2>
                  <div className="flight-times">
                    <div>
                      <p className="flight-times-header"><LuPlaneTakeoff /> Departure</p>
                      <p className="flight-times-details">{formatDateTime(flight.scheduleDateTime)}</p>
                      <p>Airport: {flight.prefixIATA}</p>
                    </div>
                    <div className="flight-duration">
                      <p>
                        <FaPlane className="rotating-icon" /><br />
                        {calculateFlightDuration(flight.scheduleDateTime, flight.estimatedLandingTime)} (Non Stop)
                      </p>

                    </div>
                    <div>
                      <p className="flight-times-header"><LuPlaneLanding /> Arrival</p>
                      <p className="flight-times-details">{formatDateTime(flight.estimatedLandingTime)}</p>
                      <p>Airport: {flight.route?.destinations?.[0] || 'Unknown'}</p>
                    </div>
                  </div>
                  <p className="flight-price">Price: ${flight.price}</p>
                  <button
                    onClick={() => {
                      dispatch(setSelectedFlight(flight)); // Set selected flight in Redux
                      dispatch(toggleModal(true)); // Open modal
                    }}
                    className="book-button"
                  >
                    Book Flight
                  </button>
                </div>
                <a href="#" className="details-link">Check the details</a>
              </div>
            ))}



            {/* sayfalama butonları */}
            <div className="pagination">
              {Array.from({ length: Math.ceil(filteredFlights.length / flightsPerPage) }).map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={index + 1 === currentPage ? 'active' : ''}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* yandaki filtreler */}
      <div className="filter-section">
        <h3>Sort by:</h3>
        <select className="sort-dropdown">
          <option value="lowest-price">Lowest Price</option>
          <option value="lowest-price">Highest Price</option>
          <option value="lowest-price">Recommended</option>
        </select>

        <h3>Arrival Time</h3>
        <label><input type="radio" name="arrival-time" /> 5:00 AM - 11:59 AM</label>
        <label><input type="radio" name="arrival-time" /> 12:00 PM - 5:59 PM</label>

        <h3>Stops</h3>
        <label><input type="radio" name="stops" /> Nonstop</label>
        <label><input type="radio" name="stops" /> 1 Stop</label>
        <label><input type="radio" name="stops" /> 2+ Stops</label>

        <h3>Airlines Included</h3>
        <label><input type="checkbox" /> Alitalia</label>
        <label><input type="checkbox" /> Lufthansa</label>
        <label><input type="checkbox" /> Air France</label>
        <label><input type="checkbox" /> Brussels Airlines</label>
        <label><input type="checkbox" /> Air Italy</label>
      </div>

      {/* modal */}
      {isModalOpen && (
        <BookingModal
          flight={selectedFlight}
          onClose={() => dispatch(toggleModal(false))} // Close modal
          onConfirm={handleReservation}
        />
      )}

    </div>
  );
}

export default FlightList;
