import {
  RESERVATION_ADD_REQUEST,
  RESERVATION_ADD_SUCCESS,
  RESERVATION_ADD_FAIL,
  RESERVATION_LIST_REQUEST,
  RESERVATION_LIST_SUCCESS,
  RESERVATION_LIST_FAIL,
} from '../constants';

// rezervasyon ekleme reducer'ı
export const reservationAddReducer = (state = {}, action) => {
  switch (action.type) {
    case RESERVATION_ADD_REQUEST:
      return { loading: true };
    case RESERVATION_ADD_SUCCESS:
      return { loading: false, success: true, reservation: action.payload };
    case RESERVATION_ADD_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

// rezervasyon listeleme reducer'ı
export const reservationListReducer = (state = { reservations: [] }, action) => {
  switch (action.type) {
    case RESERVATION_LIST_REQUEST:
      return { loading: true, reservations: [] };
    case RESERVATION_LIST_SUCCESS:
      return { loading: false, reservations: action.payload };
    case RESERVATION_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
