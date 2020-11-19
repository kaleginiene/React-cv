import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Home, Experience, Education } from "./pages";

function Routes() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/experience" component={Experience} />
        <Route exact path="/education" component={Education} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routes;
