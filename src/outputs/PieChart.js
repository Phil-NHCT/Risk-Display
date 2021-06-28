import React from "react";
import style from "./PieChart.module.css";

const PieChart = (props) => {
  if (!props.risk1 && !props.risk2) {
    return null;
  }

  if (props.risk1 > 100 || props.risk2 > 100) {
    return null;
  }

  return (
    <div className="col border rounded">
      <div className="row">
        <div className="col-md-1 d-print-none"></div>
        <div className="col-md-10">
          <div className={style.chartSection}>
            <p className={`${style.chartKey} ${style.chartKeySafe}`}>
              Estimate of the risk not occurring: {100 - props.risk1}%
            </p>
            <p className={`${style.chartKey} ${style.chartKeyRisk}`}>
              {props.label1 || "Risk 1"}
              <span>: </span>
              {props.risk1}%
            </p>
            <p className={`${style.chartKey} ${style.chartKeySub}`}>
              {props.labelSub || "Sub risk"}
              <span>: </span>
              {props.risksub}%
            </p>
          </div>

          <div className={style.chartSection}>
            <div
              className={style.pie}
              style={{
                backgroundImage: `conic-gradient(
                  var(--risk) 0% ${props.risk1}%,
                  var(--safe) ${props.risk1}% 100%)`,
              }}
            ></div>
          </div>

          <div className={style.chartSection}>
            <p className={`${style.chartKey} ${style.chartKeySafe}`}>
              Estimate of the risk not occurring: {100 - props.risk1}%
            </p>
            <p className={`${style.chartKey} ${style.chartKeyRisk2}`}>
              {props.label2 || "Risk 2"}
              <span>: </span>
              {props.risk2}%
            </p>
          </div>

          <div className={style.chartSection}>
            <div
              className={style.pie}
              style={{
                backgroundImage: `conic-gradient(                      
                      var(--risk2) 0% ${props.risk2}%,
                      var(--safe) ${props.risk2}% 100%)`,
              }}
            ></div>
          </div>
        </div>
        <div className="col-md-1 d-print-none"></div>
      </div>
    </div>
  );
};

export default PieChart;
