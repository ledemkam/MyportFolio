import React from 'react';

const Hobbies = () => {
   return (
      <div className="hobbies">
         <div>
            <h3>Hobbys</h3>
            <ul>
               <li className="hobby">
                  <i className="fas fa-music"></i>
                  <span>musik</span>
               </li>
               <li className="hobby">
                  <i className="fas fa-running"></i>
                  <span>Laufen</span>
               </li>
               <li className="hobby">
                  <i className="fas fa-gamepad"></i>
                  <span>Gaming</span>
               </li>
               <li className="hobby">
                  <i className="fas fa-globe"></i>
                  <span>Reisen</span>
               </li>
            </ul>
         </div>
      </div>
   );
};

export default Hobbies;
