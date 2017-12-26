import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import {
  Router,
  Route,
  browserHistory,
  IndexRedirect,
  IndexRoute
} from "react-router";

import "./accounts-config.js";
import "bootstrap/dist/css/bootstrap.css";

import App from "../ui/layouts/App.js";
import AuthorizedUser from "../ui/layouts/AuthorizedUser.js";
import Today from "../ui/pages/Today.js";
import Journal from "../ui/pages/Journal.js";
import Profile from "../ui/pages/Profile.js";
import PostFeed from "../ui/pages/PostFeed.js";
import Login from "../ui/pages/Login.js";
import { LoadingContainer } from "../ui/layouts/LoadingContainer.js";

const loadingApp = LoadingContainer(App);

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={loadingApp}>
        <IndexRedirect to="/me" />
        <Route path="login" component={Login} />
        <Route path="me" component={AuthorizedUser}>
          <IndexRoute component={Today} />
          <Route path="/me/journal" component={Journal} />
          <Route path="/me/profile" component={Profile} />
        </Route>
        <Route path="us" component={PostFeed} />
      </Route>
    </div>
  </Router>
);
