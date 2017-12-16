import React, { Component } from "react";
import FaEllipses from "react-icons/lib/md/keyboard-control";
import URL from "url-parse";
import { Link } from "react-router";
// import AccountsUIWrapper from "./AccountsUIWrapper.js";

import {
  Container,
  Row,
  Col,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import styles from "../styles/mobileNavTop";

export default class MobileNavTop extends Component {
  constructor() {
    super();
    this.state = {
      link: null,
      label: "me"
    };
  }

  componentWillMount() {
    const url = new URL(window.location.href);
    const pathname = url.pathname.slice(1);
    const link = pathname.includes("me") ? "/us" : "/me";
    const label = link === "/me" ? "us" : "me";

    this.setState({
      link,
      label
    });
  }

  componentWillReceiveProps() {
    const url = new URL(window.location.href);
    const pathname = url.pathname.slice(1);
    const link = pathname.includes("me") ? "/us" : "/me";
    const label = link === "/me" ? "us" : "me";

    this.setState({
      link,
      label
    });
  }

  render() {
    return (
      <Navbar fixed="top" style={styles.navbar}>
        <FaEllipses size={25} style={styles.icon} />
        <a href="/">
          <img
            height="20px"
            style={styles.brand}
            src="/images/jotlot-logo.png"
          />
        </a>
        <Link to={this.state.link} style={styles.navToggle}>
          <span style={styles.toggleText}>{this.state.label}</span>
          <div style={styles.toggleIndicators}>
            <div
              style={
                this.state.label === "me"
                  ? styles.toggleIndicators.active
                  : styles.toggleIndicators.inactive
              }
            />
            <div
              style={
                this.state.label === "me"
                  ? styles.toggleIndicators.inactive
                  : styles.toggleIndicators.active
              }
            />
          </div>
        </Link>
      </Navbar>
    );
  }
}
