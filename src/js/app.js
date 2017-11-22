import React, { Component } from 'react';
import DogImage from './dogimage.js';
import Overlay from './overlay.js';
require('../css/index.css');

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
    this.setState({selectedImage: null})
  }

  render() {
    let requireImages = require.context("../img", false, /\.jpg/);
    let imageCollection = requireImages.keys().map(requireImages);

    let mappedImageCollection = imageCollection.map((dog) => {

      let textAlt = dog.substr(dog.indexOf("/") + 1).slice(0, -4);

      return (
        <DogImage imageSource={dog} imageClick={this.overlayDisplayOnClick} alt={textAlt} />
      )
    })

    let overlay = null;

    if (this.state.selectedImage) {
        overlay = <Overlay displayedImage={this.state.selectedImage} closeOverlay={this.resetSelectedImage} />
    }

    return (
      <main>
        <div className="bar">
          <div>
            <h1 className="title">boy walks dog</h1>
          </div>
        </div>
        <div className="spacer">
        </div>
        <div className="gallery">
          {mappedImageCollection}
        </div>

        <div>
          {overlay}
        </div>
      </main>
    )
  }

}

export default App;
