import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* 使用了路由懒加载，所有要用suspense包裹 */}
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route
            path="/"
            render={(routerProps) => {
              return <App {...routerProps} />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
