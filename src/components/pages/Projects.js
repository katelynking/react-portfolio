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




      

       
    <div class="item active">
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
    </div>

     <div class="item">
      <a
          target="_blank"
          href="https://traklete.herokuapp.com/"
        >
          <img 
            src={traklete} 
            alt="traklete"
            className="project-img"></img>
        </a>
        <span className='title'>Traklete</span>
    </div>


<br/>
<br/>

 
</div>



      </div>
     
    
    
    
    
  );
}
