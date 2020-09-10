import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import {Switch, Route} from 'react-router-dom';
import NotFound from './pages/notFound';

import Home from './pages/home';
import Detail from './pages/detail';

class App extends Component {

  render() {

    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/detail/:id" component={Detail} />  
          <Route component={NotFound}/>
        </Switch>
      </div>
    );
  }
}

export default App;
