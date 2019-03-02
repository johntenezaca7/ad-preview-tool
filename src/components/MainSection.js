import React from "react";
import PropTypes from "prop-types";

const MainSection = ({ children }) => (
  <section className="main-layout__main-section">
    {children}
  </section>
);

MainSection.propTypes = {
  children: PropTypes.node
};


export default MainSection;