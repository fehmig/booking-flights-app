import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listReservations } from '../redux/actions/reservationActions';
import '../styles/FlightList.css'; 
import { LuPlaneTakeoff, LuPlaneLanding } from "react-icons/lu";
import { FaPlane } from "react-icons/fa";

const MyFlights = () => {
  const dispatch = useDispatch();
  
  const reservationList = useSelector((state) => state.reservationList);
  const { loading, reservations, error } = reservationList;

  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    dispatch(listReservations());
  }, [dispatch]);

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

  const filteredReservations = reservations.filter(reservation =>
    reservation.flightName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="my-flights">
      <h1 className='my-flights-header'>My Flights</h1>

      {/* arama inputu */}
      <input
        type="text"
        placeholder="Search by flight name... etc: KL2570"
        className="search-input"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <ul>
          {filteredReservations.length === 0 ? (
            <p>There are no reservations matching your search.</p>
          ) : (
            filteredReservations.map((reservation) => (
              <div key={reservation.id} className="flight-card">
                <div className="flight-details">
                  <h2>
                    {reservation.flightName} 
                  </h2>
                  <div className="flight-times">
                    <div>
                      <p className="flight-times-header"><LuPlaneTakeoff /> Departure</p>
                      <p className="flight-times-details">{formatDateTime(reservation.scheduleDateTime)}</p>
                      <p>Airport: {reservation.origins}</p>
                    </div>
                    <div className="flight-duration">
                      <p><FaPlane /><br />{calculateFlightDuration(reservation.scheduleDateTime, reservation.estimatedLandingTime)} (Non Stop)</p>
                    </div>
                    <div>
                      <p className="flight-times-header"><LuPlaneLanding /> Arrival</p>
                      <p className="flight-times-details">{formatDateTime(reservation.estimatedLandingTime)}</p>
                      <p>Airport: {reservation.destinations || 'Unknown'}</p>
                    </div>
                  </div>
                  <p className="flight-price">Price: ${reservation.price}</p>
                </div>
                <a href="#" className="details-link">Check the details</a>
              </div>
            ))
          )}
        </ul>
      )}
    </div>
  );
};

export default MyFlights;
