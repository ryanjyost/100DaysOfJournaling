import React, { Component } from "react";
import { Container } from "reactstrap";
import MobileNavBottom from "../components/MobileNavBottom";

export default class User extends Component {
  render() {
    return (
      <div>
        <MobileNavBottom />
        <div style={{ margin: "auto" }}>{this.props.children}</div>
      </div>
    );
  }
}
