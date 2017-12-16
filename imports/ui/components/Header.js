import React, { Component } from "react";

import MobileNavTop from "./MobileNavTop";
import MobileNavBottom from "./MobileNavBottom";

export default class Header extends Component {
  render() {
    return (
      <div>
        <MobileNavTop />
        <MobileNavBottom />
      </div>
    );
  }
}
