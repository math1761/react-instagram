import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './routes/Home';
import People from './routes/People';
import Profile from './routes/Profile';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/people" component={People} />
            <Route path="/me" component={Profile} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
