import React, { Component } from 'react';
import ProgessBar from './ProgressBar';

class Languages extends Component {
   state = {
      languages: [
         { id: '1', value: 'Javascript', xp: 1.6 },
         { id: '2', value: 'Css', xp: 2 },
         { id: '3', value: 'Html', xp: 2 },
         { id: '4', value: 'Java', xp: 1.2 },

         { id: '5', value: 'Firebase', xp: 1.2 },
         { id: '6', value: 'Wordpress', xp: 1.6 },
         { id: '7', value: 'Nodejs', xp: 1.4 },
      ],
      frameworks: [
         { id: '1', value: 'React', xp: 1.4 },
         { id: '2', value: 'Sass', xp: 1.5 },
         { id: '3', value: 'Bootstrap', xp: 1.6 },
         { id: '4', value: 'Expressjs', xp: 1.4 },
         { id: '5', value: 'Nextjs', xp: 1.2 },
         { id: '6', value: 'Material UI', xp: 0.5 },
      ],
   };
   render() {
      let { languages, frameworks } = this.state;
      return (
         <div className="languagesFrameworks">
            <ProgessBar
               languages={languages}
               className="languagesDisplay"
               title="languages"
            />
            <ProgessBar
               languages={frameworks}
               className="frameworksDisplay"
               title="Frameworks & Bibliothek"
            />
         </div>
      );
   }
}

export default Languages;
