import React, { FC, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import Home from 'components/pages/Home';
import Event from 'components/pages/Event';
import store from 'stores';
import * as serviceWorker from 'serviceWorker';

import 'styles/commons/reset.scss';
import 'styles/commons/base.scss';

const ScrollToTop: FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/:paged(\d+)?" component={Home} />
          <Route exact path="/event/:eventId(\d+)" component={Event} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
