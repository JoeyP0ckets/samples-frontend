import React from "react";
import hdsLogo from "../img/HDS-Logo3.png"; // your logo path

const ContactFooter = () => {
  const nabpHTML = `
    <a title='Drug Distributor' href='https://mybadges.us.openbadges.me/api/badgeitem/f6f64d23-c69e-4144-af2b-90b4bfc93238/metadata' target='_blank' rel='noopener noreferrer'>
      <img src='https://openbadges.blob.core.windows.net/bakedbadges-us/3fc0afff-122f-4456-914f-e92eaf03e382-7e29fa9b-9784-4d9c-9474-87f7079379ff.png' alt='Drug Distributor' width='80' height='80' border='0' />
    </a>
  `;

  return (
    <>
      <div className="contact-support-text">
        Having trouble with the site? Reach out to the{" "}
        <a href="mailto:support@firstdosefulfillment.com">development team</a>.
      </div>

      <div className="contact-container">
        <div className="footer-content">
          {/* Left: HDS Logo + Pharmacy Info */}
          <div className="footer-left">
            <img
              src={hdsLogo}
              alt="HDS Logo"
              className="pharmacy-logo"
            />
            <div className="pharmacy-info">
              <p>Healthcare and Diagnostic Solutions, Inc</p>
              <p>29922 County Road 49</p>
              <p>Loxley, Alabama 36551</p>
              <p>Phone: 866-865-4437</p>
              <p>
    Website:{" "}
    <a
      href="https://4hds.net"
      target="_blank"
      rel="noopener noreferrer"
      className="hds-website-link"
    >
      4hds.net
    </a>
  </p>
            </div>
          </div>

          {/* Right: NABP Badge */}
          <div
            className="footer-right"
            dangerouslySetInnerHTML={{ __html: nabpHTML }}
          />
        </div>
      </div>
    </>
  );
};

export default ContactFooter;
