import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from '../page/Home';
import Basic from '../page/Basic';
import Sherlock from '../page/Sherlock';

function CVRoute() {
  return (
    <div className="bookShelf">
      <Router>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/Basic">
          <Basic />
        </Route>
        <Route exact path="/Sherlock">
          <Sherlock />
        </Route>
      </Router>
    </div>
  );
}

export default CVRoute;
