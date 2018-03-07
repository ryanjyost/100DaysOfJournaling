import { Email } from "meteor/email";

Meteor.startup(function() {
  process.env.MAIL_URL =
    "smtps://postmaster@mail.100daysofjournaling.com:e94be3c6d80745b1dd674153766e1607@smtp.mailgun.org:587";
});
