import React, { Component } from "react";
import { Container } from "reactstrap";
import Post from "../components/Post";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";

import styles from "../styles/posts.js";

class Journal extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return <Post key={post._id} post={post} date={post.createdAt} />;
    });
  }

  render() {
    return (
      <div>
        <ul className="postList" style={styles.ul}>
          {this.renderPosts()}
        </ul>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find(
      { published: true, owner: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch()
  };
})(Journal);
