import React from "react";
import style from "./figures.module.css";

const SubRiskFigure = (props) => {
  if (props.value) {
    return (
      <div className={`${style.circle} ${style.subRisk}`}>{props.value}%</div>
    );
  }
  return null;
};

const Risk2Figure = (props) => {
  if (props.value) {
    return (
      <div className={`${style.circle} ${style.risk2}`}>{props.value}%</div>
    );
  }
  return null;
};

const Figures = (props) => {
  if (!props.risk1 && !props.risk2) {
    return (
      <div className="col border rounded">
        <div className="row">
          <div className="col col-md-12d-print-inline-block">
            <div className="alert alert-primary m-4">
              <strong>
                Enter some risk percentages above to display graphics.
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (props.risk1 > 100 || props.risk2 > 100) {
    return (
      <div className="col border rounded">
        <div className="row">
          <div className="col col-md-8d-print-inline-block">
            <div className="alert alert-danger m-4">
              <strong>
                Please select a risk percentage between 0 and 100.
              </strong>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="col border rounded">
      <div className="row">
        <div className="col col-md-8d-print-inline-block">
          {props.data.map((item) => {
            let itemClasses = `${style.circle} ${style.noRisk}`;
            let itemClasses2 = ` ${style.risk1}`;
            itemClasses += itemClasses2;
            if (item.risk1) {
              return <div key={item.id} className={itemClasses}></div>;
            } else {
              return <div key={item.id} className={itemClasses}></div>;
            }
          })}
        </div>
        <div className="col col-md-2 d-print-inline-block">
          <div className={style.graphicKey}>
            Risk not occuring{" "}
            <div className={`${style.circle} ${style.noRisk}`}>
              <span className="KeySafeValue">{100 - props.risk1}</span>%
            </div>
            {props.label1 || "Risk 1"}
            <div className={`${style.circle} ${style.risk1}`}>
              {props.risk1}%
            </div>
            {props.labelSub || "Sub-Risk"}
            <SubRiskFigure value={props.risksub} />
            {props.label2 || "Risk 2"}
            <Risk2Figure value={props.risk2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Figures;
