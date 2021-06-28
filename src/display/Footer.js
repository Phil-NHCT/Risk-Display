import React from "react";

const Footer = () => {
  return (
    <footer className="my-5 text-muted text-center text-small">
      <p className="mb-1">&copy; 2021 Northumbria Web development</p>

      <p>
        <button
          className="btn btn-secondary btn-sm"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#printingHelp"
          aria-expanded="false"
          aria-controls="printingHelp"
        >
          Printing issues?
        </button>
      </p>
      <div className="collapse" id="printingHelp">
        <div className="card card-body">
          When printing a hard copy of this page the graphics might not be
          displayed by default.
          <br />
          To display and print them correctly, go to print. Then on the print
          preview, click "more settings", and select the "Background graphics"
          checkbox.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
