import React from "react";

import backArrow from "./img/arrow.png";

import familyCookbook from "./img/project-imgs/fam-cb.gif";
import musicCharts from "./img/project-imgs/music-charts-and-concerts-1.png";
import notetaker from "./img/project-imgs/notetaker.png";
import weatherDash from "./img/project-imgs/weather-dash.png";
import workDay from "./img/project-imgs/work-day.gif";

export default function Projects() {
  return (
    <div className="row">
      <div className="col-xxl-12">
        <h1>projects</h1>
      </div>

      <div className="col-md-6 centered container">
        <a
          target="_blank"
          href="https://family-cookbook-astokes.herokuapp.com/"
        >
          <img src={familyCookbook} className="project-img orange-border"></img>
        </a>

        <a target="_blank" href="https://katelynking.github.io/Weather-API/">
          <img
            src={weatherDash}
            alt="weather dashboard app"
            className="project-img blue-border"
          ></img>
        </a>
      </div>
      <div className="col-md-6 centered container">
        <a
          target="_blank"
          href="https://bgrinthal.github.io/Music-API-Project/"
        >
          <img
            src={musicCharts}
            alt="music charts and concerts app"
            className="project-img pink-border"
          ></img>
        </a>

        <a target="_blank" href="https://notetaker-kark.herokuapp.com/">
          <img
            src={notetaker}
            alt="notetaker app"
            className="project-img green-border"
          ></img>
        </a>
      </div>

      <div className="col-md-6 centered container">
        <a
          target="_blank"
          href="https://katelynking.github.io/Workday-Scheduler/"
        >
          <img
            src={workDay}
            alt="workday scheduling app"
            className="project-img orange-border"
          ></img>
        </a>
        <br />
        <br />
        <br />
        <br />
      </div>
      <div className="container">
        <a href="/">
          <img src={backArrow} className="back-arrow"></img>
        </a>
      </div>
    </div>
  );
}
