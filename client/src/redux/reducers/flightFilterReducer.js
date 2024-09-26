// src/redux/reducers/flightFilterReducer.js
import { SET_FLIGHT_FILTERS } from '../constants';

const initialState = {
  from: '',
  to: '',
  startDate: null,
  endDate: null,
};

const flightFilterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_FLIGHT_FILTERS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default flightFilterReducer;
