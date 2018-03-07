import React, { Component } from "react";
import renderHTML from "react-render-html";
import PostFooter from "./PostFooter";
import moment from "moment";
import { Link } from "react-router";

import { Row, Col } from "reactstrap";
import styles from "../styles/posts";

export default class PostPreview extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hoverLikes: false,
      liked: false
    };
  }

  render() {
    const text = this.props.post.text;
    let newText = text.replace("<p><br></p><p><br></p>", "");
    newText = newText.replace(/<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/, "");

    return (
      <div>
        <li style={styles.li}>
          <Link
            to={{
              pathname:
                this.props.location.pathname.indexOf("us") > -1
                  ? `/us/${this.props.post._id}`
                  : `/journal/${this.props.post._id}`,
              state: { modal: true, returnTo: this.props.location.pathname }
            }}
          >
            <div className="post__text" style={styles.p} onClick={this.toggle}>
              {this.props.date && (
                <div style={styles.postDate}>{this.props.date}</div>
              )}
              {renderHTML(newText)}
            </div>
          </Link>
          <PostFooter post={this.props.post} />
        </li>
      </div>
    );
  }
}
