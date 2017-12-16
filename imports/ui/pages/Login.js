import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import AccountsUIWrapper from "../components/AccountsUIWrapper.js";

export default class Login extends Component {
  render() {
    return (
      <Container className="container--main">
        <Row>
          <Col md={{ size: 8, offset: 2 }} lg={{ size: 6, offset: 3 }}>
            <AccountsUIWrapper />
          </Col>
        </Row>
      </Container>
    );
  }
}
