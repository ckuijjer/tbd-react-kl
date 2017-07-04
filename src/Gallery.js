import React from 'react';
import ImageGrid from './ImageGrid';
import FullScreenImage from './FullScreenImage';

export default class Gallery extends React.Component {
  constructor(...args) {
    super(...args);

    this.state = {
      fullScreenImage: null,
    };
  }

  onClick = (src) => {
    this.setState({
      fullScreenImage: src
    })
  }

  onClickFullScreenImage = () => {
    this.setState({
      fullScreenImage: null
    })
  }

  render() {
    const { images } = this.props;

    return (
      <div>
        <ImageGrid images={images} onClick={this.onClick} />
        {this.state.fullScreenImage && <FullScreenImage image={this.state.fullScreenImage} onClick={this.onClickFullScreenImage} />}
      </div>
    );
  }
}
