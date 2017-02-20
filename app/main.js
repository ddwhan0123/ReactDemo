import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory , Link } from 'react-router';
import First from './First';
import Three from './Three';
import Two from './Two';
import Four from './Four';



render((
  <Router history={hashHistory}>
    <Route path="/" component={First}>
    </Route>
    <Route path="/Three" component={Three}/>
    <Route path="/Three/:name" component={Four}/>
    <Route path="/Two" component={Two}/>
  </Router>
), document.getElementById('app'))
