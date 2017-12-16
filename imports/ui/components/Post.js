import React, { Component } from "react";
import PostModal from "./PostModal";

import { Row, Col } from "reactstrap";
import styles from "../styles/posts";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <div>
        <li className="post" style={styles.li} onClick={this.toggle}>
          {this.props.date && (
            <div style={styles.postDate}>Thursday, December 7, 2017</div>
          )}
          <p className="post__text" style={styles.p}>
            {this.props.text}
          </p>
        </li>
        <PostModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          text={this.props.text}
        />
      </div>
    );
  }
}
