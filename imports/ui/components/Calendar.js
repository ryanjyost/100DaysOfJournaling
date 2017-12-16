import React, { Component } from "react";
import moment, { clone, add, startOf, day, month, isSame } from "moment";
import FaRight from "react-icons/lib/fa/angle-right";
import FaLeft from "react-icons/lib/fa/angle-left";

import Week from "./Week";
import DayNames from "./DayNames";

export default class Calendar extends Component {
  //lots of help from Chris Harrington https://www.codementor.io/chrisharrington/building-a-calendar-using-react-js--less-css-and-font-awesome-du107z6nt
  constructor(props) {
    super(props);
    this.state = {
      selectedDate: moment(),
      month: moment()
    };

    this.previousMonth = this.previousMonth.bind(this);
    this.nextMonth = this.nextMonth.bind(this);
    this.selectDate = this.selectDate.bind(this);
    this.renderWeeks = this.renderWeeks.bind(this);
  }

  previousMonth() {
    let month = this.state.month.clone();
    month.add(-1, "M");
    this.setState({ month });
  }

  nextMonth() {
    let month = this.state.month.clone();
    month.add(1, "M");
    this.setState({ month });
  }

  selectDate(date) {
    alert(date);
  }

  renderWeeks() {
    //console.log(this.state.selectedDate.format("MMMM DD, YYYY"));
    let weeks = [],
      done = false,
      date = this.state.month
        .clone()
        .startOf("month")
        // .add(-1, "w")
        .day("Sunday"),
      monthIndex = date.month(),
      count = 0;

    while (!done) {
      //console.log(date.format("MMMM DD, YYYY"));
      weeks.push(
        <Week
          key={date.toString()}
          date={date.clone()}
          month={this.state.month.month()}
          select={this.selectDate}
          selected={this.state.selectedDate}
        />
      );
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }

    return weeks;
  }

  render() {
    return (
      <div className="calendar">
        <div className="calendar__header">
          <FaLeft
            className="calendar__nav-icon"
            size={20}
            onClick={this.previousMonth}
          />
          <h6 className="calendar__month">
            {this.state.month.format("MMMM YYYY")}
          </h6>
          <FaRight
            className="calendar__nav-icon"
            size={20}
            onClick={this.nextMonth}
          />
        </div>
        <DayNames />
        {this.renderWeeks()}
      </div>
    );
  }
}
