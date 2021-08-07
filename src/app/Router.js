import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import { routesList } from './routesList';

import FourZeroFour from '../pages/404';

const RoutesList = () => (
  <Switch>
    {routesList.map(singleRoute => {
      const { path, exact, ...props } = singleRoute;
      return (
        <Route
          exact={exact}
          key={path}
          path={path}
          {...props}
        />
      );
    })}
    <Route
      component={ FourZeroFour }
    />
  </Switch>
);

const Router = ({ history }) => (
  <ConnectedRouter history={history}>
    <RoutesList />
  </ConnectedRouter>
);

export default Router;

