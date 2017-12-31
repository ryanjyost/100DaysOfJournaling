import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import moment from "moment";

export const Posts = new Mongo.Collection("posts");

Meteor.methods({
  "posts.saveNew"(text) {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Posts.insert({
      text,
      createdAt: moment().valueOf(),
      owner: this.userId,
      responses: [],
      likes: [],
      published: false
    });
  },

  "posts.save"(postId, text) {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Posts.update(
      { _id: postId },
      { $set: { createdAt: moment().valueOf(), text } }
    );
  },
  "posts.publishNew"(text) {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Posts.insert({
      text,
      createdAt: moment().valueOf(),
      owner: this.userId,
      responses: [],
      likes: [],
      published: true
    });
  },

  "posts.publishSaved"(postId, text) {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    Posts.update(
      { _id: postId },
      { $set: { createdAt: moment().valueOf(), published: true } }
    );
  }

  // 'tasks.remove'(taskId) {
  //   check(taskId, String);

  //   Tasks.remove(taskId);
  // },
  // 'tasks.setChecked'(taskId, setChecked) {
  //   check(taskId, String);
  //   check(setChecked, Boolean);

  //   Tasks.update(taskId, { $set: { checked: setChecked } });
  // },
});
