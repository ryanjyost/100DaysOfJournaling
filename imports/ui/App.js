import React, { Component } from "react";
import "react-quill/dist/quill.bubble.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";

export default class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
