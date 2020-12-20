import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import Route from './RouteWrapper';
import Example from '../pages/example';
import Home from '../pages/home';
import Teste from '../pages/teste';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/example" exact component={Example} />
        <Route path="/home" exact component={Home} />
        <Route path="/teste" exact component={Teste} />

        <Route path="/" exact component={Example} />
      </Switch>
    </BrowserRouter>
  );
}
