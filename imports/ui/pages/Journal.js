import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import PostPreview from "../components/PostPreview";
import Streak from "../components/Streak";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import { Meteor } from "meteor/meteor";
import moment from "moment";

import styles from "../styles/posts.js";

class Journal extends Component {
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
      <div>
        <Row
          style={{ padding: "10px 0px 0px 0px", maxWidth: 600, margin: "auto" }}
        >
          <Col style={{ paddingTop: 20 }}>
            <Streak />
            <ul
              className="postList"
              style={{ ...styles.ul, ...{ padding: "0px 4%" } }}
            >
              {this.props.posts.length ? (
                this.renderPosts()
              ) : (
                <h4 style={styles.h4}>
                  You don't have any journal entries...yet
                </h4>
              )}
            </ul>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find(
      { published: true, owner: Meteor.userId() },
      { sort: { createdAt: -1 }, limit: 20 }
    ).fetch()
  };
})(Journal);
