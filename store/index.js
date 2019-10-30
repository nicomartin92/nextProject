import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// REDUX PERSIST
import { persistStore } from 'redux-persist';

// Import Selectors
import selectors from './selectors/selectors';

// Import Reducers
import rootReducer from './reducers/rootReducer';
// import actions from '../store/actions';

// dev tool for Redux
import { composeWithDevTools } from 'redux-devtools-extension';

/* eslint-disable no-underscore-dangle */
export const initStore = (initialState = {}) => {
  let store;
  const isClient = typeof window !== 'undefined';

  // only if client browser
  if (isClient) {
    const { persistReducer } = require('redux-persist');
    const storage = require('redux-persist/lib/storage').default;
    const persistConfig = {
      key: 'root',
      storage
    };

    store = createStore(
      persistReducer(persistConfig, rootReducer),
      initialState,
      composeWithDevTools(applyMiddleware(thunk))
    );

    store.__PERSISTOR = persistStore(store);

    return store;
  } else {
    /* 
     * If persist is not need remove if isClient 
     * Lignes 5, 19 to 40
     */
    return createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(thunk)));
  }


};
/* eslint-enable */