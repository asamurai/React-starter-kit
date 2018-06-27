import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Map } from 'immutable';

import rootReducer from '../reducers';

const configureStore = (initialState) => {

  const store = createStore(
    rootReducer,
    Map({ ...initialState }),
    applyMiddleware(thunk)
  );

  return store;
};

export default configureStore;

