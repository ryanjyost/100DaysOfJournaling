import React, { Component } from "react";
import "react-quill/dist/quill.bubble.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  IndexRoute
} from "react-router-dom";

import Home from "./Home";
import Login from "./Login";

export default class Routes extends Component {
  isMobile() {}

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}
