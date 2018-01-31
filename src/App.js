import React, { Component } from 'react';
import User from "./user/user";
import EditUser from "./user/editUser";
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <User/>
          <EditUser></EditUser>
      </div>
    );
  }
}

export default App;
