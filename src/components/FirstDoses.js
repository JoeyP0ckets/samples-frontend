import React, { useEffect, useCallback, useState } from 'react';
import { connect } from 'react-redux';
import SampleView from '../containers/SampleView';
import { API_ROOT } from '../apiRoot';
import ContactFooter from '../containers/ContactFooter';

const FirstDoses = (props) => {
  const { renderSamples, allSamples } = props;
  const [yupelriSample, setYupelriSample] = useState(null);

  // Fetch all samples
  const fetchSamples = useCallback(() => {
    fetch(`${API_ROOT}/samples`)
      .then((resp) => resp.json())
      .then((samples) => {
        renderSamples(samples);
        const yupelri = samples.find((sample) => sample.sample_name === "Yupelri");
        setYupelriSample(yupelri || null);
      });
  }, [renderSamples]);

  useEffect(() => {
    fetchSamples();
  }, [fetchSamples]);

  return (
    <div className="first-doses-page">
      <div id="theatre">
        <div className="sample-view-container">
          {yupelriSample ? (
            <SampleView sample={yupelriSample} />
          ) : (
            <p>Loading Yupelri info...</p>
          )}
        </div>
      </div>
      <div style={{ height: '150px' }}></div>
      <div id="footer-trigger-marker" style={{ height: '1px' }}></div>
      <ContactFooter />
    </div>
  );
};

const msp = (state) => ({
  allSamples: state.allSamples,
  user: state.user
});

const mdp = (dispatch) => ({
  renderSamples: (allSamples) => dispatch({ type: "GET_ALL_SAMPLES", allSamples })
});

export default connect(msp, mdp)(FirstDoses);


