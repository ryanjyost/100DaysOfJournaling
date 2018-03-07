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

import App from "../../ui/layouts/App.js";
import PrivacyPolicy from "../../ui/pages/PrivacyPolicy.js";
import TermsOfService from "../../ui/pages/TermsOfService.js";
import Contact from "../../ui/pages/Contact.js";
import AuthorizedUser from "../../ui/layouts/AuthorizedUser.js";
import Today from "../../ui/pages/Today.js";
import Journal from "../../ui/pages/Journal.js";
import Profile from "../../ui/pages/Profile.js";
import PostFeed from "../../ui/pages/PostFeed.js";
import PostFeedIndex from "../../ui/pages/PostFeedIndex.js";
import Post from "../../ui/components/Post.js";
import Login from "../../ui/pages/Login.js";
import Admin from "../../ui/pages/Admin.js";
import { LoadingContainer } from "../../ui/layouts/LoadingContainer.js";

const loadingApp = LoadingContainer(App);

export const renderRoutes = () => (
  <Router history={browserHistory}>
    <div>
      <Route path="/" component={loadingApp}>
        <IndexRedirect to="/today" />
        <Route path="login" component={Login} />
        <Route path="/today" component={AuthorizedUser}>
          <IndexRoute component={Today} />
          <Route path="/journal" component={PostFeed}>
            <IndexRoute component={Journal} />
            <Route path="/journal/:id" component={Post} />
          </Route>
        </Route>
        <Route path="us" component={PostFeed}>
          <IndexRoute component={PostFeedIndex} />
          <Route path="/us/:id" component={Post} />
        </Route>
        <Route path="privacy-policy" component={PrivacyPolicy} />
        <Route path="terms-of-service" component={TermsOfService} />
        <Route path="contact" component={Contact} />
        <Route path="super-secret-admin" component={Admin} />
      </Route>
    </div>
  </Router>
);
