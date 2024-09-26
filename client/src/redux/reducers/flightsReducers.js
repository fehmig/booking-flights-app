import {
    FLIGHT_LIST_REQUEST,
    FLIGHT_LIST_SUCCESS,
    FLIGHT_LIST_FAIL,
  } from '../constants';
  
  // uçuş listeleme reducer'ı
  export const flightListReducer = (state = { flights: [] }, action) => {
    switch (action.type) {
      case FLIGHT_LIST_REQUEST:
        return { loading: true, flights: [] };
      case FLIGHT_LIST_SUCCESS:
        return { loading: false, flights: action.payload };
      case FLIGHT_LIST_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
  