import { SET_CURRENT_PAGE } from '../constants';

export const setCurrentPage = (pageNumber) => (dispatch) => {
  dispatch({
    type: SET_CURRENT_PAGE,
    payload: pageNumber,
  });
};
