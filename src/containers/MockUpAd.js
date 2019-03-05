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
        <h3 className="mock-up-ad__top-title">Your Current Ad</h3>
        <Ad width={600} height={400}/>
      </div>
    );
  }
}

export default MockUpAd;