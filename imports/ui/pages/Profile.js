import React, { Component } from "react";
import { Row } from "reactstrap";
import Calendar from "../components/Calendar";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import styles from "../styles/profile";
import moment from "moment";

class Profile extends Component {
  render() {
    const datesWithEntries = this.props.posts.map(post => {
      return moment(post.createdAt).format("YYYY-MM-DD");
    });

    let streakIsAlive = true,
      streak = 0,
      prevDate = moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD"),
      today = moment().format("YYYY-MM-DD");

    const todayHasEntry = datesWithEntries.includes(today);
    console.log(todayHasEntry);

    // while (streakIsAlive) {}

    return (
      <div>
        <Row style={styles.row}>
          <h6>Current Streak</h6>
          <h1>7</h1>
        </Row>
        <Row style={styles.row}>
          <Calendar selectedDates={datesWithEntries} />
        </Row>
      </div>
    );
  }
}

export default withTracker(() => {
  return {
    posts: Posts.find(
      { published: true, owner: Meteor.userId() },
      { sort: { createdAt: -1 } }
    ).fetch()
  };
})(Profile);
