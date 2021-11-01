import React from 'react';
import Navigation from '../components/Navigation';

const Home = () => {
   return (
      <div className="home">
         <Navigation />
         <div className="homeContent">
            <div className="content">
               <h1>Eric Kamdem</h1>
               <h2>Full-Stack Developer</h2>
               <div className="pdf">
                  <a href="./media/CV Lebenslauf.pdf" target="_blank">
                     Download CV-Lebenslauf
                  </a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
