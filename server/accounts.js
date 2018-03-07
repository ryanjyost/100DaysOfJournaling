import { Meteor } from "meteor/meteor";
import { Accounts } from "meteor/accounts-base";

Accounts.emailTemplates.siteName = "AwesomeSite";

Accounts.emailTemplates.from = "Site Admin <support@mysite.com>";

Accounts.emailTemplates.verifyEmail.subject = function(user) {
  return "Welcome to My Site! Please verify your email";
};

Accounts.emailTemplates.verifyEmail.html = function(user, url) {
  return (
    "Hi " +
    " Please verify your email by simply clicking the link below:\n\n" +
    url
  );
};
