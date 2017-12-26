import React, { Component } from "react";
import moment, { clone, add, startOf, day, month, isSame } from "moment";
import styles from "../styles/calendar.js";
import { includes } from "lodash";

export default class Week extends Component {
  render() {
    let days = [],
      date = this.props.date,
      month = this.props.month;

    for (let i = 0; i < 7; i++) {
      let day = {
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: month === date.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date,
        hasEntry: this.props.selectedDates.includes(date.format("YYYY-MM-DD"))
      };

      let moreStyle = {};

      if (day.hasEntry & day.isToday) {
        moreStyle = Object.assign({}, styles.isToday, styles.hasEntry);
      } else if (day.hasEntry) {
        moreStyle = styles.hasEntry;
      } else if (day.isToday) {
        moreStyle = styles.isToday;
        console.log(2);
      } else if (day.isCurrentMonth) {
        moreStyle = styles.currentMonth;
      } else {
        moreStyle = { backgroundColor: "#fff" };
      }

      const dateStyle = Object.assign({}, styles.date, moreStyle);
      days.push(
        <div key={date.toString()} style={dateStyle}>
          {day.number}
        </div>
      );
      date = date.clone();
      date.add(1, "d");
    }

    return <div style={styles.row}>{days}</div>;
  }
}
