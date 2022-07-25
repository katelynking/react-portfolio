import React from "react";
import computer from "./img/mbcolor.png";

export default function Home({currentPage, handlePageChange}) {
  return (
    <div>
      <div className="row">
        <div className="col-xxl-6">
          <h1>
          <a
          href="#about"
          onClick={() => handlePageChange('About')}
          className={`kate + ${currentPage === 'About'}`}
          >
        </a>
            <br />
            <a 
            href="#projects" 
            onClick={() => handlePageChange('Projects')}
            className={`raki + ${currentPage === 'Projects'}`}
            ></a>
            <br />
            <a href="#contact" 
            onClick={() => handlePageChange('Contact')}
            className={`king + ${currentPage === 'Contact'}`}
            ></a>
            <br />
          
          </h1>

          {/* (kayt • RAH-kohn-yats • kihng) */}
        </div>

        <div className="col-xxl-6">
          <img src={computer} className="computer"></img>
          <span className="wd-text">
            <span className="text-on-image typewriter">/// web developer</span>
          </span>
        </div>
      </div>
    </div>
  );
}
