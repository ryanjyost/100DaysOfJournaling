import React, { Component } from "react";
import renderHTML from "react-render-html";
import PostModal from "./PostModal";
import moment from "moment";

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
            <div style={styles.postDate}>
              {moment(this.props.date).format("dddd, MMMM DD, YYYY")}
            </div>
          )}
          <div className="post__text" style={styles.p}>
            {renderHTML(this.props.text)}
          </div>
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
