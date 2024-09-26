import React, { useState } from 'react'; 
import '../styles/FlightSearch.css';
import { IoAirplane } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { setFilterCriteria } from '../redux/actions/filterActions'; 


const FlightSearch = () => {

    // kalkış-varış ve tarih seçilebilen üst kısımdaki arama bileşeni
    
    const dispatch = useDispatch();
    const [tripType, setTripType] = useState('round-trip');
    const [from, setFrom] = useState('');
    const [to, setTo] = useState('');
    const [departureDate, setDepartureDate] = useState('');
    const [returnDate, setReturnDate] = useState('');

    const handleSearch = () => {
        dispatch(setFilterCriteria({
            from,
            to,
            departureDate,
            returnDate: tripType === 'one-way' ? null : returnDate
        }));
    };
    return (
        <div className="flight-search-container">
            <div className="header">
                <h2 className="title"><IoAirplane /> BOOK YOUR FLIGHT</h2>
                <div className="trip-type-toggle">
                    <button
                        className={`toggle-button ${tripType === 'round-trip' ? 'active' : ''}`}
                        onClick={() => setTripType('round-trip')}
                    >
                        Round trip
                    </button>
                    <button
                        className={`toggle-button ${tripType === 'one-way' ? 'active' : ''}`}
                        onClick={() => setTripType('one-way')}
                    >
                        One way
                    </button>
                </div>
            </div>

            <div className="input-group">
                <input
                    type="text"
                    placeholder="From"
                    className="input-field input-left"
                    value={from}
                    onChange={(e) => setFrom(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="To"
                    className="input-field input-right"
                    value={to}
                    onChange={(e) => setTo(e.target.value)}
                />
                <input
                    type="date"
                    className="input-field input-left"
                    value={departureDate}
                    onChange={(e) => setDepartureDate(e.target.value)}
                />
                <input
                    type="date"
                    className="input-field input-right"
                    value={returnDate}
                    onChange={(e) => setReturnDate(e.target.value)}
                    disabled={tripType === 'one-way'}
                />
            </div>

            <button className="show-flights-button" onClick={handleSearch}>
                Show flights
            </button>
        </div>
    );
};

export default FlightSearch;
