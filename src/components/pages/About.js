import React from "react";
import portrait from "../pages/img/MIS_0251k.jpg";


export default function About() {
  return (
    <div>
      <div className="row">

      <div className="col-sm-8 container centered">
        <br/>
        <br/>
          <img src={portrait} alt="portrait" className="portrait"></img>

          <p className="about-me">
            hello, I'm Kate!
            <br /><br/>
            I am a student at Middlesex College studying Computer Science. I enjoy designing websites, painting, yoga, and learning languages (trenutno učim srpski). 
            <br /><br />
            Recently, I graduated from a Full Stack Web Development program, acquiring skills in CSS/HTML, JavaScript, Bootstrap, MySQL, Express, React, Node, API and more. 
            <br/><br/>
            I also collaborated with a team of 5 to develop an online Family Cookbook application that allows users to upload their favorite family recipes. 
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
