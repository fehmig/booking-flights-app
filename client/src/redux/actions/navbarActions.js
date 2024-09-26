import { TOGGLE_MENU } from '../constants';

export const toggleMenu = () => (dispatch) => {
  dispatch({
    type: TOGGLE_MENU,
  });
};
