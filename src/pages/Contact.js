import React from 'react';
import Navigation from '../components/Navigation';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
   return (
      <div className="contact">
         <Navigation />
         <div className="contactContent">
            <div className="header"></div>
            <div className="contactBox">
               <h1>Mein Kontakt</h1>
               <ul>
                  <li>
                     <i className="fas fa-map-marker-alt"></i>
                     <span>Marburg</span>
                  </li>
                  <li>
                     <i className="fas fa-mobile-alt"></i>
                     <CopyToClipboard text="017635792516">
                        <span
                           className="clickInput"
                           onClick={() => {
                              alert(' Telephon kopieren!');
                           }}
                        >
                           017635792516
                        </span>
                     </CopyToClipboard>
                  </li>
                  <li>
                     <i className="far fa-envelope"></i>
                     <CopyToClipboard text="ledemkam@gmail.com">
                        <span
                           className="clickInput"
                           onClick={() => {
                              alert(' Email kopieren!');
                           }}
                        >
                           ledemkam@gmail.com
                        </span>
                     </CopyToClipboard>
                  </li>
               </ul>
            </div>
            <div className="socialNetwork">
               <ul>
                  <a
                     href="http://linkedin.com/in/eric-kamdem-teguia"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <h4>Linkedin</h4>
                     <i className="fab fa-linkedin"></i>
                  </a>

                  <a
                     href="https://github.com/ledemkam"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     <h4>GitHub</h4>
                     <i className="fab fa-github"></i>
                  </a>
               </ul>
            </div>
         </div>
      </div>
   );
};

export default Contact;
