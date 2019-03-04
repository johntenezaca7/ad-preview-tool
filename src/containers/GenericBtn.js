import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { updateLayout } from "../actions/chooseLayoutActions";

class GenericBtn extends  Component {
  render() {
    const { layoutType, updateLayout } = this.props;
    return (
      <button className="generic-btn" onClick={() => { updateLayout(layoutType); } }>
        { layoutType }
      </button>
    );
  }
};

GenericBtn.propTypes = {
  layoutType: PropTypes.string,
  updateLayout: PropTypes.string
};

export const mapDispatchToProps = dispatch => {
  return {
    updateLayout: (type) => {
      dispatch(updateLayout(type));
    }
  };
};

export default connect(null, mapDispatchToProps)(GenericBtn);