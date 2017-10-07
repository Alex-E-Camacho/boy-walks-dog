import React, { Component } from 'react';
import DogImage from './DogImage.js';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>Dog's I've Walked!!</h1>
        <DogImage />
      </div>
    )
  }

}

export default App;
