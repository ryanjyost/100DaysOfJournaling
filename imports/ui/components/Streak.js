import React, { Component } from "react";
import { Row } from "reactstrap";
import Calendar from "../components/Calendar";
import { Posts } from "../../api/posts.js";
import { withTracker } from "meteor/react-meteor-data";
import styles from "../styles/streak";
import moment from "moment";
import axios from "axios";

class Streak extends Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null
    };
  }

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

    let dayOfChallenge = datesWithEntries.length;
    if (datesWithEntries.indexOf(today) < 0) {
      dayOfChallenge++;
    }

    const meme = {
      ext: "buzz",
      top: "memes",
      bottom: "memes everywhere"
    };

    const { ext, top, bottom } = meme;

    return (
      <div>
        <Row style={{ ...styles.row, ...{ paddingBottom: 20 } }}>
          <h5 style={styles.h5}>You're on day</h5>
          <h1 style={styles.h1}>{dayOfChallenge}</h1>
          <h5 style={styles.h5}>of the challenge</h5>
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
})(Streak);
