import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="row g-0 rounded overflow-hidden flex-md-row shadow-sm h-md-250 position-relative header">
      <div className="col p-4 d-flex flex-column position-static">
        <h2>Patient Risk Display</h2>
        <h4>React Development Site.</h4>
      </div>
      <div className="col-auto">
        <img
          src="http://webstaging2/risk/images/whiteNHCT.png"
          alt="NCHT Logo"
        />
      </div>
    </div>
  );
};

export default Header;
