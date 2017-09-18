import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import rootReducer from './../reducers';

export default (initialState) => {

    const logger = createLogger();
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunk, logger)
    );

    return store;
};

