import React, { Component } from "react";
import { Row } from "reactstrap";
import Calendar from "../components/Calendar";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
//import styles from "../styles/journal";
import moment from "moment";

class Profile extends Component {
  render() {
    const datesWithEntries = this.props.posts.map(post => {
      return moment(post.createdAt).format("YYYY-MM-DD");
    });

    let streakIsAlive = true,
      streak = 0,
      dateToCheck = moment()
        .subtract(1, "days")
        .format("YYYY-MM-DD"),
      today = moment().format("YYYY-MM-DD");

    const todayHasEntry = datesWithEntries.includes(today);
    if (todayHasEntry) {
      streak++;
    }

    while (streakIsAlive) {
      const dateHasEntry = dateToCheck === datesWithEntries[streak];

      if (!dateHasEntry) {
        streakIsAlive = false;
      } else if (streak > 100) {
        streakIsAlive = false;
      } else {
        streak++;
        dateToCheck = moment(dateToCheck, "YYYY-MM-DD")
          .subtract(1, "days")
          .format("YYYY-MM-DD");
      }
    }

    return (
      <div>
        <Row style={styles.row}>
          <h5 style={styles.h5}>Your current journaling streak</h5>
          <h1 style={styles.h1}>{streak}</h1>
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
