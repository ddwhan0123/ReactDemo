import React from 'react';
import { render } from 'react-dom';
import { Router , Route , hashHistory , Link , IndexRoute } from 'react-router';
import First from './First';
import Three from './Three';
import Two from './Two';
import Four from './Four';
import Six from './Six';


render((
  <Router history={hashHistory}>
    <Route path="/" component={First}>
    </Route>
    <IndexRoute component={Six}/>
    <Route path="/Three" component={Three}/>
    <Route path="/Three/:name" component={Four}/>
    <Route path="/Two" component={Two}/>
  </Router>
), document.getElementById('app'))
