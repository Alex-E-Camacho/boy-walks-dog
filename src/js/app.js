import React, { Component } from 'react';
import DogImage from './DogImage.js';
import Lucy from '../img/lucy.jpg';
import Benji from '../img/benji.jpg';

class App extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <h1>Dogs I Have Walked</h1>
        <DogImage imageSource={Lucy}/>
      </div>
    )
  }

}

export default App;
