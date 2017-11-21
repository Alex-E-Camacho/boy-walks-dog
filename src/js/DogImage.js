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
      <div className="flex-item" onClick={this.handleClick.bind(this, this.props.imageSource)}>
        <img className="dog-image" src={this.props.imageSource}  alt={this.props.alt} />
        <div className="name-overlay">
          <div className="name-text">{this.props.alt}</div>
        </div>
      </div>
    )
  }
};

export default DogImage;
