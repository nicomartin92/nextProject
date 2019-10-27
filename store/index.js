import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// Import Selectors
import selectors from './selectors/selectors';

// Import Reducers
import rootReducer from './reducers/rootReducer';
// import actions from '../store/actions';

// dev tool for Redux
import { composeWithDevTools } from 'redux-devtools-extension';

/* eslint-disable no-underscore-dangle */
export const initStore = (initialState = {}) => {
  return createStore(
    rootReducer, 
    initialState,
    composeWithDevTools(applyMiddleware(thunk)));
};
/* eslint-enable */