import React from 'react';
import { connect } from "react-redux";
import OrderView from '../containers/OrderView';
import yupelriLogo from "../img/yupelri_logo.png";
import yupelriFrontImage from "../img/Yupelri-Shadow-White.png";

const SampleView = ({ sample }) => {
  const { sample_name } = sample;

  return (
    <div id="sample-view-window">
      {/* Banner-style logo */}
      <img
        src={yupelriLogo}
        alt="Yupelri Logo"
        className="sample-banner-logo"
      />

    <div className="sample-content-row">
      {/* Left: Front image inside its own wrapper */}
    <div className="sample-front-wrap">
      <img
        src={yupelriFrontImage}
        alt={sample_name}
        className="sample-front-small"
      />
    </div>

    {/* Right: Description + Order */}
    <div className="sample-description-block">
      <p className="sample-description">
      YUPELRI is a prescription medicine used to treat chronic obstructive pulmonary disease (COPD), a long-term (chronic) lung disease that includes chronic bronchitis, emphysema, or both. 
      </p>
      <p>1 Sample/7 Doses</p>
        <OrderView />
    </div>
    </div>
  </div>
  );
};

const msp = state => ({
  user: state.user,
  selectedSample: state.selectedSample,
  quantity: state.quantity,
  seen: state.seen
});

export default connect(msp, null)(SampleView);
