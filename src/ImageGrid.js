import React from 'react';
import Image from './Image';

const ImageGrid = ({ images = [], onClick = () => {} }) => {
  const style = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: 16,
  };

  return (
    <div style={style}>
      { 
        images.map(src => (<Image src={src} key={src} onClick={() => onClick(src) } />))
      }
    </div>
  )
};

export default ImageGrid;
