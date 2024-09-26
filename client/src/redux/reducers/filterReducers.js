import { SET_FILTER_CRITERIA } from '../constants';

const initialState = {
    from: '',
    to: '',
    departureDate: '',
    returnDate: '',
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_CRITERIA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};

export default filterReducer;
