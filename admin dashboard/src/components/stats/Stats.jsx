import {TrendingDown, TrendingUp } from "@material-ui/icons";
import React from "react";
import "./stats.css";

export default function Stats() {
  return (
    <div className="container">
      <div className="item">
        <span className="itemtitle">Income</span>
        <div className="itemcontainer">
          <span className="itemtext">$2,000</span>
          <span className="itempercent">
            +18.1%
            <TrendingUp className="upwards"/>
          </span>
        </div>
        <span className="desc">3rd Semester</span>
      </div>
      <div className="item">
        <span className="itemtitle">Cost</span>
        <div className="itemcontainer">
          <span className="itemtext">$1,500</span>
          <span className="itempercent">
            -5.2%
            <TrendingDown className="downwards"/>
          </span>
        </div>
        <span className="desc">3rd Semester</span>
      </div>
      <div className="item">
        <span className="itemtitle">Total Profit</span>
        <div className="itemcontainer">
          <span className="itemtext">$10,000</span>
          <span className="itempercent">
            +25.9%
            <TrendingUp className="upwards"/>
          </span>
        </div>
        <span className="desc">All Semesters</span>
      </div>
    </div>
  );
}
