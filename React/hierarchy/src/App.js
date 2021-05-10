import './App.css';
import React, { Component } from 'react';
import Skills from './Components/Skills/Skills'
import Intro from './Components/Intro/Intro'

class App extends Component {
  render() {
    return (
      <div id='app-container'>
      <Intro />
      <Skills />
      </div>
    );
  }
}


export default App;
