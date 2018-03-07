import React, { Component } from "react";
import MobileNavTop from "../components/MobileNavTop";

export default class App extends Component {
  render() {
    return (
      <div style={{ maxWidth: "100%" }}>
        <MobileNavTop />
        {this.props.children}
      </div>
    );
  }
}
