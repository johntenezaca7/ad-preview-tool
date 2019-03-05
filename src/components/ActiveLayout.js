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
          <ImgBlock width={1220} height={400}/>
          <TextBlock />
          <Ad layoutWrapper={layoutType} width={1200} height={400}/>
          <TextBlock />
          <ImgBlock width={1220} height={400}/>
          <Ad layoutWrapper={layoutType} width={1200} height={400}/>
          <TextBlock />
          <ImgBlock width={1220} height={400}/>
        </div>
      );
      break;

    case "grid-of-cards":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
            <Ad layoutWrapper={layoutType} width={600} height={400}/>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
            <Ad layoutWrapper={layoutType} width={600} height={400}/>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}--row`}>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
            <PlaceHolderItem layoutWrapper={layoutType} width={600} height={400}/>
          </div>
        </div>
      );
      break;

    case "boxes":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}-box-one`}>
            <ImgBlock width={1200} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}-wrapper`}>
            <div className={`active-layout__${layoutType}-img-box`}>
              <Ad layoutWrapper={layoutType} width={600} height={400}/>
            </div>
            <div className={`active-layout__${layoutType}-text-box`}>
              <TextBlock />
            </div>
          </div>
          <div className={`active-layout__${layoutType}-box-one`}>
            <ImgBlock width={1200} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}-wrapper`}>
            <div className={`active-layout__${layoutType}-text-box`}>
              <TextBlock />
            </div>
            <div className={`active-layout__${layoutType}-img-box`}>
              <Ad layoutWrapper={layoutType} width={600} height={400}/>
            </div>
          </div>
        </div>
      );
      break;
    
    case "f-shape":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}-block`}>
            <ImgBlock width={500} height={400}/>
            <TextBlock />
          </div>
          <div className={`active-layout__${layoutType}-block`}>
            <Ad layoutWrapper={layoutType} width={600} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}-block`}>
            <ImgBlock width={500} height={400}/>
            <TextBlock />
          </div>
          <div className={`active-layout__${layoutType}-block`}>
            <Ad layoutWrapper={layoutType} width={600} height={400}/>
          </div>
          <div className={`active-layout__${layoutType}-block`}>
            <ImgBlock width={500} height={400}/>
            <TextBlock />
          </div>
        </div>
      );
      break;
    
    case "z-shape":
      return (
        <div className={`active-layout__${layoutType}`}>
          <div className={`active-layout__${layoutType}-block`}>
            <ImgBlock width={450} height={300}/>
            <TextBlock />
          </div>
          <div className={`active-layout__${layoutType}-rev-block`}>
            <Ad layoutWrapper={layoutType} width={600} height={400}/>
            <TextBlock />
          </div>
          <div className={`active-layout__${layoutType}-block`}>
            <ImgBlock width={450} height={300}/>
            <TextBlock />
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