import { Mongo } from "meteor/mongo";
import { Meteor } from "meteor/meteor";
import { check } from "meteor/check";
import moment from "moment";

export const Prompts = new Mongo.Collection("prompts");

Meteor.methods({
  "prompts.save"(obj) {
    // Make sure the user is logged in before inserting a task
    if (!this.userId) {
      throw new Meteor.Error("not-authorized");
    }

    const { prompt, source, link } = obj;

    Prompts.insert({
      createdAt: moment().valueOf(),
      owner: this.userId,
      prompt,
      source,
      link
    });
  }
});

export default (prompts = [
  {
    id: 1,
    prompt: "Write a letter to your older self.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 2,
    prompt: "Write about your childhood.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 3,
    prompt: "Write about lost friendships.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 4,
    prompt:
      "Write about turning points in your life – what would be different now if you had made a different choice.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 5,
    prompt: "Write about regrets you may have.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 6,
    prompt: "What frightens you?",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 7,
    prompt: "What brings you joy?",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 8,
    prompt:
      "What worries you? Is there a pressing problem you need to work out?",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 9,
    prompt:
      "Write a letter to someone that upset you, but you aren't ready to confront in person.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 10,
    prompt:
      "Write down the things you wished you had said to your parents, or other loved ones before they passed away.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 11,
    prompt:
      "Write down confessions of your deep down secrets that you can't tell anyone.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 12,
    prompt: "Where do you want to be 5, 10, or 15 years from now?",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 13,
    prompt: "What line of work do you plan on pursuing in the future?",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 14,
    prompt: "Write down how you can improve your life.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 15,
    prompt:
      "Write about children you plan to have, and what you wish for them.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 16,
    prompt:
      "Write letters to your future children and grandchildren that you can give to them when they are older. These letters will help them understand the type of person you were at their age.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 17,
    prompt: "Write about places you wish to see, vacations you plan to have.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 18,
    prompt: "Make a bucket list.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 19,
    prompt:
      "Write letters to friends and family members about things you can't say to them in person.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 20,
    prompt: "Write letters to your boss or coworkers.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 21,
    prompt:
      "Write about your friends, coworkers and family members, describing what they are like, what you like and dislike about each one, etc.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 22,
    prompt:
      "Write about your daily activities so you can look back and remember each moment.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  },
  {
    id: 23,
    prompt:
      "Write about your daily activities so you can look back and remember each moment.",
    source: "Penzu",
    link: "https://penzu.com/journal-prompts"
  }
]);
