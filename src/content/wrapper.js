import React, { Component } from 'react';
import Recommendations from './recommendations';
import Marketplace from './marketplace';

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
