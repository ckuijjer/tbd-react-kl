import React from 'react';
import _ from 'lodash';

import Gallery from './Gallery';

class GalleryContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
    }
  }

  componentDidMount() {
    this.getImagesFromApi();
  }

  getImagesFromApi() {
    return fetch(`https://www.reddit.com/r/kitty/hot.json?raw_json=1&limit=24`)
      .then(response => response.json())
      .then(response => {
        return response.data.children
          .map(child => {
            const resolutions = _.get(child, 'data.preview.images[0].resolutions', [])
            return resolutions
              .filter(resolution => resolution.width === 320)
              .map(resolution => resolution.url)[0];
          })
          .filter(thumbnail => thumbnail !== undefined);
      })
      .then(images => {
        this.setState({ images })
      })
  }

  render() {
    return (
      <Gallery images={this.state.images} />
    );
  }
}

export default GalleryContainer;
