import React, { Component } from "react";

import { Container } from "reactstrap";
import styles from "../styles/loading.js";

export default class Prompt extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <div style={styles.circle} className="loader__circle">
          <img
            height="60px"
            style={styles.img}
            src="/images/jotlot_loader.png"
            className="loader__img"
          />
        </div>
      </Container>
    );
  }
}
