import React, { Component } from 'react';

class DogImage extends Component {
  constructor(props) {
    super(props);
  };

  handleClick(source) {
    this.props.imageClick(source);
  }

  render() {
    return (
        <img className="dog-image" src={this.props.imageSource} onClick={this.handleClick.bind(this, this.props.imageSource)} />
    )
  }
};

export default DogImage;
