import React, { Component } from "react";

import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

export default class PostModal extends Component {
  render() {
    return (
      <Modal isOpen={this.props.isOpen} toggle={this.props.toggle}>
        <ModalBody>{this.props.text}</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.props.toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}
