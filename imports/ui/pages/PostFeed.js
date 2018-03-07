import React, { Component } from "react";
import { Container, Modal } from "reactstrap";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import moment from "moment";

import PostPreview from "../components/PostPreview";
import ModalContainer from "../components/ModalContainer";
import { Link } from "react-router";
import FaClose from "react-icons/lib/md/clear";

import styles from "../styles/posts.js";

class PostFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isModal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  componentWillMount() {
    // this.setState({
    //   isOpen: isModal
    // });
  }

  componentWillReceiveProps(nextProps) {
    // if we changed routes...
    // console.log("PROPS", nextProps);

    if (
      nextProps.location.key !== this.props.location.key &&
      nextProps.location.state &&
      nextProps.location.state.modal
    ) {
      // save the old children (just like animation)
      this.previousChildren = this.props.children;
    }

    let isModal =
      typeof nextProps.location.state === "object" &&
      typeof this.previousChildren === "object" &&
      nextProps.location.state.modal;

    this.setState({
      isModal
    });
  }

  toggle() {
    this.props.router.goBack();
    this.setState({
      isModal: false
    });
  }

  render() {
    let { location } = this.props;
    let { isModal } = this.state;

    //console.log(location.pathname.indexOf("/me/journal"));

    return (
      <div
        style={{
          paddingTop: location.pathname.indexOf("journal") >= 0 ? 20 : 60
        }}
      >
        {isModal ? this.previousChildren : this.props.children}

        {isModal && (
          <Modal
            isOpen={this.state.isModal}
            toggle={this.toggle}
            keyboard={true}
            size="lg"
          >
            <Link
              style={styles.closeButtonContainer}
              onClick={this.toggle}
              to={location.state.returnTo}
            >
              <FaClose style={styles.closeButton} color="#d8d8d8" size="30" />
            </Link>
            {this.props.children}
          </Modal>
        )}
      </div>
    );
  }
}

export default withTracker(props => {
  return {
    posts: Posts.find(
      { published: true },
      { sort: { createdAt: -1 }, limit: 20 }
    ).fetch()
  };
})(PostFeed);
