import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import ActiveLayout from "../components/ActiveLayout";

class MainSection extends Component {
  render() {
    const { children, layoutType } = this.props;
    if (layoutType) {
      const layoutInClassFormat = layoutType.toLowerCase().split(' ').join('-');
      return (
        <section className="main-layout__main-section main-layout__main-section--active ">
          <p className="main-layout__message">Current Layout: { layoutType }</p>
          <div className={`main-layout__main-container main-layout__main-container--${layoutInClassFormat}`}>
            <ActiveLayout layoutType={layoutInClassFormat}/>
          </div>
        </section>
      );
    } else {
      return (
        <section className="main-layout__main-section">
          <p className="main-layout__message"><span>&#8592;</span> Choose a layout from the Layout Menu!</p>
        </section>
      );
    }
  }
};


MainSection.propTypes = {
  children: PropTypes.node,
  layoutType: PropTypes.string
};

export const mapStateToProps = (store) => (
  {
    layoutType: store.layoutType
  }
);

export default connect(mapStateToProps, null)(MainSection);

export const TestMainSection = MainSection;

