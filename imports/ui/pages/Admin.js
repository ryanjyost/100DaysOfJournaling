import React, { Component } from "react";
import { Meteor } from "meteor/meteor";
import { Input, Button, Textarea } from "reactstrap";

export default class Admin extends Component {
  constructor() {
    super();
    this.state = {
      prompt: "",
      source: "",
      link: ""
    };

    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    const prompt = {
      prompt: this.state.prompt,
      source: this.state.source,
      link: this.state.link
    };

    Meteor.call("prompts.save", prompt);

    this.setState({
      prompt: "",
      source: "",
      link: ""
    });
  }

  render() {
    return (
      <div style={{ padding: "100px 0px 0px 0px" }}>
        <Input
          type="textarea"
          placeholder="Prompt"
          value={this.state.prompt}
          onChange={e => this.setState({ prompt: e.target.value })}
        />
        <br />
        <Input
          placeholder="Source"
          value={this.state.source}
          onChange={e => this.setState({ source: e.target.value })}
        />
        <br />
        <Input
          placeholder="Link"
          value={this.state.link}
          onChange={e => this.setState({ link: e.target.value })}
        />
        <br />
        <Button onClick={this.submitForm}>Submit</Button>
      </div>
    );
  }
}
