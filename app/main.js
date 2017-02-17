import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory } from 'react-router';
import first from './first';
import two from './two';
import three from './three';

render((
  <Router history={hashHistory}>
    <Route path="/" component={first}>
      <Route path="/three" component={three}/>
    </Route>
    <Route path="/two" component={two}/>
  </Router>
), document.getElementById('app'))
