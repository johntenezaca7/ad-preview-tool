import React from "react";
import PropTypes from "prop-types";

const TopSection = ({ children }) => (
  <section className="main-layout__top-section">
    {children}
  </section>
);

TopSection.propTypes = {
  children: PropTypes.node
};


export default TopSection;