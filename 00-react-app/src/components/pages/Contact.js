import React from "react";
import backArrow from "./img/arrow.png";

import linkedIn from "./img/contact-imgs/linked-in.png";
import gitHub from "./img/contact-imgs/github.png";
import emailIcon from "./img/contact-imgs/email-icon.png";

export default function Contact({ currentPage, handlePageChange }) {
  return (
    <div>
      <h1>contact</h1>
      <a
        href="#home"
        onClick={() => handlePageChange("Home")}
        className={currentPage === "Home"}
      >
        <img src={backArrow} className="back-arrow"></img>
      </a>

      <div className="row">
        <div className="col-xxl-12 centered">
          <a
            target="_blank"
            href="https://www.linkedin.com/in/katelyn-king112/"
          >
            <img src={linkedIn} className="contact-img"></img>
          </a>

          <a target="_blank" href="https://github.com/katelynking">
            <img src={gitHub} className="contact-img"></img>
          </a>

          <a href="mailto:katelynking112@gmail.com">
            <img src={emailIcon} className="contact-img"></img>
          </a>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          

          {/* <form>
        
          <label>Your name:</label><br/>
          <input type='text' name='name'></input><br/>
          <label>Email:</label><br/>
          <input type='text' name='email'></input><br/>
          <label>Message:</label><br/>
          <input type='text' name='msg'></input><br/>
          <input type='submit'></input>
        
        </form> */}
        </div>
      </div>
    </div>
  );
}
