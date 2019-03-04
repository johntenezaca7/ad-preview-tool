import React, { Component } from "react";
import PropTypes from "prop-types";

import MockUpAd from "../containers/MockUpAd";
import LayoutOptions from "../containers/LayoutOptions";

class MyAdSection extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      open: false
    };

    this.toggleMyAdMenu = this.toggleMyAdMenu.bind(this);
  }

  toggleMyAdMenu() {
    this.setState(
      { open: !this.state.open }
    );
  }

  render() {
    return (
      <section className="my-ad-section">
        <div className={ this.state.open ? "my-ad-section__overlay my-ad-section__overlay--opened" : "my-ad-section__overlay"} >
          <div className="my-ad-section__overlay-content">
            <div className="my-ad-section__top-content">
              <p className="my-ad-section__content-title">Layout Menu</p>
              <div className="my-ad-section__closebtn" onClick={this.toggleMyAdMenu} >&#10006;</div>
            </div>
            <div className="my-ad-section__content-layout">
              <LayoutOptions/>
              <MockUpAd />
            </div>
          </div>
        </div>
        <div onClick={this.toggleMyAdMenu} className="my-ad-section__sidenav"><span>Layouts</span> &#9998; </div>
      </section>
    );
  };
}

MyAdSection.propTypes = {
  children: PropTypes.node
};

export default MyAdSection;