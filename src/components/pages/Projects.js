import React from "react";

import wDash from "./img/project-imgs/weather-dash.png";
import familyCookbook from "./img/project-imgs/fam-cb.png";






export default function Projects() {
  return (
    <div className="row">
      <div className="col-xxl-12">
        </div>
      <div className="col-md-11 container">
      <br />
 


      

       
    <figure className="p-img centered">
      
      <a
          target="_blank"
          href="https://family-cookbook-king.herokuapp.com/"
        >
          <img 
            src={familyCookbook} 
            alt="family cookbook"
            className="project-img"
            ></img><span className="overlay1">
    <figcaption className="projects">
          <span className="project-name">family <br/>cookbook</span><br/><br/>
        <span className="project-desc">
        upload your family's homemade recipes 
        </span>
        
        </figcaption>
        </span>

        </a>
        </figure>
        <br/>


        <figure className="w-dash">
      <a
          target="_blank"
          href="https://katelynking.github.io/Weather-API/"
        >
          <img 
            src={wDash} 
            alt="weather dashboard"
            className="w-img"></img><span className='overlay2'>
            <figcaption className="w-projects centered">
          <span className="w-dash-name">weather <br/> dashboard</span><br/><br/>
        <span className="w-dash-desc">
        access the current & 5 day 
        forecasts for any city 
        </span>
        
        </figcaption></span>
        </a>
</figure>


<br/>
<br/>
<br/>
    


<br/>
<br/>

 
</div>



      </div>
     
    
    
    
    
  );
}
