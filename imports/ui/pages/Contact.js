import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import styles from "../styles/login.js";

export default class PrivacyPolicy extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col className="page__column">
            <br />
            <h1>Contact</h1>
            <br />
            <p>
              This app is managed by me, Ryan Yost. Feel free to reach out for
              any reason.
            </p>
            <br />
            <h2>ryanjyost@gmail.com</h2>
          </Col>
        </Row>
      </Container>
    );
  }
}
