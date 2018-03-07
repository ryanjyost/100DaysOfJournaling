import React, { Component } from "react";
import Textarea from "react-textarea-autosize";
import { Meteor } from "meteor/meteor";

import Comment from "./Comment";

import styles from "../styles/comments.js";

import {} from "reactstrap";

export default class Comments extends Component {
  constructor() {
    super();

    this.state = {
      text: ""
    };

    this.publishComment = this.publishComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  publishComment() {
    Meteor.call("posts.comment", this.props.post._id, this.state.text);
    this.setState({ text: "" });
  }

  renderComments() {
    const comments = this.props.post.comments.map((comment, i) => {
      return (
        <Comment key={i} comment={comment} postOwner={this.props.post.owner} />
      );
    });

    return comments.reverse();
  }

  render() {
    return (
      <div style={styles.comments}>
        {this.props.currentUser && (
          <Textarea
            style={styles.textarea}
            placeholder="Write your response here."
            value={this.state.text}
            // onChange={e => this.setState({ text: e.target.value })}
            onChange={e => this.setState({ text: e.target.value })}
          />
        )}
        {this.props.currentUser &&
          (this.state.text.length > 0 ? (
            <div onClick={this.publishComment} style={styles.replyBtnActive}>
              Reply
            </div>
          ) : (
            <div style={styles.replyBtnInactive}>Reply</div>
          ))}

        <ul style={styles.ul}>{this.renderComments()}</ul>
      </div>
    );
  }
}
