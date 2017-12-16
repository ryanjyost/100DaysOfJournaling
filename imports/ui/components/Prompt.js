import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import styles from "../styles/today";

export default class Prompt extends Component {
  render() {
    return (
      <Row style={styles.row}>
        <Col>
          <div style={styles.promptDate}>{this.props.promptDate}</div>
          <h6 style={styles.prompt}>{this.props.prompt}</h6>
        </Col>
      </Row>
    );
  }
}
