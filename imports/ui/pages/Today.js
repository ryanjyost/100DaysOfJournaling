import React, { Component } from "react";
import moment from "moment";
import ReactQuill from "react-quill";
import Prompt from "../components/Prompt";

import { Row, Col } from "reactstrap";
import styles from "../styles/today";

import "react-quill/dist/quill.bubble.css";
import { setInterval } from "timers";

export default class Today extends Component {
  constructor() {
    super();
    this.state = {
      publishable: false,
      selectedDate: moment(),
      intervalId: null,
      text: "",
      placeholder: "",
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
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.printText = this.printText.bind(this);
  }

  componentDidMount() {
    if (this.state.text === "") {
      let interval = setInterval(this.printText, 30);
      this.setState({ intervalId: interval._id });
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
    const target =
      "Type your response to today's prompt here. Highlight some text to format. Or don't.";
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

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <div>
        <Row style={styles.rowWithBorder}>
          <Col>
            <h6 style={styles.prompt}>
              What do you hope to get out of journaling?
            </h6>
            <div style={styles.promptBtn}>click for another random prompt</div>
          </Col>
        </Row>
        <Row style={styles.row}>
          <Col>
            <div style={styles.postDate}>Friday, December 8, 2017</div>
          </Col>
        </Row>
        <Row>
          <Col style={styles.buttonContainer}>
            <span style={styles.buttonLeft}>Save</span>
            <span style={styles.saveText}>Last saved 5 minutes ago.</span>
            <span
              style={
                this.state.publishable
                  ? styles.publishButton.active
                  : styles.publishButton.inactive
              }
            >
              Publish
            </span>
          </Col>
        </Row>

        <Row>
          <Col>
            <ReactQuill
              theme="bubble"
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
