import React, { Component } from 'react';

const Overlay = ({displayedImage}) => {
  if (!displayedImage) {
    return null;
  };

  return (
    <div>
      <img src={displayedImage} />
    </div>
  )
}

export default Overlay;
