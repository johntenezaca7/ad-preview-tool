import React, { Component } from "react";
import GenericBtn from "./GenericBtn";
import PropTypes from "prop-types";
import { connect } from "react-redux";

class LayoutOptions extends Component {
  render() {
    const { layoutType, types } = this.props;
    return (
      <div className="layoutOptions">
        <p className="layoutOptions__description">
          Choose which layout you would like to see your ad in!
        </p>
        <p className="layoutOptions__current-layout">Current Layout: { layoutType ? layoutType : "None" }</p>

        <div className="layoutOptions__btn-container">
          { types.map(type => <GenericBtn layoutType={type} key={type} /> ) }
        </div>
      </div>
    );
  }
}

LayoutOptions.propTypes = {
  layoutType: PropTypes.string,
  types: PropTypes.array
};

export const mapStateToProps = (store) => (
  {
    layoutType: store.layoutType,
    types: store.typesOfLayouts
  }
);

export const TestLayoutOptions = LayoutOptions;

export default connect(mapStateToProps, null)(LayoutOptions);
