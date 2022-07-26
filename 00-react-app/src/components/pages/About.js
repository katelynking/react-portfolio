import React from "react";
import portrait from "../pages/img/MIS_0251c.png";


export default function About() {
  return (
    <div>
      <div className="row">

      <div className="col-sm-6 container">
          <img src={portrait} alt="portrait" className="portrait"></img>

          <p className="about-me">
            hi.
            <br />
            I'm Kate, and I'm a web developer from New Jersey.
          </p>
          <br />
         
        </div>

       
      </div>
    </div>
  );
}
