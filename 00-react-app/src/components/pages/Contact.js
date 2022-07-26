import React from "react";
import backArrow from "./img/arrow.png";

import linkedIn from "./img/contact-imgs/linked-in.png";
import gitHub from "./img/contact-imgs/github.png";
import emailIcon from "./img/contact-imgs/email-icon.png";

export default function Contact() {
  return (
    <div>
      <h1>contact</h1>

      <div className="row">
        <div className="col-md-6 container">
          <form>
            <label>Your name:</label>
            <br />
            <input type="text" name="name"></input>
            <br />
            <label>Email:</label>
            <br />
            <input type="text" name="email"></input>
            <br />
            <label>Message:</label>
            <br />
            <textarea type="text" name="msg" className='msg-box'></textarea>
            <br />
            <input type="submit" className='submit-btn'></input>
          </form>

          <a href="/">
            <img src={backArrow} className="back-arrow"></img>
          </a>
        </div>

        <div className="col-md-6 container centered">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/katelyn-king112/"
          >
            <img src={linkedIn} className="contact-img"></img>
          </a>
          

          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/katelynking"
          >
            <img src={gitHub} className="contact-img"></img>
          </a>
          

          <a href="mailto:katelynking112@gmail.com">
            <img src={emailIcon} className="contact-img"></img>
          </a>
          
        </div>
      </div>
    </div>
  );
}
