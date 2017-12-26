import React, { Component } from "react";
import styles from "../styles/calendar.js";

export default class DayNames extends Component {
  render() {
    return (
      <div style={styles.row}>
        <div style={styles.dayName}>Su</div>
        <div style={styles.dayName}>Mo</div>
        <div style={styles.dayName}>Tu</div>
        <div style={styles.dayName}>We</div>
        <div style={styles.dayName}>Th</div>
        <div style={styles.dayName}>Fr</div>
        <div style={styles.dayName}>Sa</div>
      </div>
    );
  }
}
