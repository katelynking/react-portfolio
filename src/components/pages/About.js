import React from "react";
import portrait from "../pages/img/kking-b.png";
import leftF from "../pages/img/flowers-l.png";
import rightF from "../pages/img/flowers-r.png";


export default function About() {
  return (
    <div>
      <div className="row">

      <div className="col-sm-8 container centered">
        <br/>
      <figure className='fl'>
          <img src={rightF} className='flowers fl-left '></img>
          <img src={leftF} className='flowers fl-right'></img>
          
        
      <figcaption className='overlay centered'><img src={portrait} alt="portrait" className="portrait"></img>
      </figcaption>
      </figure>
          
    

          <p className="about-me">
            hello, I'm Kate!
            <br/><br/>
            I am a student at Rutgers University majoring in Computer Science. I enjoy designing websites, painting, yoga, and learning languages (currently learning Serbian). 
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
