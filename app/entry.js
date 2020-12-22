import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// Featured
import About from './views/About';
import Contact from './views/Contact';
import Index from './views/Index';
import NotFound from './views/NotFound';
import Projects from './views/Projects';
import Resume from './views/Resume';
import Stats from './views/Stats';
import Mobile from './views/Mobile';
import Embedded from './views/Embedded';
import IoT from './views/IoT';
import BLEHero from './views/BLEHero';

// All of our CSS
import './static/css/main.scss';


ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/about" component={About} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/embedded" component={Embedded} />
      <Route path="/iot" component={IoT} />
      <Route path="/projects" component={Projects} />
      <Route path="/blehero" component={BLEHero} />
      <Route path="/stats" component={Stats} />
      <Route path="/contact" component={Contact} />
      <Route path="/resume" component={Resume} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);
