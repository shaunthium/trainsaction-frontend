import React, { Component } from 'react';

class Marketplace extends Component {
  constructor(props) {
    super(props);
    this.state = {
      marketplaces: ['Alibaba', 'Ebay']
    };
  }

  render() {
    return (
      <div>
        {
          this.state.marketplaces.map((marketplace) => {
            return <p>{marketplace}</p>;
          })
        }
      </div>
    );
  }
}

export default Marketplace;
