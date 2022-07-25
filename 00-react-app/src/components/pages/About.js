import React from "react";
import portrait from "../pages/img/MIS_0251c.png";
import backArrow from './img/arrow.png'

export default function About({currentPage, handlePageChange}) {
  return (
    <div>
      <div className="row">
      <div className="col-6">
        <h1>about</h1>

        <p className="about-me">
          Hi.
          <br />
          I'm Kate, and I'm a full stack developer <br />
          from New Jersey.
        </p>
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
        >
        <img src={backArrow} className='back-arrow'></img>
        </a>
        </div>


        <div className="col-6">
          <img src={portrait} className="portrait"></img>
        </div>

        
      </div>
    </div>
  );
}
