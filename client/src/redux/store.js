import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';
import { reservationAddReducer, reservationListReducer } from './reducers/reservationReducers';
import { flightListReducer } from './reducers/flightsReducers';
import { navbarReducer } from './reducers/navbarReducers';
import { paginationReducer } from './reducers/paginationReducers';
import modalReducer from './reducers/modalReducers';
import filterReducer from './reducers/filterReducers';

// tüm reducerların birleştirilmesi
const reducer = combineReducers({
  reservationAdd: reservationAddReducer,
  reservationList: reservationListReducer,
  flightList: flightListReducer,
  navbar: navbarReducer,
  pagination: paginationReducer,
  modal:modalReducer,
  filter:filterReducer
});

// thunk middleware ayarlanması
const middleware = [thunk];

// store oluşturma
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
