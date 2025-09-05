import React from 'react';
import { connect } from "react-redux";
import OrderView from '../containers/OrderView';
import yupelriLogo from "../img/yupelri_logo.png";
import yupelriFrontImage from "../img/Yupelri-Shadow-White.png";

const SampleView = ({ sample }) => {
  if (!sample) return null; // safety for initial render

  const name = sample.sample_name || "Yupelri";

  return (
    <div id="sample-view-window">
      {/* Banner-style logo */}
      <img
        src={yupelriLogo}
        alt={`${name} Logo`}
        className="sample-banner-logo"
      />

      <div className="sample-content-row">
        {/* Left: product image */}
        <div className="sample-front-wrap">
          <img
            src={yupelriFrontImage}
            alt={name}
            className="sample-front-small"
          />
        </div>

        {/* Right: description + order */}
        <div className="sample-description-block">
          <p className="sample-description">
            YUPELRI is a prescription medicine used to treat chronic obstructive
            pulmonary disease (COPD), including chronic bronchitis and emphysema.
          </p>
          <p>1 First Dose / 7 Doses</p>
          <OrderView sample={sample} />
        </div>
      </div>
    </div>
  );
};

export default SampleView;
