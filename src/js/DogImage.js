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
      <div>
        <img src={this.props.imageSource} onClick={this.handleClick.bind(this, this.props.imageSource)} height="25%" width="25%"/>
      </div>
    )
  }
};

export default DogImage;
