import React from 'react';
import './App.css';
import Nav from './Nav';
import FirstApi from './FirstApi';
import SecondApi from './SecondApi';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/firstApi" component={FirstApi} />
          <Route path="/secondApi" component={SecondApi} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
