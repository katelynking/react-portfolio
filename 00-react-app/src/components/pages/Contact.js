import React from 'react';
import backArrow from './img/arrow.png'

export default function Contact({currentPage, handlePageChange}) {
  return (
    <div>
      <h1>contact</h1>
      <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
        >
        <img src={backArrow} className='back-arrow'></img>
        </a>
      
        <div className='row'>
          <div className='col-6'>
        
          
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
