import { TOGGLE_MENU } from '../constants';

const initialState = {
  isMenuOpen: false,
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: !state.isMenuOpen,
      };
    default:
      return state;
  }
};
