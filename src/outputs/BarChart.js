import React from "react";

import style from "./BarChart.module.css";

import leftImage from "../images/ChartScaleLeft.png";
import rightImage from "../images/ChartScaleRight.png";

const SubKey = (props) => {
  if (props.value)
    return (
      <p className={`${style.chartKey} ${style.chartKeySub} `}>
        {props.text || "Sub Risk"}
        <span>: </span>
        {props.value}%
      </p>
    );
  return null;
};

const Risk2Key = (props) => {
  if (props.value)
    return (
      <p className={`${style.chartKey} ${style.chartKeyRisk2} `}>
        {props.text || "Risk2"}
        <span>: </span>
        {props.value}%
      </p>
    );
  return null;
};

const SubBar = (props) => {
  if (props.value)
    return (
      <div
        className={`${style.subBar} ${style.chart}`}
        style={{ height: props.value + "%" }}
      ></div>
    );
  return null;
};

const Risk2Bar = (props) => {
  if (props.value)
    return (
      <div
        className={`${style.risk2Bar} ${style.chart}`}
        style={{ height: props.value + "%" }}
      ></div>
    );
  return null;
};

const BarChart = (props) => {
  if (!props.risk1 && !props.risk2) {
    return null;
  }
  if (props.risk1 > 100 || props.risk2 > 100) {
    return null;
  }
  return (
    <div className="col border rounded">
      <div className="row">
        <div className="chartSection col-lg-1"></div>

        <div
          className="col-lg-2 chartSection displayKeyChart hide"
          id="barChartKey"
        >
          <p className={`${style.chartKey} ${style.chartKeySafe}`}>
            Estimate of the risk not occurring: {100 - props.risk1}%
          </p>
          <p className={`${style.chartKey} ${style.chartKeyRisk}`}>
            <span>{props.label1 || "Risk 1"}: </span> {props.risk1}%
          </p>
          <SubKey value={props.risksub} text={props.labelSub} />
          <Risk2Key value={props.risk2} text={props.label2} />
        </div>

        <div className={`${style.chartSection} col-lg-7 `}>
          <div className={style.chart}>
            <img
              src={leftImage}
              className={style.scaleImages}
              alt="Chart Scale"
            />
          </div>

          <div
            className={`${style.safeBar} ${style.chart}`}
            style={{ height: 100 - props.risk1 + "%" }}
          ></div>
          <div
            className={`${style.riskBar} ${style.chart}`}
            style={{ height: props.risk1 + "%" }}
          ></div>
          <SubBar value={props.risksub} />
          <Risk2Bar value={props.risk2} />

          <div className={style.chart}>
            <img
              src={rightImage}
              className={style.scaleImages}
              alt="Chart Scale"
            />
          </div>
        </div>

        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default BarChart;
