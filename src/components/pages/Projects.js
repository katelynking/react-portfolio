import React from "react";

// import traklete from "./img/traklete.png";
import familyCookbook from "./img/project-imgs/fam-cb.png";
// import musicCharts from "./img/project-imgs/music-charts-and-concerts-1.png";
// import notetaker from "./img/project-imgs/notetaker.png";
import weatherDash from "./img/project-imgs/weather-dash.png";
// import workDay from "./img/project-imgs/work-day.gif";

export default function Projects() {
  return (
    <div className="row">
      <div className="col-xxl-12">
        </div>
      <div className="col-md-11 centered container">
      <br />
      <br />
      <br />
      <br />
        {/* <a
          target="_blank"
          href="https://traklete.herokuapp.com/"
        >
          <img 
            src={traklete} 
            alt="traklete"
            className="project-img green-border"></img>
        </a> */}

        
        <a
          target="_blank"
          href="https://family-cookbook-king.herokuapp.com/"
        >
          <img 
            src={familyCookbook} 
            alt="family cookbook"
            className="project-img"></img>
        </a>
        <span className='title'>Family Cookbook</span>
        

        {/* <a target="_blank" href="https://katelynking.github.io/Weather-API/">
          <img
            src={weatherDash}
            alt="weather dashboard app"
            className="project-img blue-border"
          ></img>
        </a>
      </div> */}


      {/* <div className="col-md-6 centered container"> */}
        
        {/* <a
          target="_blank"
          href="https://bgrinthal.github.io/Music-API-Project/"
        >
          <img
            src={musicCharts}
            alt="music charts and concerts app"
            className="project-img pink-border"
          ></img>
        </a> */}

        {/* <a target="_blank" href="https://notetaker-kark.herokuapp.com/">
          <img
            src={notetaker}
            alt="notetaker app"
            className="project-img green-border"
          ></img>
        </a> */}
      
        {/* <a
          target="_blank"
          href="https://katelynking.github.io/Workday-Scheduler/"
        >
          <img
            src={workDay}
            alt="workday scheduling app"
            className="project-img orange-border"
          ></img>
        </a> */}
        <br/>
        <br/>
        </div>
      </div>
     
    
    
    
    
  );
}
