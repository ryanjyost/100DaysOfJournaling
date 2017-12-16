import React, { Component } from "react";
import { Container } from "reactstrap";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";

import Post from "../components/Post";
import PostModal from "../components/PostModal";

import styles from "../styles/posts.js";

class PostFeed extends Component {
  render() {
    return (
      <div>
        <Container style={styles.container}>
          <div style={styles.postDate}>entries from today</div>
          <ul className="postList" style={styles.ul}>
            <Post text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise." />
            <Post text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise." />
            <Post text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise." />
            <Post text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise." />
            <Post text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise." />
            <Post text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise." />
          </ul>
        </Container>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find({}).fetch()
  };
})(PostFeed);
