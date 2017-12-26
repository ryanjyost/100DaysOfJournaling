import React, { Component } from "react";
import { withTracker } from "meteor/react-meteor-data";
import User from "./User";
import Login from "../pages/Login";

class AuthorizedUser extends Component {
  render() {
    if (this.props.currentUser) {
      return <User {...this.props} />;
    } else {
      return <Login />;
    }
  }
}

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(AuthorizedUser);
