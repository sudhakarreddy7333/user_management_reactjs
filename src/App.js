import React, { Component } from 'react';
import './App.css';
import LoginForm from './components/login';

class App extends Component {
  render() {
    return (
      <div className="App">
         <LoginForm></LoginForm> 
      </div>
    );
  }
}

export default App;
