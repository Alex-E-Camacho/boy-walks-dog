import React, { Component } from 'react';
import DogImage from './dogimage.js';
import Overlay from './overlay.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedImage: null
    };

    this.overlayDisplayOnClick = this.overlayDisplayOnClick.bind(this);
    this.resetSelectedImage = this.resetSelectedImage.bind(this);
  };

  overlayDisplayOnClick(imagePath) {
    this.setState({selectedImage: imagePath})
  };

  resetSelectedImage() {
    console.log("button clicked");
    this.setState({selectedImage: null})
  }

  render() {
    let requireImages = require.context("../img", false, /\.jpg/);
    let imageCollection = requireImages.keys().map(requireImages);

    let mappedImageCollection = imageCollection.map((dog) => {
      return (
        <DogImage imageSource={dog} imageClick={this.overlayDisplayOnClick} />
      )
    })

    return (
      <div>
        <h1>Dogs I Have Walked</h1>
          <div>
            {mappedImageCollection}
          </div>
          <div>
            <Overlay displayedImage={this.state.selectedImage} closeOverlay={this.resetSelectedImage} />
          </div>
      </div>
    )
  }

}

export default App;
