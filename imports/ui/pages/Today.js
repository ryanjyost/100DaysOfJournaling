import React, { Component } from "react";
import moment from "moment";
import { Meteor } from "meteor/meteor";
import ReactQuill from "react-quill";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import renderHTML from "react-render-html";

import { Row, Col } from "reactstrap";
import styles from "../styles/today";

import "react-quill/dist/quill.snow.css";
import { setInterval } from "timers";

class Today extends Component {
  constructor() {
    super();
    this.state = {
      publishable: false,
      intervalId: null,
      text: "",
      placeholder: "",
      todayHasEntry: false,
      prompt: {
        title: "What do you hope to get out of journaling?",
        date: "2017-04-19T12:59-0500"
      },
      quill: {
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"],
            [{ list: "ordered" }, { list: "bullet" }]
          ]
        }
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.printText = this.printText.bind(this);
    this.save = this.save.bind(this);
    this.publish = this.publish.bind(this);
  }

  componentDidMount() {
    if (!this.props.todaysPost) {
      let interval = setInterval(this.printText, 30);
      this.setState({ intervalId: interval._id });
    } else {
      this.setState({
        text: this.props.todaysPost.text,
        publishable: true
      });

      if (this.props.todaysPost.published) {
        this.setState({
          todayHasPost: true
        });
      }
    }
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  handleChange(value) {
    this.setState({ text: value });
  }

  handleKeyUp() {
    if (!this.state.publishable) {
      this.setState({ publishable: true });
    }
  }

  printText() {
    const target = "Write today's journal entry here. Keep the streak alive!";
    const placeholder = this.state.placeholder;
    if (target.length - 1 === placeholder.length) {
      clearInterval(this.state.intervalId);
    }

    const array = target.split("");
    const newPlaceholder = placeholder.concat(array[placeholder.length]);

    this.setState({
      placeholder: newPlaceholder,
      text: `<p>${newPlaceholder}</p>`
    });
  }

  save() {
    if (this.props.todaysPost) {
      Meteor.call("posts.save", this.props.todaysPost._id, this.state.text);
    } else {
      Meteor.call("posts.saveNew", this.state.text);
    }
  }

  publish() {
    if (this.props.todaysPost) {
      Meteor.call(
        "posts.publishSaved",
        this.props.todaysPost._id,
        this.state.text
      );
    } else {
      Meteor.call("posts.publishNew", this.state.text);

      window.location.reload();
    }

    this.setState({
      todayHasPost: true
    });
  }

  render() {
    const lastSaved = this.props.todaysPost
      ? moment(this.props.todaysPost.createdAt)
      : null;

    if (this.state.todayHasPost) {
      return (
        <div>
          <Row style={styles.row}>
            <Col>
              <h2 style={styles.h2}>
                <strong style={styles.pink}>Major props!</strong>
                <br /> You made a journal entry today.
              </h2>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col style={styles.todaysPost}>
              <div className="post__text">
                {renderHTML(this.props.todaysPost.text)}
              </div>
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Row style={styles.rowWithBorder}>
            <Col>
              <h6 style={styles.prompt}>
                What do you hope to get out of journaling?
              </h6>
              <div style={styles.promptBtn}>
                click for another random prompt
              </div>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col>
              <div style={styles.postDate}>
                {moment().format("dddd, MMMM DD, YYYY")}
              </div>
            </Col>
          </Row>
          <Row>
            <Col style={styles.buttonContainer}>
              <span style={styles.buttonLeft} onClick={this.save}>
                Save
              </span>

              <span style={styles.saveText}>
                {lastSaved ? `Last saved ${lastSaved.fromNow()}` : ""}
              </span>
              <span
                style={
                  this.state.publishable
                    ? styles.publishButton.active
                    : styles.publishButton.inactive
                }
                onClick={this.publish}
              >
                Publish
              </span>
            </Col>
          </Row>

          <Row>
            <Col>
              <ReactQuill
                theme="snow"
                value={this.state.text}
                onChange={this.handleChange}
                onKeyUp={this.handleKeyUp}
                modules={this.state.quill.modules}
                className="quill"
              />
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default withTracker(() => {
  const start = moment()
    .startOf("day")
    .valueOf();
  const end = moment()
    .endOf("day")
    .valueOf();

  return {
    todaysPost: Posts.findOne({
      createdAt: { $gte: start, $lt: end },
      owner: Meteor.userId()
    }),
    currentUser: Meteor.user()
  };
})(Today);
