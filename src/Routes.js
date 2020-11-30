import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Header, Footer, Loader } from "./components";
const HomeLazy = lazy(() => import("./pages/Home/Home"));
const ExperienceLazy = lazy(() => import("./pages/Experience/Experience"));
const EducationLazy = lazy(() => import("./pages/Education/Education"));
const PortfolioLazy = lazy(() => import("./pages/Portfolio/Portfolio"));
// const ContactLazy = lazy(() => import("./pages/Contact/Contact"));

function Routes() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route exact path="/" component={HomeLazy} />
          <Route exact path="/experience" component={ExperienceLazy} />
          <Route exact path="/education" component={EducationLazy} />
          <Route exact path="/portfolio" component={PortfolioLazy} />
          {/* <Route exact path="/contacts" component={ContactLazy} /> */}
        </Switch>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default Routes;
