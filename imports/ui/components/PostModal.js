import React, { Component } from "react";
import renderHTML from "react-render-html";
import styles from "../styles/posts.js";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default class PostModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalBody style={styles.modalText}>
          <div className="post__text">{renderHTML(this.props.text)}</div>
        </ModalBody>
        <ModalFooter>
          <Button className="btn--close" onClick={this.props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
