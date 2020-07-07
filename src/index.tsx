import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Redirect, Route, Switch } from 'react-router';

import * as serviceWorker from 'serviceWorker';
import DefaultLayout from 'layouts/Default';
import Home from 'pages/Home';
import Event from 'pages/Event';

import 'styles/commons/reset.scss';
import 'styles/commons/base.scss';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <DefaultLayout>
          <Route exact path="/" component={Home} />
          <Route exact path="/event" component={Event} />
          <Redirect to="/" />
        </DefaultLayout>
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
