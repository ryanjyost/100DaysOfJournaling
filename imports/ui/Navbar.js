import React, { Component } from "react";

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

import FaCalendar from "react-icons/lib/fa/calendar";
import FaList from "react-icons/lib/fa/list-ul";

import "bootstrap/dist/css/bootstrap.css";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
      selectedDate: moment(),
      text: "",
      prompt: {
        title: "What do you hope to get out of journaling?",
        date: "2017-04-19T12:59-0500"
      },
      quill: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }]
          ]
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <Navbar fixed="top" light className="navbar__container" expand="md">
        <NavbarBrand href="/">
          <img className="logo" height="30px" src="/images/jotlot-logo.png" />
        </NavbarBrand>
        <Nav className="ml-auto navbar__items">
          <NavItem
            className="navbar__item"
            style={
              !this.state.collapsed ? {} : { borderBottom: "2px solid #FF8181" }
            }
          >
            <FaList
              size={35}
              className="icon navbar__icon"
              onClick={this.toggleNavbar}
            />
          </NavItem>
          <NavItem
            className="navbar__item"
            style={
              this.state.collapsed ? {} : { borderBottom: "2px solid #FF8181" }
            }
          >
            <FaCalendar
              size={35}
              className="icon navbar__icon"
              onClick={this.toggleNavbar}
            />
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
