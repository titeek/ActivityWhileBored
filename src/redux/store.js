import { createStore, applyMiddleware } from 'redux';

import * as middlewares from './middlewares';

import { rootReducer } from './rootReducer';
import rootSaga from './rootSaga';

const store = createStore(
  rootReducer,
  applyMiddleware(...middlewares.middlewareList)
)

middlewares.sagaMiddleware.run(rootSaga);

export { store };
