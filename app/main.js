import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory , Link } from 'react-router';
import first from './first';
import three from './three';
import two from './two';



render((
  <Router history={hashHistory}>
    <Route path="/" component={first}>
    </Route>
    <Route path="/three" component={three}/>
    <Route path="/two" component={two}/>
  </Router>
), document.getElementById('app'))
