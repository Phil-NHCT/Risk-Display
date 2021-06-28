import React from "react";

const Label = (props) => {
  return (
    <div className="col border rounded">
      <h4 className="mb-3" id="labelShow">
        Your estimated risk of {props.label1} {props.label2}
      </h4>
    </div>
  );
};

export default Label;
