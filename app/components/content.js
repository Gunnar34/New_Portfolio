import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './routes/home.js';
import Portfolio from './routes/portfolio.js';
import Resume from './routes/resume.js';
import Contact from './routes/contact.js';

const Routes = () => (
  <main>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/portfolio" component={Portfolio}/>
      <Route path="/resume" component={Resume}/>
      <Route path="/contact" component={Contact}/>
    </Switch>
  </main>
);

export default Routes;
