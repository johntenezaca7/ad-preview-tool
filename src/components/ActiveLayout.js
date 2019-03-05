import React from "react";
import PropTypes from "prop-types";

import TextBlock from "./TextBlock";
import ImgBlock from "./ImgBlock";
import Ad from "./Ad";
import PlaceHolderItem from './PlaceHolderItem';



const ActiveLayout = ({ layoutType }) => {
  switch (layoutType) {
    case "single-column":
      return (
        <div className={`active-layout__${layoutType}`}>
          <TextBlock />
          <ImgBlock />
          <TextBlock />
          <Ad layoutWrapper={layoutType}/>
          <TextBlock />
          <ImgBlock />
        </div>
      );
      break;

    case "grid-of-cards":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType}/>
            <Ad layoutWrapper={layoutType}/>
            <PlaceHolderItem layoutWrapper={layoutType}/>
          </div>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType}/>
            <PlaceHolderItem layoutWrapper={layoutType}/>
            <PlaceHolderItem layoutWrapper={layoutType}/>
          </div>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType}/>
            <Ad layoutWrapper={layoutType}/>
            <PlaceHolderItem layoutWrapper={layoutType}/>
          </div>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType}/>
            <PlaceHolderItem layoutWrapper={layoutType}/>
            <PlaceHolderItem layoutWrapper={layoutType}/>
          </div>
        </div>
      );
      break;

    case "magazine":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}-col-one`}>
            column 1
          </div>
          <div className={`active-layout__${layoutType}-col-two`}>
            colum 2
          </div>
          <div className={`active-layout__${layoutType}-col-three`}>
            column 3
          </div>
        </div>
      );
      break;

    case "boxes":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}-box-one`}>
            <ImgBlock />
          </div>
          <div className={`active-layout__${layoutType}-wrapper`}>
            <div className={`active-layout__${layoutType}-box-two`}>
              <TextBlock />
            </div>
            <div className={`active-layout__${layoutType}-box-three`}>
              <TextBlock />
            </div>
          </div>
          <div className={`active-layout__${layoutType}-box-one`}>
            <ImgBlock />
          </div>
          <div className={`active-layout__${layoutType}-wrapper`}>
            <div className={`active-layout__${layoutType}-box-two`}>
              <TextBlock />
            </div>
            <div className={`active-layout__${layoutType}-box-three`}>
              <TextBlock />
            </div>
          </div>
        </div>
      );
      break;
    
    case "f-shape":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div>F Content</div>
          <div>F Content</div>
          <div>Add</div>
          <div>F Content</div>
        </div>
      );
      break;
    
    case "z-shape":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div>
            <div>
              Pic
            </div>
            <div>
              Details
            </div>
          </div>
          <div>
            <div>
              Pic Reverse
            </div>
            <div>
              Details
            </div>
          </div>
          <div>
            <div>
              Pic
            </div>
            <div>
              Details
            </div>
          </div>
        </div>
      );
      break;

    default:
      return (
        <div>
          <p className="main-layout__message"><span>&#8592;</span> Choose a layout from the Layout Menu!</p>
        </div>
      );
  }
};

ActiveLayout.propTypes = {
  layoutType: PropTypes.string
};

export default ActiveLayout;