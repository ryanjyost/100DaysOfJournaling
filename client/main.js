import React from "react";
import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import "/imports/startup/client";

import "../lib/accounts.js";
import { renderRoutes } from "../imports/startup/client/routes.js";
import "bootstrap/dist/css/bootstrap.css";

Meteor.startup(() => {
  render(renderRoutes(), document.getElementById("render-target"));
});
