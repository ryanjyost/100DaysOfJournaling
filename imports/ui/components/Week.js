import React, { Component } from "react";
import moment, { clone, add, startOf, day, month, isSame } from "moment";

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
        date: date
      };

      days.push(
        <div
          key={date.toString()}
          // onClick={this.props.select(day.date)}
          className={
            "calendar__date " +
            (!day.isCurrentMonth ? "calendar__date--differentMonth" : "")
          }
        >
          {day.number}
        </div>
      );
      date = date.clone();
      date.add(1, "d");
    }

    return <div className="calendar__row">{days}</div>;
  }
}
