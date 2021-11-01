import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
   return (
      <div className="sidebar">
         <div className="id">
            <div className="idContent">
               <img src="./media/kamsi.jpg" alt="profil-pic" />
               <h3>Eric Kamdem</h3>
            </div>
         </div>
         <div className="navigation">
            <ul>
               <li>
                  <NavLink exact to="/" activeClassName="navActive">
                     <i className="fas fa-home"></i>
                     <span>Hello</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/Fähigkeiten" activeClassName="navActive">
                     <i className="fas fa-mountain"></i>
                     <span>Fähigkeiten</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/portfolio" activeClassName="navActive">
                     <i className="fas fa-images"></i>
                     <span>Portfolio</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink exact to="/Kontakt" activeClassName="navActive">
                     <i className="fas fa-address-book"></i>
                     <span>Kontakt</span>
                  </NavLink>
               </li>
            </ul>
         </div>

         <div className="socialNetwork">
            <ul>
               <li>
                  <a
                     href="http://linkedin.com/in/eric-kamdem-teguia"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fab fa-linkedin"></i>
                  </a>
               </li>
               <li>
                  <a
                     href="https://github.com/ledemkam"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fab fa-github"></i>
                  </a>
               </li>
               <li>
                  <a
                     href="https://codepen.io/axel-po/pen/bGWGgYQ"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <i className="fab fa-codepen"></i>
                  </a>
               </li>
            </ul>
            <div className="signature">
               <p>fromKamdem - 2021</p>
            </div>
         </div>
      </div>
   );
};

export default Navigation;
