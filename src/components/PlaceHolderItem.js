import React from 'react';
import PropTypes from "prop-types";

const PlaceHolderItem = ({ layoutWrapper, width, height }) => (
  <div className={`mock-up-ad__${layoutWrapper} mock-up-ad__${layoutWrapper}--placeholder`}>
    <div className="mock-up-ad__main-wrapper">
      <div className="mock-up-ad__imgs-wrapper">
        <img className="mock-up-ad__main-img" src={`https://via.placeholder.com/${width}x${height}`} alt="Place-Holder"/>
      </div>
      <div className="mock-up-ad__content">
        <p className="mock-up-ad__sponsored-text">Nulla volutpat ex metus</p>
        <h3 className="mock-up-ad__main-title">Quisque dignissim </h3>
        <p className="mock-up-ad__brand-sponsor">Donec id dolor sed neque</p>
        <p className="mock-up-ad__details">Sed rutrum nunc pretium, finibus nibh non, tincidunt diam. Duis sed venenatis orci.</p>
      </div>
    </div>
  </div>
);

PlaceHolderItem.propTypes = {
  layoutWrapper: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default PlaceHolderItem;