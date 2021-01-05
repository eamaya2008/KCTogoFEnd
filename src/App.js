import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { mainRoutes } from './routes.ts';
// import '../../node_modules/font-awesome/scss/font-awesome.scss';
import Loader from './assets/Loader'

const App = () => (
  <Suspense fallback={<Loader />}>
    <Switch>
      {
        mainRoutes.map((route, index) => {
          const RouteComponent = route.component;
          return (
            <Route
              key={index}
              path={route.path}
              name={route.name}
              exact={route.exact}
              component={RouteComponent}
            />
          );
        })
      }
    </Switch>
  </Suspense>
);

export default App;
