import React, { Component } from 'react';

class Overlay extends Component {
  constructor(props) {
    super(props);

  };


  render() {
    return (
      <div>
        <img id="overlay-image" src={this.props.displayedImage} />
        <button type="button" onClick={this.props.closeOverlay}>Close</button>
      </div>
    )
  }
}

export default Overlay;
