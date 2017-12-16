import React, { Component } from "react";

import { Row, Col } from "reactstrap";
import styles from "../styles/posts";
import Prompt from "./Prompt";

export default class PostWithDate extends Component {
  render() {
    return (
      <li className="post" style={styles.li}>
        <div style={styles.promptDate}>Thursday, December 7, 2017</div>
        <h6 style={styles.prompt}>What do you hope to get out of journaling</h6>
        <p className="post__text" style={styles.p}>
          {this.props.text}
        </p>
      </li>
    );
  }
}
