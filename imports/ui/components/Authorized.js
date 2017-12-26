import Login from "../pages/Login";
import React, { Component } from "react";

export default function Authorized(WrappedComponent) {
  return class extends Component {
    render() {
      let x = 1;
      if (x === 2) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Login />;
      }
    }
  };
}
