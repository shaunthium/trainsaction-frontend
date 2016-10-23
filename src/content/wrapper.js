import React, { Component } from 'react';
import Recommendations from './recommendations/recommendations';
import Marketplace from './marketplace/marketplace';

class ContentWrapper extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.tab === 0 ?
          <Recommendations /> : <Marketplace />
        }
      </div>
    );
  }
}

export default ContentWrapper;
