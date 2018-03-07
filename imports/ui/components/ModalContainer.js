import React, { Component } from "react";
import renderHTML from "react-render-html";

import Post from "./Post";
import PostFooter from "./PostFooter";
import Comments from "./Comments";

import styles from "../styles/postModal.js";

import { Modal, ModalBody, ModalFooter } from "reactstrap";
import { Link } from "react-router";
import FaClose from "react-icons/lib/md/clear";

export default class ModalContainer extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>{this.props.children}</div>;
    // return (
    //   <Modal isOpen={this.props.isOpen} size="lg">
    //     <Link to={this.props.returnTo}>
    //       <FaClose style={styles.closeBtn} color="#d8d8d8" size="30" />
    //     </Link>
    //     <ModalBody style={styles.modalBody}>
    //       <div className="modal__text" style={styles.text}>
    //         {renderHTML(this.props.post.text)}
    //       </div>
    //       <PostFooter post={this.props.post} />
    //     </ModalBody>
    //     <ModalFooter style={styles.modalFooter}>
    //       <Comments post={this.props.post} />
    //     </ModalFooter>
    //   </Modal>
    // );
  }
}
