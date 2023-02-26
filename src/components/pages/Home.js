import React from "react";
import computer from "./img/gradientsq.jpg";

export default function Home() {
  
  return (
    <div>
  
          <figure className='position-relative'>
            <img src={computer} className="computer"></img>
          <figcaption className='home'>
              Web developer. <br/>
              Student at Rutgers. <br/>
              

              
          </figcaption>
          </figure>
          
        </div>
 

    
  );
}
