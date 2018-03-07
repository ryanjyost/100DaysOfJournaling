import React, { Component } from "react";
import renderHTML from "react-render-html";
import FaHeartFull from "react-icons/lib/fa/heart";
import FaHeartEmpty from "react-icons/lib/fa/heart-o";
import FaCommentO from "react-icons/lib/fa/comment-o";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import { browserHistory } from "react-router";

import { Row, Col } from "reactstrap";
import styles from "../styles/postFooter";

class PostFooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hoverLikes: false,
      userOwnsPost: this.props.currentUserId === this.props.post.owner,
      userLikedPost:
        this.props.post.likes.indexOf(this.props.currentUserId) > -1
    };

    this.onMouseEnterLikes = this.onMouseEnterLikes.bind(this);
    this.onMouseLeaveLikes = this.onMouseLeaveLikes.bind(this);
    this.onClickLike = this.onClickLike.bind(this);
    this.renderLikeButton = this.renderLikeButton.bind(this);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.post.likes.indexOf(this.props.currentUserId) > -1) {
      this.setState({
        userLikedPost: true
      });
    }
  }

  onMouseEnterLikes() {
    if (this.props.currentUser) {
      this.setState({
        hoverLikes: true
      });
    }
  }

  onMouseLeaveLikes() {
    if (this.props.currentUser) {
      this.setState({
        hoverLikes: false
      });
    }
  }

  onClickLike() {
    //check that user doesn't own the post AND hasn't already liked it
    if (
      this.props.currentUser &&
      !this.state.userOwnsPost &&
      !this.state.userLikedPost
    ) {
      Meteor.call("posts.like", this.props.post._id);
      this.setState({
        userLikedPost: true
      });
    }
  }

  confirmDelete() {
    if (
      confirm("Are you sure you want to delete this journal entry?") === true
    ) {
      Meteor.call("posts.delete", this.props.post._id);
      browserHistory.push("/me/journal");
    }
  }

  renderLikeButton() {
    if (
      this.state.hoverLikes &&
      !this.state.userLikedPost &&
      !this.state.userOwnsPost
    ) {
      return (
        <FaHeartFull
          onClick={this.onClickLike}
          style={styles.icon}
          color="#ffacac"
          size="15px"
        />
      );
    } else if (this.state.userLikedPost) {
      return <FaHeartFull style={styles.icon} color="#ffacac" size="15px" />;
    } else if (this.state.userOwnsPost) {
      return <FaHeartFull style={styles.icon} color="#f2f2f2" size="15px" />;
    } else {
      return <FaHeartEmpty style={styles.icon} color="#ffacac" size="15px" />;
    }
  }

  render() {
    return (
      <div style={styles.postFooter}>
        <span style={styles.comments}>
          <span style={styles.commentCount}>
            {this.props.post.comments.length}
          </span>{" "}
          <FaCommentO style={styles.commentIcon} color="#d8d8d8" size="18px" />
        </span>
        {this.state.userOwnsPost ? (
          <span
            className="post__reportBtn"
            onClick={this.confirmDelete}
            style={styles.reportBtn}
          >
            delete{" "}
          </span>
        ) : (
          <span className="post__reportBtn" style={styles.reportBtn}>
            {" "}
          </span>
        )}

        <span
          style={styles.likes}
          onMouseEnter={this.onMouseEnterLikes}
          onMouseLeave={this.onMouseLeaveLikes}
        >
          {this.props.post.likes.length} {this.renderLikeButton()}
        </span>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    currentUserId: Meteor.userId(),
    currentUser: Meteor.user()
  };
})(PostFooter);
