import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxPromise from 'redux-promise';

import reducers from './reducers';

export const initStore = (initialState = {}) => {
  return createStore(reducers, initialState, composeWithDevTools(
    applyMiddleware(ReduxPromise)
  ));
}