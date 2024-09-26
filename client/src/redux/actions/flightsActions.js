import axios from 'axios';
import {
  FLIGHT_LIST_REQUEST,
  FLIGHT_LIST_SUCCESS,
  FLIGHT_LIST_FAIL,
} from '../constants';

// uçuşları listeleme
export const listFlights = () => async (dispatch) => {
  try {
    dispatch({ type: FLIGHT_LIST_REQUEST });

    const { data } = await axios.get('http://localhost:5000/api/flights');

    dispatch({
      type: FLIGHT_LIST_SUCCESS,
      payload: data.flights, 
    });
  } catch (error) {
    dispatch({
      type: FLIGHT_LIST_FAIL,
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
