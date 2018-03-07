import React, { Component } from "react";
import moment from "moment";
import { Meteor } from "meteor/meteor";
import ReactQuill from "react-quill";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import renderHTML from "react-render-html";
import Twitter from "react-icons/lib/fa/twitter";
import { withRouter } from "react-router";

import { Row, Col, Container, Modal, ModalBody } from "reactstrap";
import styles from "../styles/today";

import "react-quill/dist/quill.snow.css";
import { setInterval } from "timers";

import Comments from "../components/Comments";
import PostFooter from "../components/PostFooter";
import PromptPicker from "../components/PromptPicker";
import Meme from "../components/Meme";

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
            ["bold", "italic", "underline", "blockquote", "link", "image"],
            [{ list: "ordered" }, { list: "bullet" }]
          ]
        }
      },
      modalOpen: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.printText = this.printText.bind(this);
    this.save = this.save.bind(this);
    this.publish = this.publish.bind(this);
  }

  componentDidMount() {
    if (this.props.todaysPost) {
      this.setState({
        text: this.props.todaysPost.text,
        publishable: true
      });
    } else if (this.props.posts.length > 0) {
    } else {
      let interval = setInterval(this.printText, 30);
      this.setState({ intervalId: interval._id });
    }

    this.props.router.setRouteLeaveHook(this.props.route, () => {
      this.save();
    });

    if (this.props.posts.length < 1) {
      this.setState({
        modalOpen: true
      });
    }

    document.addEventListener(
      "keydown",
      e => {
        if (
          e.keyCode == 83 &&
          (navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey)
        ) {
          e.preventDefault();
          this.save();
        }
      },
      false
    );
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
    const target = "Write your first journal entry here.";
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
  }

  render() {
    const lastSaved = this.props.todaysPost
      ? moment(this.props.todaysPost.createdAt)
      : null;

    const datesWithEntries = this.props.posts.map(post => {
      return moment(post.createdAt).format("YYYY-MM-DD");
    });

    let dayOfChallenge = datesWithEntries.length;

    let text, newText;
    if (this.props.todaysPost) {
      text = this.props.todaysPost.text;
      newText = text.replace("<p><br></p><p><br></p>", "");
    }

    if (this.props.todaysPost && this.props.todaysPost.published) {
      return (
        <div>
          <Row style={styles.row}>
            <Col style={{ paddingTop: 40 }}>
              <Meme dayOfChallenge={dayOfChallenge} />

              <div
                style={{
                  display: "block",
                  width: "100%",
                  padding: "20px 5%",
                  textAlign: "center",
                  marginBottom: 20,
                  marginTop: 20
                }}
              >
                <a
                  style={{
                    padding: "10px 10px",
                    margin: "auto",
                    backgroundColor: "#1da1f2",
                    color: "#fff",
                    fontSize: 12,
                    borderRadius: 3
                  }}
                  href={`https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=%23100DaysOfJournaling Day ${dayOfChallenge}%3A%0A%0A%23100DaysOfX %0A&tw_p=tweetbutton`}
                  target="_blank"
                  className="twitter-share-button"
                >
                  <Twitter size={16} color="#fff" /> Share your progress
                </a>
              </div>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col style={styles.todaysPost}>
              <div className="modal__text">{renderHTML(newText)}</div>
            </Col>
          </Row>
          <Row style={styles.row}>
            <Col xs={12} style={{ width: "90%" }}>
              <PostFooter
                post={this.props.todaysPost}
                style={{ width: "90%" }}
              />
            </Col>
            <Col xs={12} style={{ backgroundColor: "#fafafa", paddingTop: 20 }}>
              <Comments
                post={this.props.todaysPost}
                currentUser={this.props.currentUser}
              />
            </Col>
          </Row>
        </div>
      );
    } else {
      return (
        <div>
          <Modal
            isOpen={this.state.modalOpen}
            toggle={() => this.setState({ modalOpen: !this.state.modalOpen })}
            style={{ top: "20%" }}
          >
            <ModalBody style={{ padding: "100px 20px" }}>
              <h1 style={{ textAlign: "center", color: "#333333" }}>Whoo!</h1>
              <h2 style={{ ...styles.h2, ...{ color: "#555555" } }}>
                You're ready to write<br /> your first entry of the <br />
                <span style={{ color: "#ff9f9f" }}>
                  #100DaysOfJournaling<br /> Challenge
                </span>
              </h2>
              <div
                style={{
                  display: "block",
                  width: "100%",
                  padding: "20px 5%",
                  textAlign: "center"
                }}
              >
                <a
                  style={{
                    padding: "10px 10px",
                    margin: "auto",
                    backgroundColor: "#1da1f2",
                    color: "#fff",
                    fontSize: 12,
                    borderRadius: 3
                  }}
                  href="https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&related=twitterapi%2Ctwitter&text=I'm publicly committing to the %23100DaysOfJournaling challenge today at 100DaysOfJournaling.com! %0A%0ALearn more and join me %23100DaysOfX http://100daysofx.com/where-x-is/journaling/&tw_p=tweetbutton"
                  target="_blank"
                  className="twitter-share-button"
                >
                  <Twitter size={16} color="#fff" /> Tweet your commitment to
                  the challenge
                </a>
              </div>
            </ModalBody>
          </Modal>
          <PromptPicker />
          <Container>
            <Row style={styles.rowButtons}>
              <Col style={styles.buttonContainerTop}>
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
                <span style={styles.saveText}>
                  {lastSaved
                    ? `Last saved ${lastSaved.fromNow()}`
                    : "Not saved"}
                </span>
              </Col>
            </Row>
            <Row style={styles.rowButtons}>
              <Col style={styles.buttonContainerBottom}>
                <span style={styles.postDate}>
                  {moment().format("dddd, MMMM DD, YYYY")}
                </span>
                <span style={styles.saveButton} onClick={this.save}>
                  Save
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
          </Container>
        </div>
      );
    }
  }
}

const TodayWithTracker = withTracker(() => {
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
    currentUser: Meteor.user(),
    posts: Posts.find(
      { published: true, owner: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch()
  };
})(Today);

export default withRouter(TodayWithTracker);
