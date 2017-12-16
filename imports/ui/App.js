import React, { Component } from "react";

import { withTracker } from "meteor/react-meteor-data";
import { Posts } from "../api/posts.js";

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
import moment from "moment";
import ReactQuill from "react-quill";

import "bootstrap/dist/css/bootstrap.css";
import "react-quill/dist/quill.snow.css";

import Calendar from "./Calendar";
import PostList from "./PostList";
import AccountsUIWrapper from "./AccountsUIWrapper.js";
import MobileNavTop from "./MobileNavTop";
import MobileNavBottom from "./MobileNavBottom";

class App extends Component {
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
      <div>
        <Container className="container--main">
          {/* <Collapse
            className="collapse__container"
            isOpen={!this.state.collapsed}
          >
            <Row>
              <Col>
                <Calendar />
              </Col>
            </Row>
          </Collapse> */}
          <Row className="prompt__container">
            <Col md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
              <h1 className="prompt__title">{this.state.prompt.title}</h1>
            </Col>
          </Row>

          <Row>
            <Col md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
              <ReactQuill
                theme="snow"
                value={this.state.text}
                defaultValue="Start jotting here"
                onChange={this.handleChange}
                modules={this.state.quill.modules}
                className="quill"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({}).fetch()
  };
})(App);
