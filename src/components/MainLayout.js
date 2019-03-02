import React from "react";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => (
  <main className="main-layout">
    {children}
  </main>
);

MainLayout.propTypes = {
  children: PropTypes.node
};


export default MainLayout;