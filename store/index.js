import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

// REDUX PERSIST
import { createMigrate, persistReducer, persistStore } from 'redux-persist';
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";

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
    const storage = require('redux-persist/lib/storage').default;

    const migrations = {
      0: (state) => {
        return {
          state,
          cars: undefined 
        }
      },
      1: (state) => {
        // migration to keep only device state
        return {
          cars: state.cars
        }
      }
    }

    const persistConfig = {
      key: 'root', // test when migrate 'root' ou 'primary'
      version: 0,
      storage,
      debug: true,
      // stateReconciler: autoMergeLevel2,
      // migrate: createMigrate(migrations, { debug: true })
      migrate: (state) => {
        console.log('Migration Running!', state)
        return Promise.resolve(state)
      }
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