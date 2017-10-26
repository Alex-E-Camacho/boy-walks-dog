import React, { Component } from 'react';

class Overlay extends Component {
  constructor(props) {
    super(props);

  };


  render() {
    return (
      <div className="overlay">
        <img className="overlay-image" src={this.props.displayedImage} />
        <button id="close-overlay" type="button" onClick={this.props.closeOverlay}>✖</button>
      </div>
    )
  }
}

export default Overlay;
