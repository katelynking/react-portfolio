import React from 'react';
import crown from '../components/pages/img/king-crown.png'

function NavTabs({ currentPage, handlePageChange }) {
  return (
 <div className='container-fluid '>
  <div className='row'>
    <ul className="nav">
      <li className="nav-item">

        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          className={currentPage === 'Home'}
        >
          <img src={crown} className="crown"></img>
        </a>
      </li>
    </ul>
    </div> 


 
{/* //        <li className="nav-item">
//         <a */}
{/* //           href="#about"
//           onClick={() => handlePageChange('About')}
//           className={`kate + ${currentPage === 'About'}`}
//         >
//           about
//         </a> */}
{/* //       </li> 

      

//        <li className="nav-item">
//         <a
//           href="#projects"
//           onClick={() => handlePageChange('Projects')}
//           className={`'raki' + ${currentPage === 'Projects'}`}
//         >

        

//           projects
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === 'Contact'}
//         >
//           contact
//         </a>
//       </li> */}


</div>

);
 }
 export default NavTabs;
