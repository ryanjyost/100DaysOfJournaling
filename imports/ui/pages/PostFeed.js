import React, { Component } from "react";
import { Container } from "reactstrap";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";

import Post from "../components/Post";
import PostModal from "../components/PostModal";

import styles from "../styles/posts.js";

class PostFeed extends Component {
  constructor(props) {
    super(props);
    this.renderPosts = this.renderPosts.bind(this);
  }

  renderPosts() {
    // console.log(this.props.posts);
    return this.props.posts.map(post => {
      return <Post key={post._id} text={post.text} />;
    });
  }

  render() {
    return (
      <div>
        <Container style={styles.container}>
          <div style={styles.postDate}>recent entries</div>
          <ul className="postList" style={styles.ul}>
            {this.renderPosts()}
          </ul>
        </Container>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({ published: true }, { sort: { createdAt: -1 } }).fetch()
  };
})(PostFeed);
