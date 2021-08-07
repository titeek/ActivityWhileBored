import { routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';

import { history } from './history';

const sagaMiddleware = createSagaMiddleware();
const routeMiddleware = routerMiddleware(history);

const middlewareList = [ sagaMiddleware, routeMiddleware ];

export { sagaMiddleware, middlewareList };