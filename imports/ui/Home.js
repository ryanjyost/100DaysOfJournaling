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
  NavLink,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import Moment from "react-moment";
import ReactQuill from "react-quill";
import FaCalendar from "react-icons/lib/fa/calendar";
import InfiniteCalendar from "react-infinite-calendar";
import "react-infinite-calendar/styles.css"; // Make sure to import the default stylesheet

import "bootstrap/dist/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";

import styles from "../styles/quillStyles.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true,
      text: "Start jotting...",
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
    }; // You can also pass a Quill Delta here
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
      <div>
        <Navbar fixed="top" light className="navbar__container" expand="md">
          <NavbarBrand href="/">
            <img className="logo" height="40px" src="/images/jotlot-logo.png" />
          </NavbarBrand>
          <Nav className="ml-auto navbar__items" navbar>
            <NavItem
              className="navbar__item"
              style={
                this.state.collapsed
                  ? {}
                  : { borderBottom: "1px solid #FF8181" }
              }
            >
              <FaCalendar
                size={20}
                className="icon navbar__icon"
                onClick={this.toggleNavbar}
              />
            </NavItem>
          </Nav>
        </Navbar>
        <Container className="container--main">
          <Collapse
            className="collapse__container"
            isOpen={!this.state.collapsed}
          >
            <Row>
              <Col>
                <h1>This should collapse</h1>
              </Col>
            </Row>
          </Collapse>
          <Row className="prompt__container">
            <Col md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
              <h1 className="prompt">{this.state.prompt.title}</h1>
              <hr className="prompt__hr" />
              <h6 className="prompt__date">
                <Moment format="dddd, MMMM DD, YYYY ">
                  {this.state.prompt.date}
                </Moment>
              </h6>
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 10, offset: 1 }} lg={{ size: 6, offset: 3 }}>
              <ReactQuill
                theme="bubble"
                value={this.state.text}
                defaultValue="Start jotting here"
                onChange={this.handleChange}
                modules={this.state.quill.modules}
                style={styles.editor}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
