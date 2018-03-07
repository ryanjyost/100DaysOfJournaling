import { Meteor } from "meteor/meteor";
import { Email } from "meteor/email";
import { Accounts } from "meteor/accounts-base";

Meteor.methods({
  sendVerificationLink(userId) {
    console.log("SENDING THE VERIFICATION LINK", userId);
    Email.send({
      to: "rjyost@umich.edu",
      from: "from.address@email.com",
      subject: "Example Email",
      text: "The contents of our email in plain text."
    });
    // let userId = Meteor.userId();
    //console.log(userId);
    if (userId) {
      console.log("lastStep", userId);
      return Accounts.sendVerificationEmail(userId);
    }
  }
});
