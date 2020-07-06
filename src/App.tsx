import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router';

import Home from './Home';
import Event from './Event';

const App: FC<{}> = () => (
  <div className="container">
    <Switch>
      <Route path="/event" component={Event} />
      <Route path="/" component={Home} />
      <Redirect to="/" />;
    </Switch>
  </div>
);

export default App;
