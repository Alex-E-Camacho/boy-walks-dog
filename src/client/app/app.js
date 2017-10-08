import React, { Component } from 'react';
import DogImage from './DogImage.js';
import Lucy from '../public/images/lucy.jpg';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>Dogs I Have Walked</h1>
        <img src={Lucy} height="25%" width="25%"/>
        <DogImage />
      </div>
    )
  }

}

export default App;
