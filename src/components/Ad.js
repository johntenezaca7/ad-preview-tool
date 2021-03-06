import React from "react";
import PropTypes from "prop-types";

const Ad = ({ layoutWrapper, width, height }) => (
  <div className={`mock-up-ad mock-up-ad__${layoutWrapper ? layoutWrapper : "in-layout-menu"}`}>
    <div className="mock-up-ad__main-wrapper">
      <div className="mock-up-ad__imgs-wrapper">
        <img className="mock-up-ad__main-img" src={`http://placekitten.com/${width}/${height}`}alt="Place-Holder"/>
        <div className="mock-up-ad__logo">
          <img src="https://www.brandcrowd.com/gallery/brands/thumbs/thumb15416578113904.jpg" alt="Logo"/>
        </div>
      </div>
      <div className="mock-up-ad__content">
        <p className="mock-up-ad__sponsored-text">Sponsored</p>
        <h3 className="mock-up-ad__main-title">Main Title of the Ad</h3>
        <p className="mock-up-ad__brand-sponsor">Sponsored by Brand</p>
        <p className="mock-up-ad__details">Cats go for world domination snuggles up to shoulders or knees and purrs you to sleep.</p>
      </div>
    </div>
  </div>
);

Ad.propTypes = {
  layoutWrapper: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
};

export default Ad;