import React, { Component } from "react";
import { Row } from "reactstrap";
import Calendar from "../components/Calendar";
import styles from "../styles/profile";

export default class Profile extends Component {
  render() {
    return (
      <Row style={styles.row}>
        <Calendar />
      </Row>
    );
  }
}
