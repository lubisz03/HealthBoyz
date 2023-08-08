import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { menuReducer } from '../reducers/menu';
import { doctorsReducer } from '../reducers/doctors';
import { formReducer } from '../reducers/form';
import { hoursReducer } from '../reducers/hours';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    menu: menuReducer,
    doctors: doctorsReducer,
    formData: formReducer,
    bookedHrs: hoursReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
