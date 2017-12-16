import React, { Component } from "react";
import { Container } from "reactstrap";
import Post from "../components/Post";

import styles from "../styles/posts.js";

export default class Journal extends Component {
  render() {
    return (
      <div>
        <ul className="postList" style={styles.ul}>
          <Post
            date="December 7th, 2017"
            text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise."
          />
          <Post
            date="December 7th, 2017"
            text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise."
          />
          <Post
            date="December 7th, 2017"
            text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise."
          />
          <Post
            date="December 7th, 2017"
            text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise."
          />
          <Post
            date="Friday December 7th, 2017"
            text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise."
          />
          <Post
            date="December 7th, 2017"
            text="This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise. This is an example post. Some would say it's a bad post because it has no real substance or direction. But the act itself of writing, regardless of quality or purpose, is a useful exercise."
          />
        </ul>
      </div>
    );
  }
}
