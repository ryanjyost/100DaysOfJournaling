import React, { Component } from "react";

export default class DayNames extends Component {
  render() {
    return (
      <div className="calendar__row">
        <div className="calendar__day">Su</div>
        <div className="calendar__day">Mo</div>
        <div className="calendar__day">Tu</div>
        <div className="calendar__day">We</div>
        <div className="calendar__day">Th</div>
        <div className="calendar__day">Fr</div>
        <div className="calendar__day">Sa</div>
      </div>
    );
  }
}
