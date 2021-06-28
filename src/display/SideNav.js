import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <span id="showAll">All</span>
      <span href="#" id="figuresOnly">
        <i className="bi-person"></i>
      </span>
      <span href="#" id="barChartOnly">
        <i className="bi-bar-chart-fill"></i>
      </span>
      <span href="#" id="pieChartOnly">
        <i className="bi-pie-chart-fill"></i>
      </span>
    </div>
  );
};

export default SideNav;
