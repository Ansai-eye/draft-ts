import React from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Routers } from './routes';
import { Home } from './pages';

function App(): JSX.Element {
  return (
    <Switch>
      {Routers.map((router) => {
        return (
          <Route
            key={router.path}
            path={router.path}
            exact={!router.notExect}
            component={router.component}
          ></Route>
        );
      })}
      {/* 默认路由 */}
      <Route path="/" exact component={Home}></Route>
    </Switch>
  );
}

export default withRouter(App);
