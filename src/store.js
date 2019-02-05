import { createStore, applyMiddleware } from 'redux';
import cartReducer from './reducers/cartReducer';
import logger from 'redux-logger'
export const store = createStore(cartReducer, applyMiddleware(logger))

