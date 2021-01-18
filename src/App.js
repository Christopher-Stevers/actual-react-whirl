
import './App.css';

import Mainpage from './mainpage'
import error from './404'
import Shop from './shop'
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Component } from 'react';

function App() {
  return (<Router>
    <Switch>
      <Route exact path='/' component={Mainpage} />
      <Route exact path='/shop' component={Shop} />
      <Route component={error} />
    </Switch>
  </Router>
  );
}
export default App;
