import React, { Component } from "react";
import styles from "../styles/comment.js";
import moment from "moment";
import { withTracker } from "meteor/react-meteor-data";

import {} from "reactstrap";

class Comment extends Component {
  render() {
    const { text, createdAt, owner } = this.props.comment;

    renderCommentAttr = () => {
      if (this.props.currentUserId === owner) {
        return <span style={styles.commentAttrUser}>you</span>;
      } else if (this.props.postOwner === owner) {
        return <span style={styles.commentAttrJournaler}>journaler</span>;
      } else {
        return <span style={styles.commentAttr} />;
      }
    };

    return (
      <li style={styles.comment}>
        <p style={styles.p}>{text}</p>
        <div style={styles.footer}>
          {renderCommentAttr()}
          <span style={styles.date}>{moment(createdAt).fromNow()}</span>
        </div>
      </li>
    );
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId()
  };
})(Comment);
