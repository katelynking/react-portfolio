import React from "react";
import portrait from "../pages/img/MIS_0251c.png";
import backArrow from './img/arrow.png';


export default function About() {
  return (
    <div>
      <div className="row">
      <div className="col-6">
        <h1>about</h1>
        <a href="#">
          <img src={backArrow} className='back-arrow'></img>
        
        </a>
        
        

        <p className="about-me">
          Hi.
          <br />
          I'm Kate, and I'm a web developer <br />
          from New Jersey.
        </p>
        
        </div>


        <div className="col-6">
          <img src={portrait} alt='portrait' className="portrait"></img>
        </div>

        
      </div>
    </div>
  );
}
