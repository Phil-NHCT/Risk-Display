import React from "react";
//import PropTypes from 'prop-types'

const inputTextValues = [
  {
    inputID: "labelRisk1",
    Label: "Enter label for Risk 1",
    type: "text",
  },
  {
    inputID: "labelSubRisk",
    Label: "Enter label for Risk 1 Sub-population Risk",
    type: "text",
  },
  {
    inputID: "labelRisk2",
    Label: "Enter label for Risk 2",
    type: "text",
  },
];
const inputNumberValues = [
  {
    inputID: "valueRisk1",
    Label: "Enter % Risk 1",
    type: "number",
    min: "0",
    max: "100",
    step: "0.1",
  },
  {
    inputID: "valuesubRisk1",
    Label: "Enter Sub-population % of Risk 1",
    type: "number",
    min: "0",
    max: "100",
    step: "1",
  },
  {
    inputID: "valueRisk2",
    Label: "Enter % Risk 2",
    type: "number",
    min: "0",
    max: "100",
    step: "1",
  },
];

const Options = (props) => {
  //console.log(props);
  const textInputs = inputTextValues.map((item) => (
    <div key={item.inputID} className="form-floating">
      <input
        type={item.type}
        name={item.inputID}
        id={item.inputID}
        className="form-control"
        maxLength="100"
        onChange={props.onValueChange}
      />
      <label htmlFor={item.inputID} className="form-label">
        {item.Label}
      </label>
    </div>
  ));

  const numberInputs = inputNumberValues.map((item) => (
    <div key={item.inputID} className="form-floating">
      <input
        type={item.type}
        name={item.inputID}
        id={item.inputID}
        className="form-control"
        min={item.min}
        max={item.max}
        step={item.step}
        onChange={props.onValueChange}
      />
      <label htmlFor={item.inputID} className="form-label">
        {item.Label}
      </label>
    </div>
  ));

  return (
    <div className="col border" id="optionSection">
      <div className="row m-2">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">{textInputs}</div>

        <div className="col-lg-4">{numberInputs}</div>

        <div className="col-lg-3"></div>
      </div>
    </div>
  );
};

export default Options;
