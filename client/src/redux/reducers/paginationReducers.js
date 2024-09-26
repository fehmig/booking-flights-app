import { SET_CURRENT_PAGE } from '../constants';

const initialState = {
  currentPage: 1,
  flightsPerPage: 4,
};

export const paginationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    default:
      return state;
  }
};
