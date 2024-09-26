import { SET_SELECTED_FLIGHT, TOGGLE_MODAL, SHOW_CONFIRMATION, SET_COUNTDOWN, SET_USERNAME } from "../constants";

const initialState = {
  selectedFlight: null,
  isModalOpen: false,
  showConfirmation: false,
  countdown: 5,
  userName: 'Fehmi Günay',
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_FLIGHT:
      return { ...state, selectedFlight: action.payload };
    case TOGGLE_MODAL:
      return { ...state, isModalOpen: action.payload };
    case SHOW_CONFIRMATION:
      return { ...state, showConfirmation: action.payload };
    case SET_COUNTDOWN:
      return { ...state, countdown: action.payload };
    case SET_USERNAME:
      return { ...state, userName: action.payload };
    default:
      return state;
  }
};

export default modalReducer;
