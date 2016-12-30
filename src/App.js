import React, { Component } from 'react';
//import './App.css';
import MainComponent from './components/MainComponent.js';
import Game from './components/Game.js';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Game />
         {/* <MainComponent /> */}
      </div>
    );
  }
}

export default App;
