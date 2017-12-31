import React, { Component } from "react";
import renderHTML from "react-render-html";
import PostModal from "./PostModal";
import FaHeartFull from "react-icons/lib/fa/heart";
import FaHeartEmpty from "react-icons/lib/fa/heart-o";
import moment from "moment";

import { Row, Col } from "reactstrap";
import styles from "../styles/posts";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hoverLikes: false,
      liked: false
    };
    this.toggle = this.toggle.bind(this);
    this.onMouseEnterLikes = this.onMouseEnterLikes.bind(this);
    this.onMouseLeaveLikes = this.onMouseLeaveLikes.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onMouseEnterLikes() {
    if (!this.state.liked) {
      this.setState({
        hoverLikes: true
      });
    }
  }

  onMouseLeaveLikes() {
    if (!this.state.liked) {
      this.setState({
        hoverLikes: false
      });
    }
  }

  render() {
    return (
      <div>
        <li className="post" style={styles.li}>
          {this.props.date && (
            <div style={styles.postDate}>
              {moment(this.props.date).format("dddd, MMMM DD, YYYY")}
            </div>
          )}
          <div className="post__text" style={styles.p} onClick={this.toggle}>
            {renderHTML(this.props.post.text)}
          </div>
          <div style={styles.buttonBar}>
            <span style={styles.responses}>
              {this.props.post.responses.length} responses
            </span>
            <span className="post__reportBtn" style={styles.reportBtn} />
            <span
              onMouseEnter={this.onMouseEnterLikes}
              onMouseLeave={this.onMouseLeaveLikes}
              style={styles.likes}
            >
              {this.props.post.likes.length}{" "}
              {this.state.hoverLikes ? (
                <FaHeartFull style={styles.heart} color="#ffacac" size="15px" />
              ) : (
                <FaHeartEmpty
                  style={styles.heart}
                  color="#ffacac"
                  size="15px"
                />
              )}
            </span>
          </div>
        </li>
        <PostModal
          isOpen={this.state.modal}
          toggle={this.toggle}
          text={this.props.post.text}
        />
      </div>
    );
  }
}
