import React, { Component } from "react";
import Ad from "../components/Ad";

class MockUpAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false
    };
  }
  render() {
    return (
      <div className="mock-up-ad">
        <h3>Preview:</h3>
        <Ad />
      </div>
    );
  }
}

export default MockUpAd;