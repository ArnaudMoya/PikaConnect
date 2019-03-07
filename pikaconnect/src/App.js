import React, { Component } from 'react';
import Signup from './Component/SignUp';
import Button from './Component/Button';
import './CSS/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Signup/>
        <Button/>
      </div>
    );
  }
}

export default App;
