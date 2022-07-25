import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import crown from "./pages/img/king-crown.png";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("Home");

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
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
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home"}
          >
            <img src={crown} alt="crown logo" className="crown"></img>
          </a>
        </li>
      </ul>

      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}

      <div className="footer">
        <a target="_blank" href="https://www.linkedin.com/in/katelyn-king112/">
          linked in{" "}
        </a>
        •
        <a target="_blank" href="https://github.com/katelynking">
          {" "}
          github{" "}
        </a>
        •
        <a href="mailto:katelynking112@gmail.com"> email </a>
        •
        <a href="#"> resume </a>
      </div>
    </div>
  );
}
