import React, { Component } from "react";
import renderHTML from "react-render-html";
import styles from "../styles/postModal.js";
import FaClose from "react-icons/lib/md/clear";
import Textarea from "react-textarea-autosize";

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from "reactstrap";

export default class PostModal extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <FaClose
          onClick={this.props.toggle}
          style={styles.closeBtn}
          color="#f2f2f2"
          size="30"
        />
        <ModalBody style={styles.modalBody}>
          <div className="post__text">{renderHTML(this.props.text)}</div>
        </ModalBody>
        <ModalFooter style={styles.modalFooter}>
          <Textarea
            style={styles.textarea}
            placeholder="Write your response here."
          />
        </ModalFooter>
      </Modal>
    );
  }
}
