import React from "react";
import portrait from "../pages/img/MIS_0251k.jpg";


export default function About() {
  return (
    <div>
      <div className="row">

      <div className="col-sm-8 container centered">
    
          <img src={portrait} alt="portrait" className="portrait"></img>

          <p className="about-me">
            hello, I'm Kate!
            <br /><br/>
            I am a student at Rutgers University majoring in Computer Science. I enjoy designing websites, painting, yoga, and learning languages (currently taking on Serbian). 
            <br /><br />
            I recently graduated from a Full Stack Web Development program, where I have acquired skills in CSS/HTML, JavaScript, Bootstrap, MySQL, Express, React, Node, API and more. 
            <br/><br/>
            I have also recently collaborated with a team of 5 to develop an online Family Cookbook application that allows users to upload their favorite family recipes. 
            <br />
            <br />
            <br />

          </p>
          
          <br />
        </div>

       
      </div>
    </div>
  );
}
