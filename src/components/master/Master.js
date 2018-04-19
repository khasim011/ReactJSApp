import React, { Component } from 'react';
import './Master.css';
import Routes from '../../router.js';
import Drawer from '../../components/drawer/Drawer';

class Master extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Drawer />
          <img src="/assets/logo.svg" className="App-logo" alt="logo" />
          <h1 className="App-title">React App</h1>
        </header>
        <Routes />
      </div>
    );
  }
}

export default Master;
