import React from "react";

import traklete from "./img/project-imgs/traklete.png";
import familyCookbook from "./img/project-imgs/fam-cb.png";






export default function Projects() {
  return (
    <div className="row">
      <div className="col-xxl-12">
        </div>
      <div className="col-md-11 centered container">
      <br />
 


      

       
    <figure className="scroll p-img">
      
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
          <span className="project-name">family cookbook</span><br/><br/>
        <span className="project-desc">
        organize your family's homemade recipes<br/> by storing and saving 
        recipes 
        </span>
        
        </figcaption>
        </span>

        </a>
        

     
      {/* <a
          target="_blank"
          href="https://traklete.herokuapp.com/"
        >
          <img 
            src={traklete} 
            alt="traklete"
            className="project-img"></img>
        </a> */}

        <br/>
<br/>
<br/>
    </figure>


<br/>
<br/>

 
</div>



      </div>
     
    
    
    
    
  );
}
