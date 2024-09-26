// actions/filterActions.js
import { SET_FILTER_CRITERIA } from '../constants';

export const setFilterCriteria = (criteria) => ({
    type: SET_FILTER_CRITERIA,
    payload: criteria,
});
