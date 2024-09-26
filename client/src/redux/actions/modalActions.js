import { SET_SELECTED_FLIGHT, TOGGLE_MODAL, SHOW_CONFIRMATION, SET_COUNTDOWN, SET_USERNAME  } from "../constants";

export const setSelectedFlight = (flight) => ({
  type: SET_SELECTED_FLIGHT,
  payload: flight,
});

export const toggleModal = (isOpen) => ({
  type: TOGGLE_MODAL,
  payload: isOpen,
});
export const showConfirmation = (status) => ({
  type: SHOW_CONFIRMATION,
  payload: status,
});

export const setCountdown = (countdown) => ({
  type: SET_COUNTDOWN,
  payload: countdown,
});

export const setUsername = (userName) => ({
  type: SET_USERNAME,
  payload: userName,
});