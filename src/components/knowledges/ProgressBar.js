import React from 'react';

const ProgressBar = (props) => {
   return (
      <div className={props.className}>
         <h3>{props.title}</h3>
         <div className="compentencies">
            <span>xp Fähigkeiten</span>
            <span>1 xp</span>
            <span>2 xp</span>
         </div>

         <div>
            {props.languages.map((item) => {
               let xpComp = 2;
               let progressBar = (item.xp / xpComp) * 100 + '%';

               return (
                  <div key={item.id} className="languagesList">
                     <li>{item.value}</li>
                     <div
                        className="progressBar"
                        style={{ width: progressBar }}
                     ></div>
                  </div>
               );
            })}
         </div>
      </div>
   );
};

export default ProgressBar;
