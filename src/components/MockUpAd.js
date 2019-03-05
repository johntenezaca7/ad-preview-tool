import React, { Component } from "react";
import Ad from "../components/Ad";

const MockUpAd = () => (
  <div className="mock-up-ad">
    <h3 className="mock-up-ad__top-title">Your Current Ad</h3>
    <Ad width={600} height={400}/>
  </div>
);


export default MockUpAd;