import React from 'react';

const Image = ({ src, onClick = () => {} }) => {
  const style = {
    background: `url('${src}') center / cover`,
    paddingTop: '100%'
  };

  return (
    <div style={style} onClick={onClick} />
  )
}

export default Image;
