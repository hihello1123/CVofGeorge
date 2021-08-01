import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../page/Home';
import Basic from '../page/Basic';

function CVRoute() {
  return (
    <Router>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/Basic">
        <Basic />
      </Route>
    </Router>
  );
}

export default CVRoute;
