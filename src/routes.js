import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import router from "./config/router";
import pages from "./pages/index";

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path={router.home} render={() => <pages.Home />} exact />
      <Route path={router.login} render={() => <pages.Login />} exact />
    </Switch>
  </BrowserRouter>
);
