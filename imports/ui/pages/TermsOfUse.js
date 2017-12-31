import React, { Component } from "react";

import { Container, Row, Col } from "reactstrap";
import AccountsUIWrapper from "../components/AccountsUIWrapper.js";
import styles from "../styles/login.js";

export default class TermsOfUse extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col
            className="login__container"
            sm={{ size: 10, offset: 1 }}
            md={{ size: 8, offset: 2 }}
            lg={{ size: 6, offset: 3 }}
          >
            <AccountsUIWrapper />
          </Col>
        </Row>
        <Row style={styles.rowWhite}>
          <h2 style={styles.h2}>
            {" "}
            Daily journaling app with an <br />
            <strong>anonymous twist.</strong>
          </h2>
        </Row>

        <Row style={styles.rowWhite} />
      </Container>
    );
  }
}
