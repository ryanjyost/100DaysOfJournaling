import React, { Component } from "react";
import URL from "url-parse";

import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router";
import styles from "../styles/mobileNavBottom";

export default class MobileNavBottom extends Component {
  constructor() {
    super();
    this.state = {
      pathname: "today"
    };
  }

  componentWillMount() {
    const url = new URL(window.location.href);
    const pathname = url.pathname.slice(1);
    this.setState({
      pathname
    });
  }

  componentWillReceiveProps() {
    const url = new URL(window.location.href);
    const pathname = url.pathname.slice(1);
    this.setState({
      pathname
    });
  }

  render() {
    return (
      <Navbar style={styles.navbar}>
        <Nav style={styles.nav}>
          <NavItem
            style={
              this.state.pathname === "me/journal"
                ? styles.navItem.active
                : styles.navItem
            }
          >
            <Link to="/me/journal" className="link" style={styles.navLink}>
              Journal
            </Link>
          </NavItem>
          <NavItem
            style={
              this.state.pathname === "me"
                ? styles.navItem.active
                : styles.navItem
            }
          >
            <Link to="/me" className="link" style={styles.navLink}>
              Today
            </Link>
          </NavItem>
          <NavItem
            style={
              this.state.pathname === "me/profile"
                ? styles.navItem.active
                : styles.navItem
            }
          >
            <Link to="/me/profile" className="link" style={styles.navLink}>
              Profile
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
