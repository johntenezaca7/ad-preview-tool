import React, { Component } from "react";
import PropTypes from "prop-types";

 class Layout extends Component {
  render() {
    const { name } = this.props;

    return (
      <div className="main-layout">
        <h1>Main Layout. Prop test: { name }.</h1>
      </div>
    );
  }
}

Layout.propTypes = {
  name: PropTypes.string
};

export default Layout;
