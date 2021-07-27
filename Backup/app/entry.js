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
import Portfolio from './views/Portfolio';
import Mobile from './views/Mobile';
import Embedded from './views/Embedded';
import BLEHero from './views/BLEHero';
import Services from './views/Services';
import Staff from './views/Staff'

// All of our CSS
import './static/css/main.scss';


ReactDOM.render(
  <Router basename={BASE_PATH}>
    <Switch>
      <Route exact path="/"component={Index}/>
      <Route path="/about" component={Staff} />
      <Route path="/mobile" component={Mobile} />
      <Route path="/embedded" component={Embedded} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/blehero" component={BLEHero} />
      <Route path="/contact" component={Contact} />
      <Route path="/services" component={Services} />
      {/* Only useful in development mode */}
      <Route component={NotFound} status={404} />
    </Switch>
  </Router>,
  document.getElementById('root'),
);