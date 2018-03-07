import React, { Component } from "react";
import renderHTML from "react-render-html";
import PostFooter from "./PostFooter";
import Comments from "./Comments";
import FaClose from "react-icons/lib/md/clear";
import Textarea from "react-textarea-autosize";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import moment from "moment";

import styles from "../styles/posts.js";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";

class Post extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const text = this.props.post.text;
    const newText = text.replace("<p><br></p><p><br></p>", "");

    return (
      <div>
        <ModalBody
          style={{ ...styles.modalBody, ...{ maxWidth: 520, margin: "auto" } }}
        >
          <div className="modal__text" style={styles.text}>
            <div style={styles.postDate}>
              {moment(this.props.post.createdAt).fromNow()}
            </div>
            {renderHTML(newText)}
          </div>
          <PostFooter post={this.props.post} />
        </ModalBody>
        <ModalFooter style={styles.modalFooter}>
          <Comments
            post={this.props.post}
            currentUser={this.props.currentUser}
          />
        </ModalFooter>
      </div>
    );
  }
}

export default withTracker(props => {
  return {
    post: Posts.findOne({
      // _id: new Mongo.ObjectID(1)
      _id: props.params.id
    }),
    currentUser: Meteor.user()
  };
})(Post);
