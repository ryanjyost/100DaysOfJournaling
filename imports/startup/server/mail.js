Meteor.startup(function() {
  process.env.MAIL_URL =
    "smtps://postmaster@mail.100daysofjournaling.com:e94be3c6d80745b1dd674153766e1607@smtp.mailgun.org:465";

  // Email.send({
  //   to: "rjyost@umich.edu",
  //   from: "from.address@email.com",
  //   subject: "Example Email",
  //   text: "The contents of our email in plain text."
  // });
});
