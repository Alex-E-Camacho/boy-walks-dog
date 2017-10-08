import React, { Component } from 'react';
import DogImage from './DogImage.js';
import Lucy from '../public/images/lucy.jpg';
import Benji from '../public/images/benji.jpg';

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
