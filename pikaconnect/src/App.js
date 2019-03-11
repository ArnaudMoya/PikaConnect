import React, { Component } from 'react';
import Signup from './Component/SignUp';
import Home from './Component/SignIN';
import Browser from './Component/Browserrouter'
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Browser />
      </div>
    );
  }
}

export default App;
