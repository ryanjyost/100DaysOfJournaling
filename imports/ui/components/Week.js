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

      if (day.isToday && day.hasEntry && day.isCurrentMonth) {
        moreStyle = styles.hasEntryTodayCurrentMonth;
      } else if (day.isCurrentMonth && day.hasEntry) {
        moreStyle = styles.hasEntryCurrentMonth;
      } else if (day.isToday && day.isCurrentMonth) {
        moreStyle = styles.isToday;
      } else if (day.isCurrentMonth) {
        moreStyle = styles.currentMonth;
      } else {
        moreStyle = styles.notCurrentMonth;
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
