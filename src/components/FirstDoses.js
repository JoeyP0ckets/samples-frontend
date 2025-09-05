import React, { useEffect, useState, useCallback } from "react";
import SampleView from "../containers/SampleView";
import ContactFooter from "../containers/ContactFooter";
import { API_ROOT } from "../apiRoot";

const FirstDoses = () => {
  const [yupelri, setYupelri] = useState(null);
  const [error, setError] = useState(null);

  const fetchYupelri = useCallback(() => {
    let cancelled = false;

    fetch(`${API_ROOT}/samples`) 
      .then(res => res.json())
      .then(samples => {
        if (cancelled) return;
        const match = samples.find(s => (s.sample_name || "").toLowerCase() === "yupelri");
        setYupelri(match || null);
      })
      .catch(err => !cancelled && setError(err));

    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    const cleanup = fetchYupelri();
    return cleanup;
  }, [fetchYupelri]);

  return (
    <div className="first-doses-page">
      <div id="theatre">
        <div className="sample-view-container">
          {error && <p style={{ color: "crimson" }}>Failed to load. Please try again.</p>}
          {!error && !yupelri && <p>Loading Yupelri info...</p>}
          {yupelri && <SampleView sample={yupelri} />}
        </div>
      </div>
      <div style={{ height: "150px" }} />
      <div id="footer-trigger-marker" style={{ height: "1px" }} />
      <ContactFooter />
    </div>
  );
};

export default FirstDoses;

