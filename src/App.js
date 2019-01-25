import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import Header from './components/header'
import Body from './components/body'

class App extends Component {
  render() {
    return (
      <div className="app">
          <Header />
          <Body />
      </div>
    );
  }
}

export default App;
