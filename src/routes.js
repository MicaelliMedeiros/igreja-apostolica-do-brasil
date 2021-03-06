import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import About from './pages/About';
import News from './pages/News';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} />
      <Route path="/about" component={About} />
      <Route path="/news" component={News} />
    </Switch>
  );
}
