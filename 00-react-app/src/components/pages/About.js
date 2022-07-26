import React from "react";
import portrait from "../pages/img/MIS_0251c.png";
import backArrow from "./img/arrow.png";

export default function About() {
  return (
    <div>
      <div className="row">
        <div className="col-sm-6 container">
          <h1>about</h1>
          <p className="about-me">
            Hi.
            <br />
            I'm Kate, and I'm a web developer from New Jersey.
          </p>
          <br />
          <br />

          <a href="/">
            <img src={backArrow} className="back-arrow"></img>
          </a>
        </div>

        <div className="col-sm-6 container">
          <img src={portrait} alt="portrait" className="portrait"></img>
        </div>
      </div>
    </div>
  );
}
