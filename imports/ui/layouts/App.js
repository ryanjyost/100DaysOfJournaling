import React, { Component } from "react";
import MobileNavTop from "../components/MobileNavTop";

export default class App extends Component {
  render() {
    return (
      <div>
        <MobileNavTop />
        {this.props.children}
      </div>
    );
  }
}
