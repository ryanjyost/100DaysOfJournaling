import React, { Component } from "react";
import { Prompts } from "../../api/prompts.js";
import { withTracker } from "meteor/react-meteor-data";
import RandomIcon from "react-icons/lib/fa/random";

import { Row, Col, Collapse } from "reactstrap";
import styles from "../styles/promptPicker";

class PromptPicker extends Component {
  constructor(props) {
    super();
    this.state = {
      prompt: {
        prompt: "",
        source: "",
        link: ""
      }
    };

    this.getRandomPrompt = this.getRandomPrompt.bind(this);
  }

  componentDidMount() {
    this.getRandomPrompt();
  }

  getRandomPrompt() {
    const prompt = this.props.prompts[
      Math.floor(Math.random() * Math.floor(prompts.length))
    ];
    this.setState({
      prompt
    });
  }

  render() {
    return (
      <div style={styles.row}>
        <div style={styles.promptContainer}>
          <div style={styles.prompt}>{this.state.prompt.prompt}</div>
          <div style={styles.promptInfo}>
            {this.state.prompt.link ? (
              <a
                href={this.state.prompt.link}
                target="_blank"
                style={styles.sourceWithLink}
              >
                {this.state.prompt.source}
              </a>
            ) : (
              <span style={styles.source}>{this.state.prompt.source}</span>
            )}
          </div>
        </div>
        <div style={styles.buttonContainer} onClick={this.getRandomPrompt}>
          <RandomIcon style={styles.icon} size={20} color="#FFACAC" />
        </div>
      </div>
    );
  }
}

export default withTracker(props => {
  return {
    prompts: Prompts.find().fetch()
  };
})(PromptPicker);
