import React from "react";


import linkedIn from "./img/contact-imgs/linked-in.png";
import gitHub from "./img/contact-imgs/github.png";
import emailIcon from "./img/contact-imgs/email-icon.png";

export default function Contact() {
  return (
    <div>


      <div className="row">
        <div className="col-xl-12 container centered">

        <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/katelyn-king112/"
          >
            <img src={linkedIn} className="contact-img"></img>
          </a>
          <br/>


          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/katelynking"
          >
            <img src={gitHub} className="contact-img"></img>
          </a>
          <br/>

          <a href="mailto:katelynking112@gmail.com">
            <img src={emailIcon} className="contact-img"></img>
          </a>
          

          {/* <form className='centered'>
            <label>Your name:</label>
            <br />
            <input type="text" name="name" className='txt-field'></input>
            <br />
            <label>Email:</label>
            <br />
            <input type="text" name="email" className='txt-field'></input>
            <br />
            <label>Message:</label>
            <br />
            <textarea type="text" name="msg" className='txt-field'></textarea>
            <br />
            <input type="submit" className='submit-btn'></input>
          </form> */}
          <br/>
          <br/>

          
        </div>
      </div>
  </div>
  );
}
