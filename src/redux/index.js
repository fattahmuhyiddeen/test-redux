import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './ducks';

let store;

function configStore() {

  const appliedMiddleware = applyMiddleware(thunk, logger);
  store = createStore(rootReducer, compose(appliedMiddleware));

  return store;
}

const getStore = () => store;
export const getState = () => getStore() && getStore().getState();
export const dispatch = data => getStore() && getStore().dispatch(data);

export default configStore;
