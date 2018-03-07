import React, { Component } from "react";
import { Container } from "reactstrap";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import moment from "moment";

import PostPreview from "../components/PostPreview";

import styles from "../styles/posts.js";

class PostFeedIndex extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts() {
    return this.props.posts.map(post => {
      return (
        <PostPreview
          location={this.props.location}
          key={post._id}
          post={post}
          date={moment(post.createdAt).fromNow()}
        />
      );
    });
  }

  render() {
    return (
      <Container style={{ ...styles.container, ...{ padding: "0px 4%" } }}>
        <div style={styles.recentEntries}>all recent entries</div>
        <ul className="postList" style={styles.ul}>
          {this.renderPosts()}
        </ul>
      </Container>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find(
      { published: true },
      { sort: { createdAt: -1 }, limit: 20 }
    ).fetch()
  };
})(PostFeedIndex);
