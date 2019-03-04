import React from "react";
import PropTypes from "prop-types";
import TextBlock from "./TextBlock";
import ImgBlock from "./ImgBlock";
import Ad from "./Ad";


const ActiveLayout = ({ layoutType }) => {
  const activeClass = layoutType.toLowerCase().split(" ").join("-");
  return (
    <div className={`active-layout__${activeClass}`}>
      <TextBlock />
      <ImgBlock />
      <TextBlock />

      <Ad layoutWrapper={activeClass}/>
      <TextBlock />
      <ImgBlock />
    </div>
  );
};

ActiveLayout.propTypes = {
  layoutType: PropTypes.string
};

export default ActiveLayout;