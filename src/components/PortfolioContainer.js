import React, { useState } from "react";
import Nav from "./pages/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import crown from "./pages/img/king-crown.png";
import resume from "./pages/img/contact-imgs/Resume-Rakonjac-King.pdf";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Projects") {
      return <Projects />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}>
            <img src={crown} alt="crown logo" className="crown"></img>
          </a>
        </li>
      </ul>

      
      <div className='row'>
      <div className='col-xxl-6'>
      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      <div className='col-xxl-6'>
      {renderPage()}
      </div>
      </div>
      
      

      <div className="footer">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/katelyn-king112/"
        >
          linked in{" "}
        </a>
        •
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/katelynking"
        >
          {" "}
          github{" "}
        </a>
        •<a href="mailto:katelynking112@gmail.com"> email </a>•
        <a 
          target="_blank"
          rel="noreferrer"
          href={resume}> resume </a>
      </div>
    </div>
  );
}
