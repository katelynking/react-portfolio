import React from "react";

export default function Nav({currentPage, handlePageChange}) {
  
  return (
    <div>
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
          <span className='font'>(kayt • RAH-kohn-yats • king)</span>

      
    </div>
    
  );
}
