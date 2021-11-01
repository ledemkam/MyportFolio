import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Knowledges from './pages/Knowledges';
import Notfound from './pages/NotFound';
import Portfolio from './pages/Portfolio';

const App = () => {
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route path="/" exact component={Home} />
               <Route path="/Fähigkeiten" component={Knowledges} />
               <Route path="/portfolio" component={Portfolio} />
               <Route path="/Kontakt" component={Contact} />
               <Route component={Notfound} />
            </Switch>
         </BrowserRouter>
      </>
   );
};

export default App;
