import React, { Component } from "react";
import axios from "axios";

class MockUpAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      start: false
    }
  }
  render() {
    return (
      <div className="mock-up-ad__main-wrapper">
        <div className="mock-up-ad__imgs-wrapper">
          <img className="mock-up-ad__main-img" src="http://placekitten.com/900/700" alt="Place-Holder"/>
          <div className="mock-up-ad__logo">
            <img src="https://www.brandcrowd.com/gallery/brands/pictures/picture15317935569599.jpg" alt="Logo"/>
          </div>
        </div>
        <div className="mock-up-ad__content">
          <p className="mock-up-ad__sponsored-text">Sponsored</p>
          <h3 className="mock-up-ad__main-title">Main Title of the Ad</h3>
          <p className="mock-up-ad__brand-sponsor">Sponsored by Brand</p>
          <p className="mock-up-ad__details">Cats go for world domination snuggles up to shoulders or knees and purrs you to sleep.</p>
        </div>
      </div>
    );
  }
}

export default MockUpAd;