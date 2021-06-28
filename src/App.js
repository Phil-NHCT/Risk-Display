import React, { useState } from "react";
import Header from "./display/Header";
import Footer from "./display/Footer";
import SideNav from "./display/SideNav";
import Options from "./input/Options";
import Label from "./Label";
import Figures from "./outputs/Figures";
import BarChart from "./outputs/BarChart";
import PieChart from "./outputs/PieChart";

const figuresArray = [
  {
    id: 1,
    risk1: true,
    risk1Decimal: false,
    risk2: false,
    subRisk: false,
  },
  {
    id: 2,
    risk1: true,
    risk1Decimal: false,
    risk2: false,
    subRisk: false,
  },
  {
    id: 3,
    risk1: false,
    risk1Decimal: false,
    risk2: false,
    subRisk: false,
  },
  {
    id: 4,
    risk1: false,
    risk1Decimal: false,
    risk2: false,
    subRisk: false,
  },
  {
    id: 5,
    risk1: false,
    risk1Decimal: false,
    risk2: false,
    subRisk: false,
  },
];

function App() {
  const [label1, setLabel1] = useState("");
  const [labelSub, setLabelSub] = useState("");
  const [label2, setLabel2] = useState("");
  const [risk1, setRisk1] = useState("");
  const [risksub, setRiskSub] = useState("");
  const [risk2, setrisk2] = useState("");

  const handleValueChange = (e) => {
    //console.log("Something changed ", e.target.id, e.target.value);
    if (e.target.id === "labelRisk1") {
      setLabel1(e.target.value);
    }

    switch (e.target.id) {
      case "labelRisk1":
        setLabel1(e.target.value);
        break;

      case "labelSubRisk":
        setLabelSub(e.target.value);
        break;

      case "labelRisk2":
        setLabel2(e.target.value);
        break;

      case "valueRisk1":
        setRisk1(e.target.value);
        setRiskSub(() => {
          //console.log("risksub ", risksub, " e.target.value ", e.target.value);
          if (risksub > 0) {
            return ((e.target.value / 100) * risksub)
              .toFixed(2)
              .replace(/\.00$/, "");
          } else {
            return risksub;
          }
        });
        break;

      case "valuesubRisk1":
        setRiskSub(() => {
          return ((risk1 / 100) * e.target.value)
            .toFixed(2)
            .replace(/\.00$/, "");
        });
        break;

      case "valueRisk2":
        setrisk2(e.target.value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="container container-fluid">
      <SideNav />
      <Header />
      <Options onValueChange={handleValueChange} />
      <Label label1={label1} />
      <Figures
        label1={label1}
        risk1={risk1}
        labelSub={labelSub}
        risksub={risksub}
        label2={label2}
        risk2={risk2}
        data={figuresArray}
      />
      <BarChart
        label1={label1}
        risk1={risk1}
        labelSub={labelSub}
        risksub={risksub}
        label2={label2}
        risk2={risk2}
      />
      <PieChart
        label1={label1}
        risk1={risk1}
        labelSub={labelSub}
        risksub={risksub}
        label2={label2}
        risk2={risk2}
      />
      <Footer />
    </div>
  );
}

export default App;
