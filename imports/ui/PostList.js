import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";

import { Posts } from "../api/posts.js";

// App component - represents the whole app
class PostList extends Component {
  renderPosts() {
    return this.props.posts.map(post => <h1>{post.text}</h1>);
  }

  render() {
    return <div>{this.renderPosts()}</div>;
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({}).fetch()
  };
})(PostList);
