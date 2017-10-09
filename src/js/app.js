import React, { Component } from 'react';
import DogImage from './dogimage.js';
import Overlay from './overlay.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: "no image selected"
    }
  };

  render() {
    let requireImages = require.context("../img", false, /\.jpg/);

    let imageCollection = requireImages.keys().map(requireImages);

    let mappedImageCollection = imageCollection.map((dog) => {
      return (
        <DogImage imageSource={dog} />
      )
    })

    return (
      <div>
        <h1>Dogs I Have Walked</h1>
          <div>
            {mappedImageCollection}
          </div>
          <div>
            <Overlay displayedImage={this.state.selectedImage} />
          </div>
      </div>
    )
  }

}

export default App;
