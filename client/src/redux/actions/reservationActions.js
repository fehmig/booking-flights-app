import axios from 'axios';
import { 
  RESERVATION_ADD_REQUEST, 
  RESERVATION_ADD_SUCCESS, 
  RESERVATION_ADD_FAIL,
  RESERVATION_LIST_REQUEST,
  RESERVATION_LIST_SUCCESS,
  RESERVATION_LIST_FAIL
} from '../constants';

// rezervasyon ekleme
export const addReservation = (reservationsData ) => async (dispatch) => {
  try {
    dispatch({ type: RESERVATION_ADD_REQUEST });

    const { data } = await axios.post('http://localhost:5000/api/reservations', reservationsData);

    dispatch({
      type: RESERVATION_ADD_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_ADD_FAIL,
      payload: error.response && error.response.data.message 
               ? error.response.data.message 
               : error.message,
    });
  }
};

// rezervasyon listesi getirme
export const listReservations = () => async (dispatch) => {
  try {
    dispatch({ type: RESERVATION_LIST_REQUEST });

    const { data } = await axios.get('http://localhost:5000/api/reservations');

    dispatch({
      type: RESERVATION_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: RESERVATION_LIST_FAIL,
      payload: error.response && error.response.data.message
               ? error.response.data.message
               : error.message,
    });
  }
};
