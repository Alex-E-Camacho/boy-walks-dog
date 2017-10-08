import React from 'react';

const DogImage = (props) => {
  return (
    <div>
      <img src={props.imageSource} height="25%" width="25%"/>
    </div>
  )
}

export default DogImage;
