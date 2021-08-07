import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from './history';

import reducers from './reducers';

export const rootReducer = combineReducers({
  ...reducers,
  router: connectRouter(history),
});