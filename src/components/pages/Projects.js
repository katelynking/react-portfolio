import React from "react";

import traklete from "./img/project-imgs/traklete.png";
import familyCookbook from "./img/project-imgs/fam-cb.png";

import weatherDash from "./img/project-imgs/weather-dash.png";


import tiger from "./img/project-imgs/bengalTiger.png";

export default function Projects() {
  return (
    <div className="row">
      <div className="col-xxl-12">
        </div>
      <div className="col-md-11 centered container">
      <br />




      <div id="myCarousel" class="carousel slide" data-ride="carousel">
       {/* Indicators */}
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

       {/* Wrapper for slides */}
  <div class="carousel-inner">
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

    <div class="item">
      <a
          target="_blank"
          href="https://katelynking.github.io/bengalTiger"
        >
          <img 
            src={tiger} 
            alt="bengal tiger"
            className="project-img"></img>
        </a>
        <span className='title'>Bengal Tiger</span>
    </div> 
  </div>

  {/* Left and right controls */}
  {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">Next</span>
  </a> */}
</div>


<div id="myCarousel" class="carousel slide" data-ride="carousel">
  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
    <li data-target="#myCarousel" data-slide-to="1"></li>
    <li data-target="#myCarousel" data-slide-to="2"></li>
  </ol>

  {/* <!-- Wrapper for slides --> */}
  {/* <div class="carousel-inner">
    <div class="item active">
      <img src={familyCookbook} alt="Family Cookbook">
      <div class="carousel-caption">
        <h3>Family Cookbook</h3>
        <p></p>
      </div>
    </div> */}

    {/* <div class="item">
      <img src="chicago.jpg" alt="Chicago">
      <div class="carousel-caption">
        <h3>Chicago</h3>
        <p>Thank you, Chicago!</p>
      </div>
    </div> */}

    {/* <div class="item">
      <img src="ny.jpg" alt="New York">
      <div class="carousel-caption">
        <h3>New York</h3>
        <p>We love the Big Apple!</p>
      </div>
    </div> 
  </div>*/}

  {/* <!-- Left and right controls --> */}
  {/* <a class="left carousel-control" href="#myCarousel" data-slide="prev">
    <span class="glyphicon glyphicon-chevron-left"></span>
    <span class="sr-only">previous</span>
  </a>
  <a class="right carousel-control" href="#myCarousel" data-slide="next">
    <span class="glyphicon glyphicon-chevron-right"></span>
    <span class="sr-only">next</span>
  </a> */}
</div>





        

        
        
        

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
