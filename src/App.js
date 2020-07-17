import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "routes/home";
import UnderConstruction from "routes/underConstruction";

const inProgress = true;

function App() {
  return inProgress ? (
    <UnderConstruction />
  ) : (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
