// src/redux/actions/flightFilterActions.js
import { SET_FLIGHT_FILTERS } from '../constants';

export const setFlightFilters = (filters) => ({
  type: SET_FLIGHT_FILTERS,
  payload: filters,
});
