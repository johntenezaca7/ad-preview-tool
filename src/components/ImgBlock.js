import React from "react";
import PropTypes from "prop-types";

const ImgBlock = ({ width, height }) => (
  <div className="active-layout__img-block">
    <img src={`https://via.placeholder.com/${width}x${height}`} alt="Place Holder"/>
  </div>
);

ImgBlock.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number
};

export default ImgBlock;