import Loading from "../components/Loading";
import React, { Component } from "react";

export function LoadingContainer(WrappedComponent) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true
      };
    }

    componentWillMount() {
      setTimeout(() => {
        this.setState({
          loading: false
        });
      }, 1000);
    }

    render() {
      if (!this.state.loading) {
        return <WrappedComponent {...this.props} />;
      } else {
        return <Loading />;
      }
    }
  };
}
