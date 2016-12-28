import React, { Component } from 'react';

import MovingDiv from './MovingDiv.js';

class MainComponent extends Component {
  render() {
    return (
      <div>
        <MovingDiv />
        <MovingDiv />
        <MovingDiv />
        <MovingDiv />
        <MovingDiv />
        <MovingDiv />
      </div>
    );
  }
}

export default MainComponent;
